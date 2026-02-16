export default function Services() {
    return (
        <section className="py-16 bg-background">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div className="sticky top-32">
                        <div className="w-2 h-2 bg-accent-new rounded-full mb-6"></div>
                        <h2 className="text-h2 font-semibold text-primary mb-6 leading-tight">From idea to scale.<br />We master our craft.</h2>
                        <div className="flex items-center gap-4 mb-16">
                            <a className="inline-flex items-center gap-2 text-[14px] font-semibold border border-border-light bg-white text-primary px-5 py-2.5 rounded-pill hover:bg-gray-50 transition-colors shadow-sm group" href="#">
                                Start A Project <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                        <div className="space-y-0 border-t border-border-light/50">
                            <div className="bg-white rounded-[16px] p-6 border border-border-light shadow-subtle cursor-pointer transition-all my-4">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-4">
                                        <span className="w-9 h-9 rounded bg-background border border-border-light flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-[20px]">web</span>
                                        </span>
                                        <h4 className="font-bold text-[16px] text-primary">Web Design & UX/UI</h4>
                                    </div>
                                    <span className="material-symbols-outlined text-text-primary text-[20px]">expand_less</span>
                                </div>
                                <p className="text-[15px] text-text-secondary pl-[52px] leading-relaxed">
                                    Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions.
                                </p>
                            </div>
                            <div className="p-6 border-b border-border-light cursor-pointer flex justify-between items-center group transition-all hover:bg-white/50">
                                <div className="flex items-center gap-4">
                                    <span className="w-9 h-9 rounded bg-white border border-border-light flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">code</span>
                                    </span>
                                    <h4 className="font-medium text-[16px] text-text-secondary group-hover:text-primary transition-colors">No-code Development</h4>
                                </div>
                                <span className="material-symbols-outlined text-text-secondary/50 text-[20px]">expand_more</span>
                            </div>
                            <div className="p-6 border-b border-border-light cursor-pointer flex justify-between items-center group transition-all hover:bg-white/50">
                                <div className="flex items-center gap-4">
                                    <span className="w-9 h-9 rounded bg-white border border-border-light flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                                    </span>
                                    <h4 className="font-medium text-[16px] text-text-secondary group-hover:text-primary transition-colors">MVP Prototyping</h4>
                                </div>
                                <span className="material-symbols-outlined text-text-secondary/50 text-[20px]">expand_more</span>
                            </div>
                            <div className="p-6 border-b border-border-light cursor-pointer flex justify-between items-center group transition-all hover:bg-white/50">
                                <div className="flex items-center gap-4">
                                    <span className="w-9 h-9 rounded bg-white border border-border-light flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">handshake</span>
                                    </span>
                                    <h4 className="font-medium text-[16px] text-text-secondary group-hover:text-primary transition-colors">Ongoing Design Partner</h4>
                                </div>
                                <span className="material-symbols-outlined text-text-secondary/50 text-[20px]">expand_more</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group mt-8 lg:mt-0 self-center">
                        <div className="relative rounded-[32px] overflow-hidden border border-border-light shadow-2xl bg-black max-w-[540px] ml-auto">
                            <img alt="Coding and development" className="w-full h-auto object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvuhNar5WmNa_O_drZATeadC-wGnIfaZbJgEPQyTBCCCHk7uGaHkrltTTGHLGZ5BFuc0gujx4izQAAt0OrOYobEzOjUSqfDdM_FAVj4iORBg5myIxcc__IBJdlRDxIwvNkLsMpl7feqDMj4VO6YvLraWHjISHDBc_CmYPljUXbXlNXo3zcp5q70UsakaBdrzQZNZH5k7MW-OZghL3rLCODTpNpGWArsXswuqYPR25zPHiTSJRtxQvW8dIQyD8uOq35YWhSQOJYDZ8" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-[#1e1e1e]/90 backdrop-blur border border-white/10 rounded-xl p-5 text-gray-300 font-mono text-[13px] shadow-2xl">
                                    <div className="flex gap-1.5 mb-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-gray-500">// Initialize growth engine</p>
                                        <p><span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">scale</span> = <span className="text-[#F78C6C]">true</span>;</p>
                                        <p><span className="text-[#C792EA]">if</span> (scale) {"{"}</p>
                                        <p className="pl-4"><span className="text-[#C3E88D]">launchSuccess</span>();</p>
                                        <p>{"}"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
