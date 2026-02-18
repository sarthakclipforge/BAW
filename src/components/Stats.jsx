import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        value: 500,
        suffix: '+',
        label: 'Successful projects delivered',
        description: 'We build high-impact websites and digital experiences for startups and enterprises to scale fast.',
        icon: 'rocket_launch',
        barWidth: '75%',
    },
    {
        value: 240,
        suffix: '%',
        label: 'Increased in conversion rate',
        description: 'Purpose-built digital experiences that elevate brands and increase conversion rates at every touchpoint.',
        icon: 'trending_up',
        barWidth: '90%',
    },
    {
        value: 100,
        prefix: '$',
        suffix: 'M+',
        label: 'Seed + series A funding',
        description: "Through strategic design, marketing, and conversion optimization, we've helped businesses scale faster.",
        icon: 'diamond',
        barWidth: '60%',
    },
];

export default function Stats() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        // Force initial state visibility to hidden to prevent FOUC, but handle it via GSAP
        // We use fromTo to ensure we have control over both states

        // Heading reveal
        gsap.fromTo('.stats-heading',
            { y: 50, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stats-heading',
                    start: 'top 90%', // Trigger earlier
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Cards staggered reveal
        gsap.fromTo('.stat-card',
            { y: 80, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stats-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Number counters
        document.querySelectorAll('.stat-number').forEach((el) => {
            const target = parseFloat(el.dataset.target);
            const obj = { val: 0 };
            gsap.fromTo(obj,
                { val: 0 },
                {
                    val: target,
                    duration: 2.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                    },
                    onUpdate: () => {
                        el.textContent = Math.round(obj.val);
                    },
                }
            );
        });

        // Progress bar fill
        gsap.fromTo('.stat-bar-fill',
            { scaleX: 0 },
            {
                scaleX: 1,
                transformOrigin: 'left center',
                duration: 1.4,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stats-grid',
                    start: 'top 85%',
                },
            }
        );

        // Icon float loop (no ScrollTrigger needed, just run it)
        gsap.to('.stat-icon', {
            y: -5,
            duration: 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.4,
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-160 bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6">

                {/* Heading */}
                <div className="stats-heading text-center mb-20 relative">
                    <div id="waypoint-stats" className="w-2 h-2 bg-accent-new rounded-full mx-auto mb-6"></div>

                    {/* Watermark */}
                    <span
                        className="absolute inset-0 flex items-center justify-center text-[180px] font-bold text-primary select-none pointer-events-none leading-none"
                        style={{ opacity: 0.03 }}
                        aria-hidden="true"
                    >
                        ∞
                    </span>

                    <h2 className="text-h2 font-semibold text-primary mb-4 leading-tight relative z-10">
                        Lamosa makes it simple,<br />
                        and delivers results<span id="waypoint-stats-period" className="inline-block">.</span>
                    </h2>
                    <p className="text-[16px] text-text-secondary max-w-md mx-auto leading-relaxed relative z-10">
                        Numbers that speak louder than words. Real results, real clients, real growth.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card group relative bg-background rounded-card p-10 border border-transparent hover:border-border-light hover:bg-white hover:shadow-subtle transition-all duration-500 overflow-hidden"
                        >
                            {/* Corner accent on hover */}
                            <div
                                className="absolute top-0 right-0 w-28 h-28 rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: 'radial-gradient(circle at top right, rgba(249,115,22,0.1) 0%, transparent 70%)' }}
                            />

                            {/* Icon */}
                            <div className="stat-icon w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                <span className="material-symbols-outlined text-accent-new text-[20px]">{stat.icon}</span>
                            </div>

                            {/* Number */}
                            <div className="flex items-end gap-0.5 mb-2">
                                {stat.prefix && (
                                    <span className="text-[48px] font-bold text-primary leading-none tracking-tight">{stat.prefix}</span>
                                )}
                                <span
                                    className="stat-number text-[56px] font-bold text-primary leading-none tracking-tight tabular-nums"
                                    data-target={stat.value}
                                >
                                    {stat.value}
                                </span>
                                <span className="text-[48px] font-bold text-accent-new leading-none tracking-tight">{stat.suffix}</span>
                            </div>

                            {/* Label */}
                            <p className="font-bold text-[15px] text-primary mb-3">{stat.label}</p>

                            {/* Progress bar */}
                            <div className="h-px bg-border-light mb-5 overflow-hidden rounded-full">
                                <div
                                    className="stat-bar-fill h-full bg-accent-new rounded-full"
                                    style={{ width: stat.barWidth }}
                                />
                            </div>

                            {/* Description */}
                            <p className="text-[14px] text-text-secondary leading-relaxed">{stat.description}</p>
                        </div>
                    ))}
                </div>

                {/* Trust strip */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                    {['Y Combinator', 'Techstars', 'a16z', 'Sequoia', 'First Round'].map((name) => (
                        <span key={name} className="text-[12px] font-bold text-text-secondary uppercase tracking-widest opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-default">
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
