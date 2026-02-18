import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Footer() {
    const footerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from('.footer-content', { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 });

        gsap.from('.footer-logo', {
            scrollTrigger: {
                trigger: '.footer-logo',
                start: "top 95%",
                toggleActions: "play none none reverse"
            },
            y: 100,
            opacity: 0
        });

    }, { scope: footerRef });

    return (
        <footer ref={footerRef} className="bg-white pt-24 pb-12 border-t border-border-light">
            <div className="max-w-screen-xl mx-auto px-6 text-center">
                <h2 className="footer-content text-h2 font-bold mb-6 text-primary leading-tight">Trusted by 1,200+ founders.<br />Turning ideas into bold brands.</h2>
                <p className="footer-content text-[16px] text-text-secondary mb-12 max-w-lg mx-auto leading-relaxed">Book a free discovery call to discuss strategy, set goals, and see how we can help you grow.</p>
                <div className="footer-content flex items-center justify-center gap-2 mb-12">
                    <span id="waypoint-footer" className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase text-text-secondary tracking-widest">Open for work</span>
                </div>
                <div className="footer-content flex justify-center gap-3 mb-20">
                    <Link className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-pill font-medium transition-all flex items-center gap-2 text-[15px]" to="/contact">
                        Book A Call <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                    <a className="bg-white hover:bg-gray-50 text-text-primary px-8 py-3.5 rounded-pill font-medium transition-all border border-border-light text-[15px]" href="#">
                        View Plans
                    </a>
                </div>
                <div className="footer-content flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale mb-32">
                    <span className="font-bold text-xl tracking-tighter flex items-center gap-2 text-black"><span className="w-4 h-4 bg-black rounded-full"></span> LOOM</span>
                    <span className="font-bold text-xl tracking-tighter flex items-center gap-2 text-black"><span className="material-symbols-outlined text-[20px]">architecture</span> ACME Corp</span>
                    <span className="font-bold text-xl tracking-tighter flex items-center gap-2 text-black"><span className="material-symbols-outlined text-[20px]">bolt</span> QUANTUM</span>
                </div>
                <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-12 text-left border-t border-border-light pt-16">
                    <div className="col-span-1 md:col-span-2 pr-12">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm italic font-serif">/</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-primary">Lamosa</span>
                        </div>
                        <p className="text-[13px] font-bold text-primary mb-3">Join our newsletter</p>
                        <p className="text-[13px] text-text-secondary mb-6 max-w-sm leading-relaxed">Stay ahead with strategies uniting design, technology, and marketing to deliver measurable growth.</p>
                        <div className="relative max-w-sm">
                            <input className="w-full bg-background border border-border-light rounded-full py-2.5 pl-5 pr-12 text-[13px] focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400" placeholder="Enter your email..." type="email" />
                            <button className="absolute right-1 top-1 w-8 h-8 bg-accent-new rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="pl-0 md:pl-12">
                        <h4 className="font-bold text-[11px] text-primary mb-6 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3 text-[13px] text-text-secondary font-medium">
                            <li><Link className="hover:text-primary transition-colors" to="/contact">Contact us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/about">About us</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/projects">Projects <span className="w-1.5 h-1.5 bg-accent-new rounded-full inline-block"></span></Link></li>
                            <li><a className="hover:text-primary transition-colors inline-flex items-center gap-2" href="#">Career <span className="bg-red-50 text-red-600 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase border border-red-100">Hiring</span></a></li>
                            <li><Link className="hover:text-primary transition-colors inline-flex items-center gap-2" to="/blog">Blog <span className="bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded text-[9px] font-bold border border-orange-100">3</span></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-[11px] text-primary mb-6 uppercase tracking-wider">Socials</h4>
                        <ul className="space-y-3 text-[13px] text-text-secondary font-medium">
                            <li><a className="hover:text-primary transition-colors" href="#">X (Twitter)</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Framer</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Dribbble</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-logo mt-24 overflow-hidden select-none pointer-events-none pt-8">
                    <h1 className="text-[18vw] font-bold text-center leading-none text-[#F3F4F6] tracking-tighter">Lamosa.</h1>
                </div>
                <div className="footer-content flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-text-secondary mt-8 pb-4">
                    <p className="opacity-60">©️ 2025 Built in <span className="text-accent-new">Framer</span> by <span className="text-accent-new">Lumify Studio</span></p>
                    <div className="flex gap-6 mt-4 md:mt-0 opacity-60">
                        <a className="hover:text-primary" href="#">Privacy policy</a>
                        <a className="hover:text-primary" href="#">Terms of services</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
