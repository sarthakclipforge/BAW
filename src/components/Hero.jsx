import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const testimonials = [
    {
        text: "Helped me go live in days, not weeks—highly recommend.",
        name: "Marcus T",
        position: "top-[16%] left-[2%]",
        rotate: "rotate-6",
    },
    {
        text: "The updates and attention to detail are unmatched.",
        name: "Nora S",
        position: "top-[30%] left-[9%]",
        rotate: "rotate-1",
    },
    {
        text: "Saved me weeks of work, and the result looks professional.",
        name: "Ethan L",
        position: "top-[44%] left-[2%]",
        rotate: "rotate-6",
    },
    {
        text: "Super smooth experience—launched my site in no time!",
        name: "Daniel K",
        position: "top-[18%] right-[2%]",
        rotate: "-rotate-6",
    },
    {
        text: "Beautiful template, easy to customize, and worth every penny.",
        name: "Amelia R",
        position: "top-[32%] right-[9%]",
        rotate: "-rotate-1",
    },
    {
        text: "Exactly what I needed to kickstart my SaaS project fast.",
        name: "Luis M",
        position: "top-[46%] right-[2%]",
        rotate: "-rotate-6",
    }
];

export default function Hero() {
    const containerRef = useRef(null);
    const testimonialRefs = useRef([]);

    const projects = [
        {
            name: "Redesigning Atlas",
            stats: "+45% engagement, -20% churn",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=600&fit=crop"
        },
        {
            name: "Launch MVP for Finlytics",
            stats: "Live in 27 days, 1,200+ early users",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
        },
        {
            name: "Revamping Nova Health",
            stats: "+60% conversions, 3x sign-ups",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
        }
    ];

    const [currentProject, setCurrentProject] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject((prev) => (prev + 1) % projects.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Split testimonials for left/right conveyor belts
    const leftTestimonialsRaw = testimonials.filter((_, i) => i < 3);
    const rightTestimonialsRaw = testimonials.filter((_, i) => i >= 3);
    // Duplicate for seamless looping
    const leftTestimonials = [...leftTestimonialsRaw, ...leftTestimonialsRaw];
    const rightTestimonials = [...rightTestimonialsRaw, ...rightTestimonialsRaw];

    useGSAP(() => {
        const tl = gsap.timeline();

        // Entrance Animations (Main Content)
        tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
            .from('.hero-heading-line', { y: 50, opacity: 0, duration: 1, stagger: 0.15 }, '-=0.6')
            .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.8 }, '-=0.8')
            .fromTo('.hero-btn',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                '-=0.6'
            )
            .from('.hero-social', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
            .from('.hero-project', { y: 40, opacity: 0, duration: 1 }, '-=0.6');

        // Conveyor Belt Logic
        const speed = 0.04; // Slightly increased for better flow
        const gap = 14; // Vertical spacing %

        // Initial setup for continuous loop
        const leftItems = gsap.utils.toArray('.test-card-left');
        const rightItems = gsap.utils.toArray('.test-card-right');

        // State trackers
        const leftState = leftItems.map((_, i) => ({ y: 16 + (i * gap) })); // Start at 16, 30, 44, etc.
        const rightState = rightItems.map((_, i) => ({ y: 18 + (i * gap) })); // Start at 18, 32, 46, etc.

        // Parabolic Curve Functions
        const calculateLeft = (y) => {
            // Vertex at (30, 9)
            // x = a(y-h)^2 + k
            // Passes through (16, 2) -> 2 = a(16-30)^2 + 9 -> -7 = 196a -> a = -0.0357
            const a = -0.0357;
            const x = a * Math.pow(y - 30, 2) + 9;

            // Rotation Vertex at (30, 1)
            // Passes through (16, 6) -> 6 = a(16-30)^2 + 1 -> 5 = 196a -> a = 0.0255
            const rotA = 0.0255;
            const rot = rotA * Math.pow(y - 30, 2) + 1;

            return { x, rot };
        };

        const calculateRight = (y) => {
            // Mirrored relative to Right side logic (vertically shifted by +2%)
            // Vertex at (32, 9)
            const a = -0.0357;
            const x = a * Math.pow(y - 32, 2) + 9;

            // Rotation Mirrored (Negative)
            // Vertex at (32, -1) -> Passes through (18, -6)
            const rotA = -0.0255;
            const rot = rotA * Math.pow(y - 32, 2) - 1;

            return { x, rot };
        };

        // Animation Loop
        const updateConveyor = () => {
            // Left Side
            leftItems.forEach((el, i) => {
                // Move Upwards
                leftState[i].y -= speed;

                // Wrap around
                // Range logic: Visible roughly 0 to 60. 
                // We have 6 items spaced 14 apart = 84 total span.
                // Reset threshold: When it goes too high (top), move to bottom? 
                // Or moving UP (decreasing Y), so wrap to bottom when < some value.
                // Let's wrap when < 2 (mask area) to 2 + (6*14) = 86
                if (leftState[i].y < 2) {
                    leftState[i].y += (leftItems.length * gap);
                }

                const { x, rot } = calculateLeft(leftState[i].y);

                // Opacity Fade at edges (Overlay effect)
                // Center functional area is ~16-44. Fade out beyond that.
                // Simple distance based opacity
                const dist = Math.abs(leftState[i].y - 30);
                const opacity = 1 - Math.max(0, (dist - 15) / 10); // Fade out after 15 units from center

                gsap.set(el, {
                    top: `${leftState[i].y}%`,
                    left: `${x}%`,
                    rotation: rot,
                    opacity: Math.max(0, opacity)
                });
            });

            // Right Side
            rightItems.forEach((el, i) => {
                rightState[i].y -= speed;
                if (rightState[i].y < 4) { // Offset check
                    rightState[i].y += (rightItems.length * gap);
                }

                const { x, rot } = calculateRight(rightState[i].y);

                const dist = Math.abs(rightState[i].y - 32);
                const opacity = 1 - Math.max(0, (dist - 15) / 10);

                gsap.set(el, {
                    top: `${rightState[i].y}%`,
                    right: `${x}%`,
                    rotation: rot,
                    opacity: Math.max(0, opacity)
                });
            });
        };

        gsap.ticker.add(updateConveyor);

        return () => gsap.ticker.remove(updateConveyor);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="pt-[160px] pb-16 relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
            {/* Gradient Mask for Top/Bottom Fade Effect */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f3f5f7] to-transparent z-30 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f3f5f7] to-transparent z-30 pointer-events-none"></div>

            {/* Left Conveyor Belt */}
            {leftTestimonials.map((t, i) => (
                <div
                    key={`left-${i}`}
                    className="test-card-left absolute hidden xl:block z-10"
                    style={{ willChange: 'transform, top, left, opacity' }}
                >
                    <div className="bg-white p-4 rounded-[16px] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.07)] max-w-[220px] transition-all duration-300">
                        <div className="flex justify-between items-start gap-3 mb-3">
                            <p className="text-[12px] text-gray-800 leading-relaxed font-normal flex-1">"{t.text}"</p>
                            <span className="text-[20px] text-gray-300 font-serif leading-none flex-shrink-0">❞</span>
                        </div>
                        <p className="text-[12px] font-semibold text-gray-900">– {t.name}</p>
                    </div>
                </div>
            ))}

            {/* Right Conveyor Belt */}
            {rightTestimonials.map((t, i) => (
                <div
                    key={`right-${i}`}
                    className="test-card-right absolute hidden xl:block z-10"
                    style={{ willChange: 'transform, top, right, opacity' }}
                >
                    <div className="bg-white p-4 rounded-[16px] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.07)] max-w-[220px] transition-all duration-300">
                        <div className="flex justify-between items-start gap-3 mb-3">
                            <p className="text-[12px] text-gray-800 leading-relaxed font-normal flex-1">"{t.text}"</p>
                            <span className="text-[20px] text-gray-300 font-serif leading-none flex-shrink-0">❞</span>
                        </div>
                        <p className="text-[12px] font-semibold text-gray-900">– {t.name}</p>
                    </div>
                </div>
            ))}

            <div className="max-w-screen-xl mx-auto px-6 relative z-40 text-center">
                {/* Open for Work Badge */}
                <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 mb-8 shadow-sm">
                    <span id="waypoint-hero" className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Open to Work</span>
                </div>

                {/* Heading */}
                <h1 className="text-[56px] leading-[1.05] font-bold tracking-tight mb-6 text-primary max-w-[760px] mx-auto">
                    <div className="hero-heading-line">Web & Brand Design</div>
                    <div className="hero-heading-line font-['Playfair_Display'] italic font-normal text-[56px]">For Ambitious Founders</div>
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle text-[16px] text-text-secondary mb-10 max-w-[480px] mx-auto leading-relaxed text-gray-500">
                    We build conversion-driven websites and marketing that attract, engage, and convert.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 relative z-50">
                    <Link
                        className="hero-btn bg-[#0A0A0A] hover:bg-black text-white pr-2 pl-6 py-2 rounded-full font-medium transition-all flex items-center gap-4 text-[15px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.6),0_8px_10px_-6px_rgba(0,0,0,1)] hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.7),0_12px_20px_-8px_rgba(0,0,0,1)] hover:-translate-y-1 group border-t border-white/20 border-b-0 border-x border-white/5 relative z-50"
                        to="/contact"
                    >
                        Book A Call
                        <span className="w-9 h-9 rounded-full bg-[#1F1F1F] flex items-center justify-center group-hover:bg-[#333] transition-colors border-t border-white/10 shadow-[inner_0_1px_0_0_rgba(255,255,255,0.1)]">
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </span>
                    </Link>
                    <Link
                        className="hero-btn bg-gray-50 hover:bg-gray-100 text-[#0A0A0A] pr-2 pl-6 py-2 rounded-full font-medium transition-all flex items-center gap-4 text-[15px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15),0_8px_10px_-6px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.2),0_12px_20px_-8px_rgba(0,0,0,0.15)] hover:-translate-y-1 group border border-gray-200 relative z-50"
                        to="/projects"
                    >
                        View Projects
                        <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </span>
                    </Link>
                </div>

                {/* Social Proof */}
                <div className="hero-social flex items-center justify-center gap-4 mb-24">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-[3px] border-white overflow-hidden bg-gray-200">
                                <img
                                    alt={`User ${i}`}
                                    className="w-full h-full object-cover"
                                    src={`https://lh3.googleusercontent.com/aida-public/AB6AXu${['B2jVeNYOpZW', 'CyycclS', 'AZTBq0PnAdLP', 'D6vpP0D7'][i] || 'B2jVeNYOpZW'}...`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-start leading-none gap-1">
                        <div className="flex text-primary text-[11px] gap-0.5">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <span key={i} className="material-symbols-outlined text-[14px] fill-current">star</span>
                            ))}
                        </div>
                        <span className="text-[11px] text-gray-500 font-medium">From 150+ reviews</span>
                    </div>
                </div>

                {/* Project Card - Wide Layout with Rotating Images */}
                <div className="hero-project bg-white rounded-[24px] p-6 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden relative w-[70vw] mx-auto">
                    {/* Header Row */}
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-6">
                            <h3 className="font-bold text-lg text-gray-900 tracking-tight">{projects[currentProject].name}</h3>
                            <p className="text-gray-400 text-sm hidden sm:block">{projects[currentProject].stats}</p>
                        </div>
                        <Link className="bg-white text-black pl-5 pr-2 py-1.5 rounded-full flex items-center gap-3 text-xs font-bold border border-gray-200 hover:bg-gray-50 transition-all hover:shadow-md" to="/projects">
                            View Project
                            <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </span>
                        </Link>
                    </div>

                    {/* Rotating Image */}
                    <div className="rounded-[16px] overflow-hidden relative h-[340px] bg-gray-100">
                        {projects.map((project, index) => (
                            <img
                                key={index}
                                src={project.image}
                                alt={project.name}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentProject ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Right Widget - Made in Framer only */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 pointer-events-none">
                <a href="#" className="pointer-events-auto bg-white text-black px-3 py-1.5 rounded-[8px] font-bold text-[11px] shadow-lg border border-gray-100 flex items-center gap-1.5 hover:bg-gray-50 transition-colors">
                    <span className="material-symbols-outlined text-[14px]">diamond</span> Made in Framer
                </a>
            </div>
        </section>
    );
}
