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

        tl.from('.process-heading', { y: 30, opacity: 0 })
            .from('.process-step', { y: 50, opacity: 0, stagger: 0.2 }, '-=0.4');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-background border-t border-border-light">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 pr-12">
                        <div id="waypoint-process" className="process-heading w-2 h-2 bg-accent-new rounded-full mb-6"></div>
                        <p className="process-heading text-[10px] font-bold uppercase text-text-secondary tracking-widest mb-4">Process</p>
                        <h2 className="process-heading text-h2 font-semibold text-primary mb-6 leading-tight">Proven & effective<br />process.<br />That delivers<br />results<span id="waypoint-process-period" className="inline-block">.</span><br /></h2>
                        <p className="process-heading text-[16px] text-text-secondary max-w-sm leading-relaxed">
                            We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
                        </p>
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                        <div className="process-step bg-white rounded-card p-10 border border-border-light flex gap-8 relative shadow-subtle hover:shadow-lg transition-shadow">
                            <span className="text-xs font-mono text-text-secondary absolute top-10 left-8 md:static mt-1">01</span>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Discovery & Strategy</h3>
                                <p className="text-[15px] text-text-secondary leading-relaxed">
                                    We uncover your goals, audience, and challenges to build a clear roadmap for success.
                                </p>
                            </div>
                        </div>
                        <div className="process-step bg-white rounded-card p-10 border border-border-light flex gap-8 relative shadow-subtle hover:shadow-lg transition-shadow">
                            <span className="text-xs font-mono text-text-secondary absolute top-10 left-8 md:static mt-1">02</span>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Development & Launch</h3>
                                <p className="text-[15px] text-text-secondary leading-relaxed">
                                    From pixel to code, we craft high-performing websites and launch them flawlessly.
                                </p>
                            </div>
                        </div>
                        <div className="process-step bg-white rounded-card p-10 border border-border-light flex gap-8 relative shadow-subtle hover:shadow-lg transition-shadow">
                            <span className="text-xs font-mono text-text-secondary absolute top-10 left-8 md:static mt-1">03</span>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Optimization & Scale</h3>
                                <p className="text-[15px] text-text-secondary leading-relaxed">
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
