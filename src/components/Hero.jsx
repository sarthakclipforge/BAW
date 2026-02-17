import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
    {
        text: "Helped me go live in days, not weeks—highly recommend.",
        name: "Marcus T",
        position: "top-[16%] left-[2%]",
        rotate: "rotate-6",
        opacity: "opacity-40",
        delay: "animate-[float_6s_ease-in-out_infinite]",
    },
    {
        text: "The updates and attention to detail are unmatched.",
        name: "Nora S",
        position: "top-[30%] left-[9%]",
        rotate: "rotate-1",
        opacity: "opacity-100",
        delay: "animate-[float_7s_ease-in-out_infinite_0.5s]",
    },
    {
        text: "Saved me weeks of work, and the result looks professional.",
        name: "Ethan L",
        position: "top-[44%] left-[2%]",
        rotate: "rotate-6",
        opacity: "opacity-40",
        delay: "animate-[float_8s_ease-in-out_infinite_1s]",
    },
    {
        text: "Super smooth experience—launched my site in no time!",
        name: "Daniel K",
        position: "top-[18%] right-[2%]",
        rotate: "-rotate-6",
        opacity: "opacity-40",
        delay: "animate-[float_5s_ease-in-out_infinite_1s]",
    },
    {
        text: "Beautiful template, easy to customize, and worth every penny.",
        name: "Amelia R",
        position: "top-[32%] right-[9%]",
        rotate: "-rotate-1",
        opacity: "opacity-100",
        delay: "animate-[float_6s_ease-in-out_infinite_0.3s]",
    },
    {
        text: "Exactly what I needed to kickstart my SaaS project fast.",
        name: "Luis M",
        position: "top-[46%] right-[2%]",
        rotate: "-rotate-6",
        opacity: "opacity-40",
        delay: "animate-[float_7s_ease-in-out_infinite_1.5s]",
    }
];

export default function Hero() {
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
                prev.map((ch, i) =>
                    lockedRef.current[i] ? targetWord[i] : chars[Math.floor(Math.random() * chars.length)]
                )
            );
        }, 40);

        // Lock each letter one by one with staggered delay
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

        // Stop scrambling after all letters are locked
        const stopTimer = setTimeout(() => {
            clearInterval(scrambleInterval);
        }, 600 + targetWord.length * 150 + 100);

        return () => {
            clearInterval(scrambleInterval);
            timers.forEach(clearTimeout);
            clearTimeout(stopTimer);
        };
    }, []);

    return (
        <section className="pt-[160px] pb-[80px] relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
            {/* Gradient Mask for Top/Bottom Fade Effect */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F8F8F8] to-transparent z-30 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F8F8F8] to-transparent z-30 pointer-events-none"></div>

            {/* Floating Testimonial Cards */}
            {testimonials.map((t, i) => (
                <div key={i} className={`absolute ${t.position} hidden xl:block z-10 ${t.delay} ${t.opacity}`}>
                    <div className={`bg-white p-4 rounded-[16px] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.07)] max-w-[220px] transform ${t.rotate} hover:scale-105 transition-all duration-300`}>
                        <div className="flex justify-between items-start gap-3 mb-3">
                            <p className="text-[12px] text-gray-800 leading-relaxed font-normal flex-1">"{t.text}"</p>
                            <span className="text-[20px] text-gray-300 font-serif leading-none flex-shrink-0">❞</span>
                        </div>
                        <p className="text-[12px] font-semibold text-gray-900">– {t.name}</p>
                    </div>
                </div>
            ))}

            <div className="max-w-screen-xl mx-auto px-6 relative z-10 text-center">
                {/* Open for Work Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 mb-8 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Open to Work</span>
                </div>

                {/* Heading */}
                <h1 className="text-[56px] leading-[1.05] font-bold tracking-tight mb-6 text-primary max-w-[760px] mx-auto">
                    Web & Brand{' '}
                    <span className="font-pixel inline-block relative">
                        {/* Invisible reference text to hold the exact width */}
                        <span className="invisible">Design</span>
                        {/* Animated letters positioned on top */}
                        <span className="absolute inset-0 flex justify-center">
                            {letters.map((ch, i) => (
                                <span
                                    key={i}
                                    className={`inline-block text-center ${locked[i] ? 'animate-letter-lock' : ''
                                        }`}
                                    style={{ width: `${100 / targetWord.length}%` }}
                                >
                                    {ch || '\u00A0'}
                                </span>
                            ))}
                        </span>
                    </span>
                    <br />
                    <span className="font-['Playfair_Display'] italic font-normal text-[56px]">For Ambitious Founders</span>
                </h1>

                {/* Subtitle */}
                <p className="text-[16px] text-text-secondary mb-10 max-w-[480px] mx-auto leading-relaxed text-gray-500">
                    We build conversion-driven websites and marketing that attract, engage, and convert.
                </p>

                {/* CTA Buttons - Intense Shadow */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link
                        className="bg-primary hover:bg-black text-white px-7 py-3 rounded-full font-medium transition-all flex items-center gap-3 text-[14px] shadow-[0_20px_50px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_-5px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 group"
                        to="/contact"
                    >
                        Book A Call
                        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center border border-white/10 group-hover:bg-white/30 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </span>
                    </Link>
                    <Link
                        className="bg-white hover:bg-gray-50 text-primary px-7 py-3.5 rounded-full font-semibold transition-all border border-gray-200 shadow-sm hover:shadow-md text-[14px] hover:-translate-y-0.5"
                        to="/projects"
                    >
                        View Projects
                    </Link>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-center gap-4 mb-24">
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
                <div className="bg-white rounded-[24px] p-6 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden relative w-[70vw] mx-auto">
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
