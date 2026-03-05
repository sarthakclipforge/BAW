import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Pricing() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from('.pricing-heading', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
            .from('.pricing-card', {
                y: 60,
                opacity: 0,
                scale: 0.92,
                rotateX: 4,
                stagger: 0.15,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.5')
            .from('.pricing-cta', {
                y: 40,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: 'back.out(1.7)'
            }, '-=0.3');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 bg-background border-t border-border-light">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="pricing-heading text-center mb-14">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span id="waypoint-pricing" className="w-1.5 h-1.5 rounded-full bg-accent-new"></span>
                        <span className="text-[10px] font-bold uppercase text-text-secondary tracking-widest">Pricing</span>
                    </div>
                    <h2 className="text-[36px] font-semibold text-primary tracking-[-0.02em]">Choose a plan.<br />That fits your needs.</h2>
                    <p className="mt-4 text-[15px] text-text-secondary">Flexible plans designed to accelerate growth,<br />with solutions that evolve as your business scales.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                    <div className="pricing-card bg-background p-6 rounded-2xl border border-transparent hover:bg-white hover:border-border-light hover:shadow-subtle transition-all duration-300 flex flex-col h-full group hover-lift perspective-container">
                        <div className="w-9 h-9 rounded border border-border-light flex items-center justify-center text-text-primary mb-5 bg-white">
                            <span className="material-symbols-outlined text-[18px]">architecture</span>
                        </div>
                        <h3 className="font-bold text-lg text-primary mb-2">Product design</h3>
                        <p className="text-xs text-text-secondary min-h-[36px] mb-5 leading-relaxed">Ideal for launching or revamping a website or product to boost conversions.</p>
                        <div className="mb-5">
                            <span className="text-2xl font-bold text-primary">$ 2,200</span> <span className="text-xs text-text-secondary font-medium">/One time</span>
                        </div>
                        <ul className="space-y-2.5 mb-6 flex-1 text-[12px] text-text-secondary font-medium">
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span> Senior designer</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span> One Active Request</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span> 7-10 Days delivery time</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span> SEO optimized</li>
                            <li className="flex gap-2 items-center opacity-40"><span className="material-symbols-outlined text-gray-400 text-[16px]">cancel</span> 1-1 Private Slack channel</li>
                        </ul>
                        <a className="w-full block text-center bg-primary hover:bg-primary-hover text-white py-2.5 rounded-pill text-[12px] font-bold transition-colors" href="#">Get Started Now <span className="ml-1">→</span></a>
                    </div>
                    <div className="pricing-card bg-white p-6 rounded-2xl border border-border-light shadow-xl flex flex-col h-full relative overflow-hidden transform md:-translate-y-3 hover-glow perspective-container">
                        <div id="waypoint-pricing-popular" className="absolute top-0 right-0 bg-primary text-white text-[9px] px-3 py-1 rounded-bl-lg font-bold tracking-wider">POPULAR</div>
                        <div className="w-9 h-9 rounded border border-border-light flex items-center justify-center text-text-primary mb-5 bg-background">
                            <span className="material-symbols-outlined text-[18px]">diamond</span>
                        </div>
                        <h3 className="font-bold text-lg text-primary mb-2">Design partner</h3>
                        <p className="text-xs text-text-secondary min-h-[36px] mb-5 leading-relaxed">Perfect for monthly design partnerships, keeping your brand fresh and driving consistent conversions.</p>
                        <div className="mb-5">
                            <span className="text-2xl font-bold text-primary">$ 4,000</span> <span className="text-xs text-text-secondary font-medium">/month</span>
                        </div>
                        <ul className="space-y-2.5 mb-6 flex-1 text-[12px] text-text-secondary font-medium">
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span> Dedicated team & expert designers</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span> Multiple requests under fair use</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span> 2-3 Days delivery time</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span> Monthly CRO & Growth Strategy</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span> 1-1 Private Slack Channel</li>
                        </ul>
                        <a className="w-full block text-center bg-primary hover:bg-primary-hover text-white py-2.5 rounded-pill text-[12px] font-bold transition-colors" href="#">Get Started Now <span className="ml-1">→</span></a>
                        <div className="mt-5 pt-5 border-t border-dashed border-border-light">
                            <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-wide">Add-on: Framer development</p>
                            <div className="bg-background rounded px-3 py-2 text-[11px] flex justify-between items-center border border-border-light">
                                <span className="text-text-secondary font-medium">Up to 5 full pages + 404 page</span>
                                <span className="font-bold text-primary">+$400</span>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-card bg-primary text-white p-6 rounded-2xl border border-gray-800 flex flex-col h-full relative hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 perspective-container">
                        <div className="w-9 h-9 rounded border border-white/20 flex items-center justify-center text-white mb-5 bg-white/10">
                            <span className="material-symbols-outlined text-[18px]">stars</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-lg">Custom</h3>
                            <span className="bg-badge-bg text-badge-text text-[9px] px-2 py-0.5 rounded font-bold">Limited spots</span>
                        </div>
                        <p className="text-xs text-gray-400 min-h-[36px] mb-5 leading-relaxed">Ideal for brands seeking unlimited design and motion support, delivering high impact results without restrictions.</p>
                        <div className="mb-5">
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 block font-bold">Starts at</span>
                            <span className="text-2xl font-bold block">$ 9,000+</span>
                        </div>
                        <ul className="space-y-2.5 mb-6 flex-1 text-[12px] text-gray-300 font-medium">
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-accent-new text-[16px]">check_circle</span> Dedicated team & expert designers</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-accent-new text-[16px]">check_circle</span> Unlimited requests</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-accent-new text-[16px]">check_circle</span> 2 Days Delivery, monthly commitment</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-accent-new text-[16px]">check_circle</span> Advanced SEO & Marketing</li>
                            <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-accent-new text-[16px]">check_circle</span> 1-1 Private Slack Channel</li>
                        </ul>
                        <a className="w-full block text-center bg-white text-primary hover:bg-gray-100 py-2.5 rounded-pill text-[12px] font-bold transition-colors" href="#">Get Started Now <span className="ml-1">→</span></a>
                    </div>
                </div>
                <div className="pricing-cta mt-12 bg-white rounded-2xl p-7 border border-border-light flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-subtle hover-lift hover-glow">
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-1">Can't decide yet?</h3>
                        <p className="text-[14px] font-bold text-primary mb-1">Let's have a free call.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-pill text-[12px] font-bold transition-colors" to="/contact">Book A Call <span className="ml-1">→</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
