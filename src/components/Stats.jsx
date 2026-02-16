export default function Stats() {
    return (
        <section className="py-160 bg-white">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-24">
                    <div className="w-2 h-2 bg-accent-new rounded-full mx-auto mb-6"></div>
                    <h2 className="text-h2 font-semibold text-primary mb-4 leading-tight">Lamosa makes it simple,<br />and delivers results.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-background p-10 rounded-card border border-transparent hover:border-border-light transition-all duration-300">
                        <h3 className="text-[48px] font-bold mb-3 text-primary leading-none tracking-tight">500+</h3>
                        <p className="font-bold text-lg mb-4 text-primary">Successful projects delivered</p>
                        <p className="text-[15px] text-text-secondary leading-relaxed">
                            We build high-impact websites and digital experiences for startups and enterprises to scale fast.
                        </p>
                    </div>
                    <div className="bg-background p-10 rounded-card border border-transparent hover:border-border-light transition-all duration-300">
                        <h3 className="text-[48px] font-bold mb-3 text-primary leading-none tracking-tight">240%</h3>
                        <p className="font-bold text-lg mb-4 text-primary">Increased in conversion rate</p>
                        <p className="text-[15px] text-text-secondary leading-relaxed">
                            Purpose-built digital experiences that elevate brands and increase conversion rates at every touchpoint.
                        </p>
                    </div>
                    <div className="bg-background p-10 rounded-card border border-transparent hover:border-border-light transition-all duration-300">
                        <h3 className="text-[48px] font-bold mb-3 text-primary leading-none tracking-tight">$100M+</h3>
                        <p className="font-bold text-lg mb-4 text-primary">Seed + series A funding</p>
                        <p className="text-[15px] text-text-secondary leading-relaxed">
                            Through strategic design, marketing, and conversion optimization, we've helped businesses scale faster.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
