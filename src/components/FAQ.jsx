import { Link } from 'react-router-dom';

export default function FAQ() {
    return (
        <section className="py-160 bg-white">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <div className="sticky top-32">
                            <div className="w-2 h-2 bg-accent-new rounded-full mb-6"></div>
                            <p className="text-[10px] font-bold uppercase text-text-secondary tracking-widest mb-4">FAQ</p>
                            <h2 className="text-h2 font-semibold text-primary mb-4 leading-tight">Got a question?<br />We've got answers.</h2>
                            <div className="bg-primary text-white rounded-card p-8 mt-12 relative overflow-hidden text-center md:text-left">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gray-700 rounded-full blur-[60px] translate-x-10 -translate-y-10"></div>
                                <h3 className="text-xl font-bold mb-6 relative z-10">Still have questions?</h3>
                                <Link className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-pill text-[13px] font-bold hover:bg-gray-100 transition-colors relative z-10" to="/contact">
                                    Contact Us <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8 space-y-3">
                        <div className="bg-white rounded-xl px-8 py-6 border border-border-light cursor-pointer shadow-subtle">
                            <div className="flex justify-between items-start gap-6 mb-3">
                                <h4 className="font-bold text-[15px] text-primary">What is included with each Framer template?</h4>
                                <span className="material-symbols-outlined text-primary text-[20px]">remove</span>
                            </div>
                            <p className="text-[14px] text-text-secondary leading-relaxed">Each template comes with a fully responsive design, editable components, and SEO-friendly structure ready to customize. We also provide documentation videos to help you get started quickly.</p>
                        </div>
                        <div className="bg-white rounded-xl px-8 py-6 border border-border-light cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors">
                            <h4 className="font-bold text-[15px] text-primary">Do I need coding skills to use your templates?</h4>
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">add</span>
                        </div>
                        <div className="bg-white rounded-xl px-8 py-6 border border-border-light cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors">
                            <h4 className="font-bold text-[15px] text-primary">Can I use a template for multiple projects?</h4>
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">add</span>
                        </div>
                        <div className="bg-white rounded-xl px-8 py-6 border border-border-light cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors">
                            <h4 className="font-bold text-[15px] text-primary">Are the templates optimized for performance?</h4>
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">add</span>
                        </div>
                        <div className="bg-white rounded-xl px-8 py-6 border border-border-light cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors">
                            <h4 className="font-bold text-[15px] text-primary">Do you offer support after purchase?</h4>
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">add</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
