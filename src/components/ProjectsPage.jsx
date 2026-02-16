import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const projects = [
        {
            name: "Atlas Technologies",
            tags: ["UX Design", "Web Design"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANfQ6QFiqwv3CWiW6_FWyvoh9YKs7VIHGYDqXz5O2BE2trvKCTULcVcr8x4lVk4iHQO9jk5hIaWkV1CuAokD13qrBGJW_aI-UCzeU3znf7fsSZkqjSW6w-VFDwwGIce-LMwB-Kdgt3LG1XCfRVL_AcRYlQ8xl7ZKRDEAj48QvDTwV6o8Osf8JqLiEZJZZWrgQ8ekIm7PYBm4Fmvf4Tbv6JC3JExdmKQ0KW8__LQbCHWjNf0xaP7dt-ZQucgy6cqIGKwGeqVKL4NrI",
            alt: "Abstract device mockup with glowing red light"
        },
        {
            name: "Finlytics",
            tags: ["UI Design", "Branding"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRcG7lCCYPh_bCmMMo9h1L6MXhMhZZlu4Jl916JTNZH1byIoPyFogTwapCb49hEnFN3H0Hg58oa3rg0bHl2ydnygCe4SKykBMHn4RkW41chVkZeB6FrLyvqTg-EnfVM2UQppHPUpBCnVR0dtHfCYQ-LdXun43MTqoeIW1210mJl2XbCBYrtibcFHTjcEV5hR7_kxsBy9OV1xntiJh53KXEI4-C66Y0WAPDrziBVYzVTGdf40dmk_7pk_WpcRlsQYmm3Bqej8d9xf0",
            alt: "Dark electronic device close up"
        },
        {
            name: "Orbital Bank",
            tags: ["Fintech", "UX Design", "Web Design"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz2DD6n2msF_xfVNfuerQLFuiA3PFTx9JWG01PzeVBrqV-U1FjYychpHe-07uKCtEx50swZTDPkVezMPdrUhFgxLWUd7E-wM2QaeuAtNO76aQL8kCcjV9NoPds2P3vTYyLLhTQS4PPUYL3U-PDfHlpxju30E8ay8jEJS6y7uKXHPikZSTxgroLLjEqKlfcDHDEqNUxIzaKMmeKyIO2Rxsl0o5t-G5E1QX90taD6mM3wETr6k8eHE9GK4dZAhf5JYV4Bjz5klTDjs8",
            alt: "Sleek black tech device mockup"
        },
        {
            name: "Echo Analytics",
            tags: ["UI Design", "Motion Design"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM3NtBQV0WWT3GjvXad1JgCoClHGjus95Kt-cTOhM5YZP8_1k_Ftsk4WCjR3_Ofb9we2YR7646My39OGUQXRjCYeH40FvMc1HUvVAxXYf8E6ZriMIVXSpfPNh-jr_Upb-lkPkOcfSa2U3suUBgAb6TPbLaRDXSdaekIvf46jkCPbmbIVI_V-eKTtWVfbv12jdvQk4VRfuKDz4kVOqVSFL25mxURUYsdI3TD1xSxsl9bR7XB7CTrsNEFkFD1EAxRcX_4b2Mo07qqwM",
            alt: "Close up of audio interface knobs with orange accent"
        },
    ];

    const testimonials = [
        {
            stat: "2.3",
            statSuffix: "×",
            label: "increase in lead conversion",
            quote: "Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.",
            name: "Sarah Coleman",
            role: "CMO",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPhP3f6zLbxqm3AksjliHwGwgNyq_WJ_MW6J0X2kV20V1RT7HCakvyWgTU2Hem0UgrWW0ucaf3jHomIXB_xXs1iUZdpnpHM8xHINhy9KD7sEl8MTKb0QnCKuo8cDJBS9EdZO6CEZrDUUnNA9ovhRYeo0oc-1uKHL5vqesXZEIs0M9DnVwNHIKHOJWINvcCkjPCXbtBtnRfBB6K3AhPBqk1ZoLQ5ER6XSAIeLPZrPlFUEpkfZvIb_lahrn9-12ma-KoZuPTfaqCAwE",
        },
        {
            stat: "45",
            statSuffix: "%",
            label: "Reduced bounce rate",
            quote: "The team at Lamosa not only built us a beautiful platform—they made it fast, smart, and incredibly intuitive. Their UX insights and performance tweaks made a huge difference in keeping users engaged.",
            name: "Marcus Levine",
            role: "Co-founder",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd53-gl841Bg-HbFUueHKd1u-DkhAmcl8Lc2fANaNBYf9yGKg4z5JQF7raDxpBOK_4cHuV6GHykks1xT7k7g3SUD3K4Jy8seWj20KucBLzJdT9PP6EfNFcxq-I5Kcu8TomTFESB3EjJw-PXJysHyJx1hTQ3PirECXhxhrRcNaEHtauSK92uQjDSdmEmDFy_3Q2g4guNPFf6vQCUiZssH-O1zVZyrUv79AWPJcJUw4DnieEA928wBI7Qa0QpjJyvvYbO92zjfacEPg",
        },
        {
            stat: "3",
            statSuffix: "x",
            label: "faster MVP launch",
            quote: "Working with Lamosa helped us cut our launch timeline dramatically. They understand product goals and build with both speed and precision. Easily one of the best agencies we've worked with.",
            name: "Amina Khatri",
            role: "Head of Product",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7ETYGHf6RSbBaySh8BCnyHp-ewA2_C9IdAZA6c6YxRvJLkFL0AlK7UqGk7YjnrEugVr5c5vRWn9H3eFpLsVlSwZ4sNqGQUHRTXQd3-cnWTUaSEZInCb0aJ3ntbOlel48_0gz_u6PfxV9G9HRXD-GRGMmUpEts3xmwX7KDJ9EAxcaPXAiTHsAwQt3xpUsLmo-zUMgD_bNeImQAGKPTf88-KDpfWVj3J9z2j93imCWBhLrE_uVioG5TkpzH0icIhAuCL230rvq_wR4",
        },
    ];

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

    const reviewAvatars = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuxn9-iBBzooOZxl49aNHotff9hbSn4AKggS1K0mPiEB0PS0gdFyoPWNGU6Ym4N2QLPL90Z8DAsXcW08ihIwxoOPXBBQ56I5F0RFsCr_0hr7W98r_RH6OiHUjkAGwTo24i_Neufkp1d8Fn0OlWDSG_GE8kiK8P1hMG0LNZKTCT4OlcwBlmM-evBz6ZvPmM1KWXf-YroInlnhULfl150HFMXay2Iz1k1Ra_MF4SXm1tAq6hJYiy_3d63IwhdcshoC5w9U0D0urOvHM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-zrB_lKI-2mXovITsQnB79W9JMnfkmTrG2A9FH0ro0vkJjfVbMVkPJmMMKVzgMN97FHGjDHB5eX6WaYRnR2Yvry5sOLlBm1efpFEReZl6_KWzAW86N2enpKDN1wNNG_-_0mGMysb4G_ik_KheYWNbBa3_zZooH_Bak-JvmQ3LlQ_tiv2EXyfm_ySjb5el1Ka718VDEahyvZKqJoiTBi7TOYhmjZhlbwxC5WOY3iNSdnCe80FPcFyPQ5uBdUjmQRkuDMPBjU0H92s",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDxc1kZWyVSkIXnmBxTf4S134YlO3d8pYQKttqUKHdVOrwO62LggdApSipOUU0kQKHT_tddGKmxbSN9Z5mD6FLLzujksEHxmtGMAJORhilUKHlshiCoolDU53CryanoMYVPgxWmtCR2Q1Q9FeX8B3fjnHlVzLzyyPExBjeQplpUchhtXnelPM33KqZW6bHL0UoY_lmUgDrhPKBEhHjtJCBgfWFmfJoIagGjTd3uZOWdd6QGrlF5-_-C5XU3dDsrSfQOss69it9QJoE",
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-[80px] leading-[1.1] font-bold tracking-tight mb-8 text-primary">
                        Bold ideas,<br className="hidden md:block" />
                        <span className="opacity-90">Stunning results.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
                        Have a project in mind or need guidance?<br />
                        Let's bring your vision to life.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="max-w-screen-xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <div key={i} className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-primary">{project.name}</h3>
                                    <div className="flex gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-text-secondary">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <button className="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity text-primary">
                                    View <span className="material-symbols-outlined border border-gray-300 rounded-full p-1 text-sm">arrow_forward</span>
                                </button>
                            </div>
                            <div className="mt-6 aspect-[4/3] w-full bg-gray-100 rounded-[32px] overflow-hidden relative group">
                                <img
                                    alt={project.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    src={project.img}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-white border border-gray-200 px-6 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors text-primary">
                        Load More
                    </button>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="text-center mb-20 relative z-10">
                        <div className="w-2 h-2 bg-accent-new rounded-full mx-auto mb-6"></div>
                        <h2 className="text-5xl font-bold tracking-tight mb-2 text-primary">We're Loved.</h2>
                        <h3 className="text-5xl font-bold tracking-tight text-text-secondary opacity-50">Just Success Stories.</h3>
                    </div>

                    {/* Testimonial Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 flex flex-col justify-between">
                                <div>
                                    <div className="text-4xl font-bold mb-1 text-primary">{t.stat}<span className="text-accent-new">{t.statSuffix}</span></div>
                                    <div className="text-text-secondary text-sm mb-6">{t.label}</div>
                                    <div className="text-accent-new text-4xl leading-none mb-4 font-serif">"</div>
                                    <p className="text-sm leading-relaxed text-primary opacity-90 mb-8">{t.quote}</p>
                                </div>
                                <div className="flex items-center gap-3 mt-auto">
                                    <img alt={t.name} className="w-10 h-10 rounded-full object-cover" src={t.avatar} />
                                    <div>
                                        <div className="font-semibold text-sm text-primary">{t.name}</div>
                                        <div className="text-xs text-text-secondary">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Banner */}
                    <div className="bg-primary text-white rounded-[32px] p-10 md:p-14 mb-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                    You focus <span className="text-gray-400">on your company.</span><br />
                                    <span className="text-gray-400">We make</span> it happen.<br />
                                    Unstoppable Growth.
                                </h3>
                            </div>
                            <Link className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors whitespace-nowrap" to="/contact">
                                Book A Call
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Reviews Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center px-4">
                        <div className="flex -space-x-3 order-2 md:order-1 mt-4 md:mt-0">
                            {reviewAvatars.map((src, i) => (
                                <img key={i} alt={`User ${i + 1}`} className="w-8 h-8 rounded-full border-2 border-background object-cover" src={src} />
                            ))}
                            <div className="flex flex-col justify-center ml-4 pl-2">
                                <div className="flex text-[10px] text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-xs">star</span>
                                    ))}
                                </div>
                                <div className="text-[10px] text-text-secondary font-medium">From 150+ reviews</div>
                            </div>
                        </div>
                        <button className="order-1 md:order-2 bg-white border border-gray-200 px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors text-primary">
                            View All Reviews <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24">
                <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <div className="w-2 h-2 bg-accent-new rounded-full mb-6"></div>
                            <h2 className="text-4xl font-bold mb-2 text-primary">Got a question?</h2>
                            <h3 className="text-4xl font-bold text-text-secondary opacity-50 mb-12">We've got answers.</h3>
                        </div>
                        <div className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden hidden lg:block">
                            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}></div>
                            <h4 className="text-xl font-bold mb-8 relative z-10">Still have questions?</h4>
                            <Link className="bg-white text-primary px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors relative z-10 w-fit" to="/contact">
                                Contact Us <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-8 space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`bg-white rounded-2xl p-6 border border-gray-100 transition-opacity ${openFaq !== i ? 'opacity-70 hover:opacity-100' : ''}`}>
                                <button
                                    className="w-full flex justify-between items-center text-left"
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                >
                                    <span className={`text-sm ${openFaq === i ? 'font-semibold' : 'font-medium'} text-primary`}>{faq.q}</span>
                                    <span className="material-symbols-outlined text-gray-400">{openFaq === i ? 'remove' : 'add'}</span>
                                </button>
                                {openFaq === i && (
                                    <div className="mt-4 text-sm text-text-secondary leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Mobile-only Still Have Questions */}
                        <div className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden mt-8 block lg:hidden">
                            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}></div>
                            <h4 className="text-xl font-bold mb-8 relative z-10">Still have questions?</h4>
                            <Link className="bg-white text-primary px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors relative z-10 w-fit" to="/contact">
                                Contact Us <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
