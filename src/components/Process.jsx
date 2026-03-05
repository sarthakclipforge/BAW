import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Process() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from('.process-heading', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
            .from('.process-step', {
                x: -60,
                y: 30,
                opacity: 0,
                scale: 0.95,
                stagger: 0.18,
                duration: 0.9,
                ease: 'power3.out'
            }, '-=0.5');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 bg-background border-t border-border-light">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5 pr-8">
                        <div id="waypoint-process" className="process-heading w-1.5 h-1.5 bg-accent-new rounded-full mb-4"></div>
                        <p className="process-heading text-[10px] font-bold uppercase text-text-secondary tracking-widest mb-3">Process</p>
                        <h2 className="process-heading text-[36px] font-semibold text-primary mb-5 leading-tight tracking-[-0.02em]">Proven & effective<br />process.<br />That delivers<br />results<span id="waypoint-process-period" className="inline-block">.</span><br /></h2>
                        <p className="process-heading text-[15px] text-text-secondary max-w-sm leading-relaxed">
                            We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
                        </p>
                    </div>
                    <div className="lg:col-span-7 space-y-3">
                        <div className="process-step bg-white rounded-2xl p-7 border border-border-light flex gap-6 relative shadow-subtle hover-lift hover-glow transition-all duration-400">
                            <span className="text-xs font-mono text-text-secondary absolute top-7 left-6 md:static mt-1">01</span>
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-2">Discovery & Strategy</h3>
                                <p className="text-[14px] text-text-secondary leading-relaxed">
                                    We uncover your goals, audience, and challenges to build a clear roadmap for success.
                                </p>
                            </div>
                        </div>
                        <div className="process-step bg-white rounded-2xl p-7 border border-border-light flex gap-6 relative shadow-subtle hover-lift hover-glow transition-all duration-400">
                            <span className="text-xs font-mono text-text-secondary absolute top-7 left-6 md:static mt-1">02</span>
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-2">Development & Launch</h3>
                                <p className="text-[14px] text-text-secondary leading-relaxed">
                                    From pixel to code, we craft high-performing websites and launch them flawlessly.
                                </p>
                            </div>
                        </div>
                        <div className="process-step bg-white rounded-2xl p-7 border border-border-light flex gap-6 relative shadow-subtle hover-lift hover-glow transition-all duration-400">
                            <span className="text-xs font-mono text-text-secondary absolute top-7 left-6 md:static mt-1">03</span>
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-2">Optimization & Scale</h3>
                                <p className="text-[14px] text-text-secondary leading-relaxed">
                                    We monitor, refine, and enhance to ensure continuous growth and lasting impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
