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

    const targetWord = 'Design';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const [letters, setLetters] = useState(Array(targetWord.length).fill(''));
    const [locked, setLocked] = useState(Array(targetWord.length).fill(false));
    const lockedRef = useRef(Array(targetWord.length).fill(false));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject((prev) => (prev + 1) % projects.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const scrambleInterval = setInterval(() => {
            setLetters(prev =>
                prev.map((_, i) =>
                    lockedRef.current[i] ? targetWord[i] : chars[Math.floor(Math.random() * chars.length)]
                )
            );
        }, 40);

        const timers = targetWord.split('').map((_, i) =>
            setTimeout(() => {
                lockedRef.current[i] = true;
                setLocked(prev => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                });
                setLetters(prev => {
                    const next = [...prev];
                    next[i] = targetWord[i];
                    return next;
                });
            }, 600 + i * 150)
        );

        const stopTimer = setTimeout(() => {
            clearInterval(scrambleInterval);
        }, 600 + targetWord.length * 150 + 100);

        return () => {
            clearInterval(scrambleInterval);
            timers.forEach(clearTimeout);
            clearTimeout(stopTimer);
        };
    }, []);

    // Split testimonials for left/right conveyor belts
    const leftTestimonialsRaw = testimonials.filter((_, i) => i < 3);
    const rightTestimonialsRaw = testimonials.filter((_, i) => i >= 3);
    const leftTestimonials = [...leftTestimonialsRaw, ...leftTestimonialsRaw];
    const rightTestimonials = [...rightTestimonialsRaw, ...rightTestimonialsRaw];

    useGSAP(() => {
        const tl = gsap.timeline();

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

        const speed = 0.04;
        const gap = 14;

        const leftItems = gsap.utils.toArray('.test-card-left');
        const rightItems = gsap.utils.toArray('.test-card-right');

        const leftState = leftItems.map((_, i) => ({ y: 16 + (i * gap) }));
        const rightState = rightItems.map((_, i) => ({ y: 18 + (i * gap) }));

        const calculateLeft = (y) => {
            const a = -0.0357;
            const x = a * Math.pow(y - 30, 2) + 9;
            const rotA = 0.0255;
            const rot = rotA * Math.pow(y - 30, 2) + 1;
            return { x, rot };
        };

        const calculateRight = (y) => {
            const a = -0.0357;
            const x = a * Math.pow(y - 32, 2) + 9;
            const rotA = -0.0255;
            const rot = rotA * Math.pow(y - 32, 2) - 1;
            return { x, rot };
        };

        const updateConveyor = () => {
            leftItems.forEach((el, i) => {
                leftState[i].y -= speed;
                if (leftState[i].y < 2) leftState[i].y += (leftItems.length * gap);
                const { x, rot } = calculateLeft(leftState[i].y);
                const dist = Math.abs(leftState[i].y - 30);
                const opacity = 1 - Math.max(0, (dist - 15) / 10);
                gsap.set(el, { top: `${leftState[i].y}%`, left: `${x}%`, rotation: rot, opacity: Math.max(0, opacity) });
            });

            rightItems.forEach((el, i) => {
                rightState[i].y -= speed;
                if (rightState[i].y < 4) rightState[i].y += (rightItems.length * gap);
                const { x, rot } = calculateRight(rightState[i].y);
                const dist = Math.abs(rightState[i].y - 32);
                const opacity = 1 - Math.max(0, (dist - 15) / 10);
                gsap.set(el, { top: `${rightState[i].y}%`, right: `${x}%`, rotation: rot, opacity: Math.max(0, opacity) });
            });
        };

        gsap.ticker.add(updateConveyor);
        return () => gsap.ticker.remove(updateConveyor);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="pt-[120px] pb-[48px] relative overflow-hidden min-h-[85vh] flex flex-col justify-center">
            {/* Floating Gradient Orbs */}
            <div className="gradient-orb gradient-orb-1 top-[10%] left-[-5%] z-[1]"></div>
            <div className="gradient-orb gradient-orb-2 top-[60%] right-[-8%] z-[1]"></div>
            <div className="gradient-orb gradient-orb-3 bottom-[-10%] left-[30%] z-[1]"></div>

            {/* Gradient Mask */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F8F8F8] to-transparent z-30 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F8F8] to-transparent z-30 pointer-events-none"></div>

            {/* Left Conveyor Belt */}
            {leftTestimonials.map((t, i) => (
                <div
                    key={`left-${i}`}
                    className="test-card-left absolute hidden xl:block z-10"
                    style={{ willChange: 'transform, top, left, opacity' }}
                >
                    <div className={`bg-white p-3 rounded-[12px] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.07)] max-w-[200px] transform ${t.rotate} hover:scale-105 transition-all duration-300`}>
                        <div className="flex justify-between items-start gap-2 mb-2">
                            <p className="text-[11px] text-gray-800 leading-relaxed font-normal flex-1">"{t.text}"</p>
                            <span className="text-[18px] text-gray-300 font-serif leading-none flex-shrink-0">❞</span>
                        </div>
                        <p className="text-[11px] font-semibold text-gray-900">– {t.name}</p>
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
                    <div className={`bg-white p-3 rounded-[12px] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.07)] max-w-[200px] transform ${t.rotate} hover:scale-105 transition-all duration-300`}>
                        <div className="flex justify-between items-start gap-2 mb-2">
                            <p className="text-[11px] text-gray-800 leading-relaxed font-normal flex-1">"{t.text}"</p>
                            <span className="text-[18px] text-gray-300 font-serif leading-none flex-shrink-0">❞</span>
                        </div>
                        <p className="text-[11px] font-semibold text-gray-900">– {t.name}</p>
                    </div>
                </div>
            ))}

            <div className="max-w-screen-xl mx-auto px-6 relative z-40 text-center">
                {/* Badge */}
                <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 mb-6 shadow-sm">
                    <span id="waypoint-hero" className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Open to Work</span>
                </div>

                {/* Heading */}
                <h1 className="text-[44px] leading-[1.05] font-bold tracking-tight mb-5 text-primary max-w-[640px] mx-auto">
                    <div className="hero-heading-line">
                        Web & Brand{' '}
                        <span className="font-pixel inline-block relative">
                            <span className="invisible">Design</span>
                            <span className="absolute inset-0 flex justify-center">
                                {letters.map((ch, i) => (
                                    <span
                                        key={i}
                                        className={`inline-block text-center ${locked[i] ? 'animate-letter-lock' : ''}`}
                                        style={{ width: `${100 / targetWord.length}%` }}
                                    >
                                        {ch || '\u00A0'}
                                    </span>
                                ))}
                            </span>
                        </span>
                    </div>
                    <div className="hero-heading-line font-['Playfair_Display'] italic font-normal text-[44px]">For Ambitious Founders</div>
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle text-[15px] text-text-secondary mb-8 max-w-[440px] mx-auto leading-relaxed text-gray-500">
                    We build conversion-driven websites and marketing that attract, engage, and convert.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 relative z-50">
                    <Link
                        className="hero-btn bg-primary hover:bg-black text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2.5 text-[13px] shadow-[0_20px_50px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_-5px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:scale-[1.02] group relative z-50 animate-pulse-glow"
                        to="/contact"
                    >
                        Book A Call
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center border border-white/10 group-hover:bg-white/30 group-hover:rotate-[-45deg] transition-all duration-300">
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                    </Link>
                    <Link
                        className="hero-btn bg-white hover:bg-gray-50 text-primary px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-lg text-[13px] hover:-translate-y-1 hover:scale-[1.02] hover:border-gray-300 relative z-50 gradient-border"
                        to="/projects"
                    >
                        View Projects
                    </Link>
                </div>

                {/* Social Proof */}
                <div className="hero-social flex items-center justify-center gap-4 mb-16">
                    <div className="flex -space-x-3">
                        {[
                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                            'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
                            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
                        ].map((src, i) => (
                            <div key={i} className="w-7 h-7 rounded-full border-[3px] border-white overflow-hidden bg-gray-200">
                                <img
                                    alt={`Client ${i + 1}`}
                                    className="w-full h-full object-cover"
                                    src={src}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-start leading-none gap-1">
                        <div className="flex text-primary text-[11px] gap-0.5">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <span key={i} className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            ))}
                        </div>
                        <span className="text-[11px] text-gray-500 font-medium">From 150+ reviews</span>
                    </div>
                </div>

                {/* Project Card */}
                <div className="hero-project bg-white rounded-[20px] p-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden relative w-[65vw] mx-auto hover-glow transition-all duration-500">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-5">
                            <h3 className="font-bold text-base text-gray-900 tracking-tight">{projects[currentProject].name}</h3>
                            <p className="text-gray-400 text-sm hidden sm:block">{projects[currentProject].stats}</p>
                        </div>
                        <Link className="bg-white text-black pl-4 pr-2 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold border border-gray-200 hover:bg-gray-50 transition-all hover:shadow-md" to="/projects">
                            View Project
                            <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                            </span>
                        </Link>
                    </div>
                    <div className="rounded-[12px] overflow-hidden relative h-[260px] bg-gray-100">
                        {projects.map((project, index) => (
                            <img
                                key={index}
                                src={project.image}
                                alt={project.name}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentProject ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
}
