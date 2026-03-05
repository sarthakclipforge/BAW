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

        tl.from('.footer-content', {
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out'
        });

        // Parallax scrub on the giant "Lamosa." text — slides up as you scroll
        gsap.fromTo('.footer-logo h1', {
            y: 120,
            opacity: 0,
            scale: 0.9,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: '.footer-logo',
                start: "top 100%",
                end: "top 60%",
                scrub: 1,
            },
            ease: 'none',
        });

    }, { scope: footerRef });

    return (
        <footer ref={footerRef} className="bg-white pt-20 pb-10 border-t border-border-light">
            <div className="max-w-screen-xl mx-auto px-6 text-center">
                <h2 className="footer-content text-[36px] font-bold mb-5 text-primary leading-tight tracking-[-0.02em]">Trusted by 1,200+ founders.<br />Turning ideas into bold brands.</h2>
                <p className="footer-content text-[15px] text-text-secondary mb-8 max-w-lg mx-auto leading-relaxed">Book a free discovery call to discuss strategy, set goals, and see how we can help you grow.</p>
                <div className="footer-content flex items-center justify-center gap-2 mb-8">
                    <span id="waypoint-footer" className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase text-text-secondary tracking-widest">Open for work</span>
                </div>
                <div className="footer-content flex justify-center gap-3 mb-14">
                    <Link className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-pill font-medium transition-all flex items-center gap-2 text-[14px]" to="/contact">
                        Book A Call <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    </Link>
                    <a className="bg-white hover:bg-gray-50 text-text-primary px-6 py-3 rounded-pill font-medium transition-all border border-border-light text-[14px]" href="#">
                        View Plans
                    </a>
                </div>
                <div className="footer-content flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale mb-20">
                    <span className="font-bold text-lg tracking-tighter flex items-center gap-2 text-black"><span className="w-3.5 h-3.5 bg-black rounded-full"></span> LOOM</span>
                    <span className="font-bold text-lg tracking-tighter flex items-center gap-2 text-black"><span className="material-symbols-outlined text-[18px]">architecture</span> ACME Corp</span>
                    <span className="font-bold text-lg tracking-tighter flex items-center gap-2 text-black"><span className="material-symbols-outlined text-[18px]">bolt</span> QUANTUM</span>
                </div>
                <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-10 text-left border-t border-border-light pt-12">
                    <div className="col-span-1 md:col-span-2 pr-8">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xs italic font-serif">/</span>
                            </div>
                            <span className="font-bold text-lg tracking-tight text-primary">Lamosa</span>
                        </div>
                        <p className="text-[12px] font-bold text-primary mb-2">Join our newsletter</p>
                        <p className="text-[12px] text-text-secondary mb-5 max-w-sm leading-relaxed">Stay ahead with strategies uniting design, technology, and marketing to deliver measurable growth.</p>
                        <div className="relative max-w-sm">
                            <input className="w-full bg-background border border-border-light rounded-full py-2 pl-4 pr-10 text-[12px] focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400" placeholder="Enter your email..." type="email" />
                            <button className="absolute right-1 top-1 w-7 h-7 bg-accent-new rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="pl-0 md:pl-8">
                        <h4 className="font-bold text-[11px] text-primary mb-5 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2.5 text-[12px] text-text-secondary font-medium">
                            <li><Link className="hover:text-primary transition-colors" to="/contact">Contact us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/about">About us</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2" to="/projects">Projects <span className="w-1.5 h-1.5 bg-accent-new rounded-full inline-block"></span></Link></li>
                            <li><a className="hover:text-primary transition-colors inline-flex items-center gap-2" href="#">Career <span className="bg-red-50 text-red-600 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase border border-red-100">Hiring</span></a></li>
                            <li><Link className="hover:text-primary transition-colors inline-flex items-center gap-2" to="/blog">Blog <span className="bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded text-[9px] font-bold border border-orange-100">3</span></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-[11px] text-primary mb-5 uppercase tracking-wider">Socials</h4>
                        <ul className="space-y-2.5 text-[12px] text-text-secondary font-medium">
                            <li><a className="hover:text-primary transition-colors" href="#">X (Twitter)</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Framer</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Dribbble</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-logo mt-16 overflow-hidden select-none pointer-events-none pt-6">
                    <h1 className="text-[14vw] font-bold text-center leading-none text-[#F3F4F6] tracking-tighter">Lamosa.</h1>
                </div>
                <div className="footer-content flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-text-secondary mt-6 pb-4">
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
