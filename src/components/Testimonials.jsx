import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Testimonials() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from('.test-heading', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
            .from('.test-card', {
                y: 60,
                opacity: 0,
                scale: 0.92,
                rotateY: 5,
                stagger: 0.12,
                duration: 0.9,
                ease: 'power3.out'
            }, '-=0.6')
            .from('.test-cta', { scale: 0.9, opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 bg-background">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-14">
                    <div className="test-heading flex items-center justify-center gap-2 mb-4">
                        <span id="waypoint-testimonials" className="w-1.5 h-1.5 rounded-full bg-accent-new"></span>
                        <span className="text-[10px] font-bold uppercase text-text-secondary tracking-widest">Testimonials</span>
                    </div>
                    <h2 className="test-heading text-[36px] font-semibold text-primary tracking-[-0.02em]">We're loved.<br />Just success stories.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="test-card bg-white p-7 rounded-2xl border border-border-light shadow-subtle h-full flex flex-col justify-between hover-lift hover-glow">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-primary mb-1">2.3x</h3>
                                    <p className="text-xs font-medium text-text-secondary">increase in lead conversion</p>
                                </div>
                                <span className="text-accent-new text-4xl font-serif leading-none opacity-20">"</span>
                            </div>
                            <p className="text-[14px] text-text-secondary mb-6 leading-relaxed">Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.</p>
                        </div>
                        <div className="flex items-center gap-3 border-t border-border-light pt-5">
                            <img loading="lazy" alt="Sarah" className="w-9 h-9 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBNHWgUGIsc5raT3BsXxM4twjRqko0-INUPmr2FxpuxA9yuSvQlnS7NwqHW0pMZm4gtWOZluQH9smxjKGfEYV0fo8EvytvJy4RiGuthuVE4BSyjaB5WvwLuBiZfbBDjmovTyji70H7EtVWvbxx1LJre2LQBJ5zxfDfEle071RrSZr2kZDBrSjvPKCK1Jc2QY0o6vqCjQJ-N0AvdLUgMRAqLsErWGfjmiUqePtr9CPt1M0-bjqwcL_HHKUx7SMBz-Ki7ScSYggeVDQ" />
                            <div>
                                <p className="text-[13px] font-bold text-primary">Sarah Coleman</p>
                                <p className="text-[11px] text-text-secondary">CMO at TechFlow</p>
                            </div>
                            <div className="ml-auto opacity-20"><span className="material-symbols-outlined text-[20px]">verified</span></div>
                        </div>
                    </div>
                    <div className="test-card bg-white p-7 rounded-2xl border border-border-light shadow-subtle h-full flex flex-col justify-between hover-lift hover-glow">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-primary mb-1">45%</h3>
                                    <p className="text-xs font-medium text-text-secondary">Reduced bounce rate</p>
                                </div>
                                <span className="text-accent-new text-4xl font-serif leading-none opacity-20">"</span>
                            </div>
                            <p className="text-[14px] text-text-secondary mb-6 leading-relaxed">The team at Lamosa not only built us a beautiful platform—they made it fast, smart, and incredibly intuitive. Their UX insights and performance tweaks made a huge difference in keeping users engaged.</p>
                        </div>
                        <div className="flex items-center gap-3 border-t border-border-light pt-5">
                            <img loading="lazy" alt="Marcus" className="w-9 h-9 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWjy2e0og7Um4b9hHDOupbSLblH8PEi70uDtEpbNetJ310-LHMNrf3Um6J18Q49p3_5FDyul-XZ7zbXOK24s6tCLAyH2LZ6yBZM2VsdSBlnxtB_vdiEgwOhTKdGaFHr-mSXw0xuni0BE5zxbEhGEbvJM39tiBHVe_c30fpmzvbj3DvoKe1O70gBCSmYAgQ7VvDNW5Nomf2SWknIWu3_xaOheWRPEuaJj3Eg7Axpbji9y1J6i8F2WigktSBc5UJlAXNZognHkHqSx0" />
                            <div>
                                <p className="text-[13px] font-bold text-primary">Marcus Levine</p>
                                <p className="text-[11px] text-text-secondary">Co-founder at ScaleUp</p>
                            </div>
                            <div className="ml-auto opacity-20"><span className="material-symbols-outlined text-[20px]">verified</span></div>
                        </div>
                    </div>
                    <div className="test-card bg-white p-7 rounded-2xl border border-border-light shadow-subtle h-full flex flex-col justify-between hover-lift hover-glow">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-primary mb-1">3x</h3>
                                    <p className="text-xs font-medium text-text-secondary">faster MVP launch</p>
                                </div>
                                <span className="text-accent-new text-4xl font-serif leading-none opacity-20">"</span>
                            </div>
                            <p className="text-[14px] text-text-secondary mb-6 leading-relaxed">Working with Lamosa helped us cut our launch timeline dramatically. They understand product goals and build with both speed and precision. Easily one of the best agencies we've worked with.</p>
                        </div>
                        <div className="flex items-center gap-3 border-t border-border-light pt-5">
                            <img loading="lazy" alt="User" className="w-9 h-9 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAgxSMms8gRQELxK7OLKeKCitLfJX-Piy-y5aTvRCKT8rRFik50vwskTUEglYr0wyTBoihorNZ1I8yq9SF-mUgiz8UDBOaLW7UnG6XRZ-LHlv0mD7eCf2jn2MZk1Dnw5H86GG6KYnSsIKxfe1evOVAiSJe4UgVxb1BdpxHTqm2qpac_PZG5UFFZUv2xCzgboYFShRM9Eff_uK-AW7Wxs6B9-DHRw_8u3OHsCfJ6n97rNZh7VZGqon_3aPM4-E8Zmdw6s2pLI1Ikw" />
                            <div>
                                <p className="text-[13px] font-bold text-primary">Amina Khatri</p>
                                <p className="text-[11px] text-text-secondary">Head of Product</p>
                            </div>
                            <div className="ml-auto opacity-20"><span className="material-symbols-outlined text-[20px]">verified</span></div>
                        </div>
                    </div>
                    <div className="test-card bg-white p-7 rounded-2xl border border-border-light shadow-subtle h-full flex flex-col justify-between hover-lift hover-glow">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-primary mb-1">62%</h3>
                                    <p className="text-xs font-medium text-text-secondary">Increase in organic traffic</p>
                                </div>
                                <span className="text-accent-new text-4xl font-serif leading-none opacity-20">"</span>
                            </div>
                            <p className="text-[14px] text-text-secondary mb-6 leading-relaxed">Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.</p>
                        </div>
                        <div className="flex items-center gap-3 border-t border-border-light pt-5">
                            <img loading="lazy" alt="User" className="w-9 h-9 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc-QoKdac51TOadhh6TQemOQTfPmNF9E7Nnmm8OVgZV8Ffo0UC7vJ01xLvwF-SskpYY26aty9jXsI7_QEVknJNWP77eTIypxc7eHAj_kxZGNb3YmOZBw0mD5GKzsLW1wJ8uG53tCno1WFL-NL-Kuw8hN5eMpu0Ijc2FXLO6ZPtbjmnLTi3kcVNKcNR2xSpaaY8d7KP9HbjSd49XZ1qYrit89CHLsP1U4-SdoA86v4s_AMVWMjM14GWc-F9MWnzvoWb8BX-dnxB7dQ" />
                            <div>
                                <p className="text-[13px] font-bold text-primary">Julian Ortega</p>
                                <p className="text-[11px] text-text-secondary">CEO</p>
                            </div>
                            <div id="waypoint-testimonial-4" className="ml-auto opacity-20"><span className="material-symbols-outlined text-[20px]">verified</span></div>
                        </div>
                    </div>
                </div>
                <div className="test-cta bg-primary rounded-2xl p-10 md:p-12 relative overflow-hidden group text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto mt-12 shadow-2xl hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
                    <div className="relative z-10 text-white max-w-xl">
                        <p className="text-[14px] font-medium mb-2 text-gray-400">You focus on your company.</p>
                        <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight leading-tight">We make it happen.<br />Unstoppable Growth.</h3>
                    </div>
                    <div className="relative z-10">
                        <Link className="bg-white text-primary hover:bg-gray-100 px-5 py-2.5 rounded-pill font-bold transition-all flex items-center gap-2 shadow-lg text-sm" to="/contact">
                            Book A Call <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <a className="inline-flex items-center gap-1 mt-3 text-[12px] font-medium text-text-primary border border-border-light bg-white px-4 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm" href="#">View All Reviews <span className="material-symbols-outlined text-[13px]">arrow_forward</span></a>
                    <div className="flex items-center justify-center gap-3 mt-3">
                        <div className="flex -space-x-2">
                            <img loading="lazy" alt="User" className="w-5 h-5 rounded-full border border-white object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAgxSMms8gRQELxK7OLKeKCitLfJX-Piy-y5aTvRCKT8rRFik50vwskTUEglYr0wyTBoihorNZ1I8yq9SF-mUgiz8UDBOaLW7UnG6XRZ-LHlv0mD7eCf2jn2MZk1Dnw5H86GG6KYnSsIKxfe1evOVAiSJe4UgVxb1BdpxHTqm2qpac_PZG5UFFZUv2xCzgboYFShRM9Eff_uK-AW7Wxs6B9-DHRw_8u3OHsCfJ6n97rNZh7VZGqon_3aPM4-E8Zmdw6s2pLI1Ikw" />
                            <img loading="lazy" alt="User" className="w-5 h-5 rounded-full border border-white object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc-QoKdac51TOadhh6TQemOQTfPmNF9E7Nnmm8OVgZV8Ffo0UC7vJ01xLvwF-SskpYY26aty9jXsI7_QEVknJNWP77eTIypxc7eHAj_kxZGNb3YmOZBw0mD5GKzsLW1wJ8uG53tCno1WFL-NL-Kuw8hN5eMpu0Ijc2FXLO6ZPtbjmnLTi3kcVNKcNR2xSpaaY8d7KP9HbjSd49XZ1qYrit89CHLsP1U4-SdoA86v4s_AMVWMjM14GWc-F9MWnzvoWb8BX-dnxB7dQ" />
                            <img loading="lazy" alt="User" className="w-5 h-5 rounded-full border border-white object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEgXmGkRtso73WadHqgopLk147RqJQwQZR1pd66edXwTGUDBXIVOdPmRT8_zAcb8yQW3rOtITkxPn_4H_zRJ8W80WKSgU74sXJ5a7ymAgbFGsHv4MRmpPDYV40WvPHXuwheypKgzxOvE429YjWIKYESS9pgiPjDDXAevvRh8GuabMf4R8MWlLbht_Ic2LMBh33aXJuIFbY_SPhIblnqIXoEFAamSvP4lrbnTgZryEV3bUW_hG_CerNUwSbU91b1EQ8GlkzQySoF-4" />
                        </div>
                        <span className="text-[11px] font-medium text-text-secondary">From 150+ reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
