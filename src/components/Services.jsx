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

        tl.fromTo('.service-heading',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' }
        )
            .fromTo('.service-card',
                { y: 50, opacity: 0, scale: 0.95, rotateX: 3 },
                {
                    y: 0, opacity: 1, scale: 1, rotateX: 0,
                    stagger: 0.12, duration: 0.9, ease: 'power3.out'
                },
                '-=0.6'
            )
            .fromTo('.service-image',
                { scale: 0.85, opacity: 0, rotateY: -5 },
                { scale: 1, opacity: 1, rotateY: 0, duration: 1.2, ease: 'power3.out' },
                '-=0.8'
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="sticky top-32">
                        <div id="waypoint-services" className="service-heading w-1.5 h-1.5 bg-accent-new rounded-full mb-4"></div>
                        <h2 className="service-heading text-[36px] font-semibold text-primary mb-5 leading-tight tracking-[-0.02em]">From idea to scale.<br />We master our craft<span id="waypoint-services-period" className="inline-block">.</span></h2>
                        <div className="service-heading flex items-center gap-4 mb-10">
                            <a className="inline-flex items-center gap-2 text-[13px] font-semibold border border-border-light bg-white text-primary px-4 py-2 rounded-pill hover:bg-gray-50 transition-colors shadow-sm group" href="#">
                                Start A Project <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                            </a>
                        </div>

                        <div className="space-y-3">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="service-card bg-white rounded-2xl p-5 border border-gray-100 shadow-subtle hover-lift hover-glow transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="w-10 h-10 rounded-xl flex-shrink-0 bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <span className="material-symbols-outlined text-[20px]">{service.icon}</span>
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-[15px] text-primary mb-1.5">{service.title}</h4>
                                            <p className="text-[13px] text-text-secondary leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group mt-8 lg:mt-0 self-center">
                        <div className="service-image relative rounded-[24px] overflow-hidden border border-border-light shadow-2xl bg-black max-w-[480px] ml-auto">
                            <img loading="lazy" alt="Coding and development" className="w-full h-auto object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvuhNar5WmNa_O_drZATeadC-wGnIfaZbJgEPQyTBCCCHk7uGaHkrltTTGHLGZ5BFuc0gujx4izQAAt0OrOYobEzOjUSqfDdM_FAVj4iORBg5myIxcc__IBJdlRDxIwvNkLsMpl7feqDMj4VO6YvLraWHjISHDBc_CmYPljUXbXlNXo3zcp5q70UsakaBdrzQZNZH5k7MW-OZghL3rLCODTpNpGWArsXswuqYPR25zPHiTSJRtxQvW8dIQyD8uOq35YWhSQOJYDZ8" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-[#1e1e1e]/90 backdrop-blur border border-white/10 rounded-lg p-4 text-gray-300 font-mono text-[12px] shadow-2xl">
                                    <div className="flex gap-1.5 mb-2">
                                        <span className="w-2 h-2 rounded-full bg-[#FF5F56]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]"></span>
                                        <span id="waypoint-services-terminal" className="w-2 h-2 rounded-full bg-[#27C93F]"></span>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
