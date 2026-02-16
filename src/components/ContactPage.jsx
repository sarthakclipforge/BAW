import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        { q: "What is included with each Framer template?", a: "Each template comes with a fully responsive design, editable components, and SEO-friendly structure ready to customize." },
        { q: "Do I need coding skills to use your templates?", a: "No coding skills are required. Our templates are designed for easy customization using Framer's visual editor." },
        { q: "Can I use a template for multiple projects?", a: "Each template purchase grants a single-project license. Contact us for multi-project licensing options." },
        { q: "Are the templates optimized for performance?", a: "Yes, all templates are optimized for fast loading, accessibility, and SEO best practices." },
        { q: "Do you offer support after purchase?", a: "We provide 30 days of email support after purchase, plus access to our documentation and community." },
        { q: "Can I integrate third-party tools with these templates?", a: "Absolutely. Our templates support common integrations like analytics, CRM tools, and payment gateways." },
        { q: "Do you offer customizations beyond the template?", a: "Yes, we offer custom design and development services. Reach out to discuss your specific needs." },
        { q: "Will my template receive updates?", a: "Templates receive periodic updates for compatibility and improvements at no extra cost." },
    ];

    return (
        <>
            {/* Contact Hero + Form */}
            <main className="max-w-[1200px] mx-auto px-6 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                    {/* Left Column - Info */}
                    <div className="lg:col-span-5 flex flex-col">
                        <h1 className="text-5xl md:text-[64px] leading-[1.1] font-semibold tracking-tight mb-6 text-primary">
                            Get in <br />touch with us.
                        </h1>
                        <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-md">
                            Have a project in mind or need guidance? Reach out to our team and let's explore how we can help bring your vision to life.
                        </p>

                        <div className="mt-auto bg-primary text-white p-8 rounded-2xl relative overflow-hidden shadow-subtle">
                            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}></div>
                            <div className="relative z-10 space-y-6">
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-medium">Email:</p>
                                    <a className="text-white border-b border-gray-600 hover:border-white transition-colors pb-0.5" href="mailto:hello@lamosa.studio">hello@lamosa.studio</a>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-medium">Phone:</p>
                                    <p className="text-white">+1 23456778</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-medium">Address:</p>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        447 Broadway, 2nd Floor, New York city, USA<br />
                                        Available from Monday to Friday, 9 AM - 6 PM GMT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-subtle border border-border-light">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">First Name</label>
                                        <input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Jane" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                                        <input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Smith" type="text" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Jane@framer.com" type="email" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Company Name</label>
                                    <input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Lunixify studio" type="text" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Phone</label>
                                    <div className="flex gap-2">
                                        <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-sm w-24 focus:ring-2 focus:ring-primary outline-none">
                                            <option>🇩🇰 +45</option>
                                            <option>🇺🇸 +1</option>
                                        </select>
                                        <input className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="XX XX XX XX" type="tel" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Country</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none pr-10">
                                            <option>🇩🇰 Denmark</option>
                                            <option>🇺🇸 United States</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">expand_more</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">How can we help you?</label>
                                    <textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Leave a message..." rows="4"></textarea>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-gray-700">Services</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['Motion Design', 'Design Partnership', 'Landing page Design', 'Custom Services'].map((service) => (
                                            <label key={service} className="flex items-center gap-2 cursor-pointer group">
                                                <input className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                                <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Budget</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none pr-10 text-gray-500">
                                            <option>Select a budget</option>
                                            <option>$5k - $10k</option>
                                            <option>$10k - $25k</option>
                                            <option>$25k+</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">expand_more</span>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <button className="w-full bg-gray-400 text-white font-medium py-3.5 rounded-full flex items-center justify-center gap-2 cursor-not-allowed hover:bg-gray-500 transition-colors" type="button">
                                        Send Request <span className="material-symbols-outlined text-sm" style={{ transform: 'rotate(-45deg)' }}>send</span>
                                    </button>
                                    <button className="w-full bg-white border border-gray-200 text-primary font-medium py-3.5 rounded-full hover:bg-gray-50 transition-colors" type="button">
                                        Book A Call
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-accent-new"></span>
                                <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">FAQ</span>
                            </div>
                            <h2 className="text-4xl font-semibold text-primary mb-2">Got a question?</h2>
                            <h2 className="text-4xl font-semibold text-gray-400">We've got answers.</h2>
                        </div>

                        {/* Still Have Questions Card */}
                        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 max-w-sm relative overflow-hidden shadow-subtle">
                            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Still have questions?</h3>
                                <a className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors" href="mailto:hello@lamosa.studio">
                                    Contact Us <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="space-y-0">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm mb-4 border border-gray-100">
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    >
                                        <h3 className="text-lg font-medium text-primary pr-8">{faq.q}</h3>
                                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors flex-shrink-0">
                                            <span className="material-symbols-outlined text-sm">{openFaq === i ? 'remove' : 'add'}</span>
                                        </button>
                                    </div>
                                    {openFaq === i && (
                                        <div className="mt-4 text-gray-500 text-sm leading-relaxed">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </main>
        </>
    );
}
