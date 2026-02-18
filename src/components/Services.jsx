import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Services() {
    const containerRef = useRef(null);

    const services = [
        {
            id: 0,
            title: "Web Design & UX/UI",
            icon: "web",
            description: "Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions."
        },
        {
            id: 1,
            title: "No-code Development",
            icon: "code",
            description: "Building robust, scalable applications without writing a single line of code, faster."
        },
        {
            id: 2,
            title: "MVP Prototyping",
            icon: "rocket_launch",
            description: "Rapidly turning your ideas into testable products to validate market fit in weeks, not months."
        },
        {
            id: 3,
            title: "Ongoing Design Partner",
            icon: "handshake",
            description: "Continuous design support to keep your product fresh, consistent, and growing with your business."
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Use fromTo to ensure starting state is explicit and correct
        tl.fromTo('.service-heading',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1 }
        )
            .fromTo('.service-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                },
                '-=0.4'
            )
            .fromTo('.service-image',
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                },
                '-=0.6'
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-[#F8F9FB] relative overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-new/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div className="sticky top-32">
                        <div id="waypoint-services" className="service-heading w-2 h-2 bg-accent-new rounded-full mb-6"></div>
                        <h2 className="service-heading text-h2 font-semibold text-primary mb-6 leading-tight">From idea to scale.<br />We master our craft<span id="waypoint-services-period" className="inline-block">.</span></h2>
                        <div className="service-heading flex items-center gap-4 mb-12">
                            <a className="inline-flex items-center gap-2 text-[14px] font-semibold border border-border-light bg-white text-primary px-6 py-3 rounded-pill hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group shadow-sm" href="#">
                                Start A Project <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>

                        <div className="space-y-6">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="service-card bg-white rounded-[24px] p-7 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-5">
                                        <span className="w-12 h-12 rounded-2xl flex-shrink-0 bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-[18px] text-primary mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                                            <p className="text-[15px] text-text-secondary leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group mt-8 lg:mt-0 self-center perspective-[2000px]">
                        <div className="service-image relative rounded-[40px] overflow-hidden border border-white/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] bg-black max-w-[540px] ml-auto transition-transform duration-700 group-hover:rotate-y-2 group-hover:rotate-x-1">
                            <img alt="Coding and development" className="w-full h-auto object-cover opacity-90 scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvuhNar5WmNa_O_drZATeadC-wGnIfaZbJgEPQyTBCCCHk7uGaHkrltTTGHLGZ5BFuc0gujx4izQAAt0OrOYobEzOjUSqfDdM_FAVj4iORBg5myIxcc__IBJdlRDxIwvNkLsMpl7feqDMj4VO6YvLraWHjISHDBc_CmYPljUXbXlNXo3zcp5q70UsakaBdrzQZNZH5k7MW-OZghL3rLCODTpNpGWArsXswuqYPR25zPHiTSJRtxQvW8dIQyD8uOq35YWhSQOJYDZ8" />

                            {/* Glass overlay card */}
                            <div className="absolute bottom-10 left-10 right-10 translate-y-0 group-hover:-translate-y-3 transition-transform duration-700 ease-out">
                                <div className="bg-[#1e1e1e]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-gray-300 font-mono text-[13px] shadow-2xl">
                                    <div className="flex gap-2 mb-5">
                                        <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm"></span>
                                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm"></span>
                                        <span id="waypoint-services-terminal" className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm"></span>
                                    </div>
                                    <div className="space-y-3 font-medium">
                                        <p className="text-gray-500">// Initialize growth engine</p>
                                        <p><span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">scale</span> = <span className="text-[#F78C6C]">true</span>;</p>
                                        <p><span className="text-[#C792EA]">if</span> (scale) {"{"}</p>
                                        <div className="pl-5 relative border-l-2 border-white/10 ml-1">
                                            <p><span className="text-[#C3E88D]">launchSuccess</span>();</p>
                                            <p className="text-gray-500 text-xs mt-2">/* Systems optimal */</p>
                                        </div>
                                        <p>{"}"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background elements behind image */}
                        <div className="absolute -z-10 top-12 -right-12 w-full h-full bg-gradient-to-br from-primary/30 to-accent-new/30 rounded-[40px] blur-3xl opacity-50 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
