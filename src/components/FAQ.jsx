import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const faqs = [
    {
        q: "What is included with each Framer template?",
        a: "Each template comes with a fully responsive design, editable components, and SEO-friendly structure ready to customize. We also provide documentation videos to help you get started quickly."
    },
    {
        q: "Do I need coding skills to use your templates?",
        a: "No coding skills are required. Our templates are designed for easy customization using Framer's visual editor. Simply drag and drop to customize."
    },
    {
        q: "Can I use a template for multiple projects?",
        a: "Each template purchase grants a single-project license. Contact us for multi-project licensing options."
    },
    {
        q: "Are the templates optimized for performance?",
        a: "Yes, all templates are optimized for fast loading, accessibility, and SEO best practices out of the box."
    },
    {
        q: "Do you offer support after purchase?",
        a: "We provide 30 days of email support after purchase, plus access to our documentation and community forum."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo('.faq-heading',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1 }
        )
            .fromTo('.faq-item',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1 },
                '-=0.4'
            );

    }, { scope: containerRef });

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <div className="sticky top-32">
                            <div id="waypoint-faq" className="faq-heading w-1.5 h-1.5 bg-accent-new rounded-full mb-4"></div>
                            <p className="faq-heading text-[10px] font-bold uppercase text-text-secondary tracking-widest mb-3">FAQ</p>
                            <h2 className="faq-heading text-[36px] font-semibold text-primary mb-3 leading-tight tracking-[-0.02em]">Got a question?<br />We've got answers.</h2>
                            <div className="faq-heading bg-primary text-white rounded-2xl p-6 mt-8 relative overflow-hidden text-center md:text-left">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-700 rounded-full blur-[60px] translate-x-10 -translate-y-10"></div>
                                <h3 className="text-lg font-bold mb-4 relative z-10">Still have questions?</h3>
                                <Link className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-pill text-[12px] font-bold hover:bg-gray-100 transition-colors relative z-10" to="/contact">
                                    Contact Us <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8 space-y-2.5">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`faq-item bg-white rounded-xl px-6 py-5 border border-border-light cursor-pointer transition-all duration-300 ${openIndex === i ? 'shadow-subtle' : 'hover:bg-gray-50'}`}
                                onClick={() => toggleFaq(i)}
                            >
                                <div className="flex justify-between items-start gap-5">
                                    <h4 className="font-bold text-[14px] text-primary">{faq.q}</h4>
                                    <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'text-primary' : 'text-gray-400'}`}>
                                        {openIndex === i ? 'remove' : 'add'}
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-[13px] text-text-secondary leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
