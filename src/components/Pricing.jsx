import { Link } from 'react-router-dom';

export default function Pricing() {
    return (
        <section className="py-160 bg-background border-t border-border-light">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-24">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-new"></span>
                        <span className="text-[10px] font-bold uppercase text-text-secondary tracking-widest">Pricing</span>
                    </div>
                    <h2 className="text-h2 font-semibold text-primary">Choose a plan.<br />That fits your needs.</h2>
                    <p className="mt-6 text-[16px] text-text-secondary">Flexible plans designed to accelerate growth,<br />with solutions that evolve as your business scales.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    <div className="bg-background p-8 rounded-card border border-transparent hover:bg-white hover:border-border-light hover:shadow-subtle transition-all duration-300 flex flex-col h-full group">
                        <div className="w-10 h-10 rounded border border-border-light flex items-center justify-center text-text-primary mb-6 bg-white">
                            <span className="material-symbols-outlined text-[20px]">architecture</span>
                        </div>
                        <h3 className="font-bold text-xl text-primary mb-2">Product design</h3>
                        <p className="text-xs text-text-secondary min-h-[40px] mb-6 leading-relaxed">Ideal for launching or revamping a website or product to boost conversions.</p>
                        <div className="mb-6">
                            <span className="text-3xl font-bold text-primary">$ 2,200</span> <span className="text-xs text-text-secondary font-medium">/One time</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1 text-[13px] text-text-secondary font-medium">
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> Senior designer</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> One Active Request</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> 7-10 Days delivery time</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> SEO optimized</li>
                            <li className="flex gap-2.5 items-center opacity-40"><span className="material-symbols-outlined text-gray-400 text-[18px]">cancel</span> 1-1 Private Slack channel</li>
                        </ul>
                        <a className="w-full block text-center bg-primary hover:bg-primary-hover text-white py-3 rounded-pill text-[13px] font-bold transition-colors" href="#">Get Started Now <span className="ml-1">→</span></a>
                    </div>
                    <div className="bg-white p-8 rounded-card border border-border-light shadow-xl flex flex-col h-full relative overflow-hidden transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-primary text-white text-[9px] px-3 py-1 rounded-bl-lg font-bold tracking-wider">POPULAR</div>
                        <div className="w-10 h-10 rounded border border-border-light flex items-center justify-center text-text-primary mb-6 bg-background">
                            <span className="material-symbols-outlined text-[20px]">diamond</span>
                        </div>
                        <h3 className="font-bold text-xl text-primary mb-2">Design partner</h3>
                        <p className="text-xs text-text-secondary min-h-[40px] mb-6 leading-relaxed">Perfect for monthly design partnerships, keeping your brand fresh and driving consistent conversions.</p>
                        <div className="mb-6">
                            <span className="text-3xl font-bold text-primary">$ 4,000</span> <span className="text-xs text-text-secondary font-medium">/month</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1 text-[13px] text-text-secondary font-medium">
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> Dedicated team & expert designers</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> Multiple requests under fair use</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> 2-3 Days delivery time</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> Monthly CRO & Growth Strategy</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> 1-1 Private Slack Channel</li>
                        </ul>
                        <a className="w-full block text-center bg-primary hover:bg-primary-hover text-white py-3 rounded-pill text-[13px] font-bold transition-colors" href="#">Get Started Now <span className="ml-1">→</span></a>
                        <div className="mt-6 pt-6 border-t border-dashed border-border-light">
                            <p className="text-[10px] font-bold text-primary mb-3 uppercase tracking-wide">Add-on: Framer development</p>
                            <div className="bg-background rounded px-3 py-2 text-[11px] flex justify-between items-center border border-border-light">
                                <span className="text-text-secondary font-medium">Up to 5 full pages + 404 page</span>
                                <span className="font-bold text-primary">+$400</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary text-white p-8 rounded-card border border-gray-800 flex flex-col h-full relative">
                        <div className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-white mb-6 bg-white/10">
                            <span className="material-symbols-outlined text-[20px]">stars</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-xl">Custom</h3>
                            <span className="bg-badge-bg text-badge-text text-[9px] px-2 py-0.5 rounded font-bold">Limited spots</span>
                        </div>
                        <p className="text-xs text-gray-400 min-h-[40px] mb-6 leading-relaxed">Ideal for brands seeking unlimited design and motion support, delivering high impact results without restrictions.</p>
                        <div className="mb-6">
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 block font-bold">Starts at</span>
                            <span className="text-3xl font-bold block">$ 9,000+</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1 text-[13px] text-gray-300 font-medium">
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-accent-new text-[18px]">check_circle</span> Dedicated team & expert designers</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-accent-new text-[18px]">check_circle</span> Unlimited requests</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-accent-new text-[18px]">check_circle</span> 2 Days Delivery, monthly commitment</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-accent-new text-[18px]">check_circle</span> Advanced SEO & Marketing</li>
                            <li className="flex gap-2.5 items-center"><span className="material-symbols-outlined text-accent-new text-[18px]">check_circle</span> 1-1 Private Slack Channel</li>
                        </ul>
                        <a className="w-full block text-center bg-white text-primary hover:bg-gray-100 py-3 rounded-pill text-[13px] font-bold transition-colors" href="#">Get Started Now <span className="ml-1">→</span></a>
                    </div>
                </div>
                <div className="mt-16 bg-white rounded-card p-10 border border-border-light flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto shadow-subtle">
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Can't decide yet?</h3>
                        <p className="text-[15px] font-bold text-primary mb-1">Let's have a free call.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-pill text-[13px] font-bold transition-colors" to="/contact">Book A Call <span className="ml-1">→</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
