export default function Process() {
    return (
        <section className="py-160 bg-background border-t border-border-light">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 pr-12">
                        <div className="w-2 h-2 bg-accent-new rounded-full mb-6"></div>
                        <p className="text-[10px] font-bold uppercase text-text-secondary tracking-widest mb-4">Process</p>
                        <h2 className="text-h2 font-semibold text-primary mb-6 leading-tight">Proven & effective<br />process.<br />That delivers<br />results.<br /></h2>
                        <p className="text-[16px] text-text-secondary max-w-sm leading-relaxed">
                            We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
                        </p>
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                        <div className="bg-white rounded-card p-10 border border-border-light flex gap-8 relative shadow-subtle hover:shadow-lg transition-shadow">
                            <span className="text-xs font-mono text-text-secondary absolute top-10 left-8 md:static mt-1">01</span>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Discovery & Strategy</h3>
                                <p className="text-[15px] text-text-secondary leading-relaxed">
                                    We uncover your goals, audience, and challenges to build a clear roadmap for success.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-card p-10 border border-border-light flex gap-8 relative shadow-subtle hover:shadow-lg transition-shadow">
                            <span className="text-xs font-mono text-text-secondary absolute top-10 left-8 md:static mt-1">02</span>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Development & Launch</h3>
                                <p className="text-[15px] text-text-secondary leading-relaxed">
                                    From pixel to code, we craft high-performing websites and launch them flawlessly.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-card p-10 border border-border-light flex gap-8 relative shadow-subtle hover:shadow-lg transition-shadow">
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
