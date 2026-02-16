export default function Blog() {
    return (
        <section className="py-160 bg-white border-t border-border-light">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="mt-32 pt-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <div className="w-2 h-2 bg-accent-new rounded-full mb-6"></div>
                            <p className="text-[10px] font-bold uppercase text-text-secondary tracking-widest mb-4">Blog</p>
                            <h2 className="text-h2 font-semibold text-primary leading-tight">Fresh insights & ideas<br />from the team.</h2>
                        </div>
                        <p className="text-[15px] text-text-secondary max-w-sm mb-1 leading-relaxed">Expert tips, case studies, and trends to help you design, grow, and convert smarter.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-3 rounded-card border border-border-light group cursor-pointer hover:shadow-lg transition-all h-full">
                            <div className="p-6 pb-2">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[11px] font-bold text-text-secondary mb-2 uppercase tracking-wide">Tarek El-Hassan • Jul 8, 2025</p>
                                        <h3 className="font-bold text-2xl leading-tight text-primary mb-4">Why Motion Design is the New Differentiator in SaaS</h3>
                                    </div>
                                    <span className="bg-background text-[10px] px-2 py-1 rounded font-bold border border-border-light h-fit text-text-secondary">9 min</span>
                                </div>
                                <div className="flex gap-2 mb-8">
                                    <span className="text-[11px] font-medium border border-border-light px-2.5 py-1 rounded-full bg-background text-text-secondary">Motion Design</span>
                                    <span className="text-[11px] font-medium border border-border-light px-2.5 py-1 rounded-full bg-background text-text-secondary">Design</span>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden h-[300px] bg-black relative mt-auto mx-2 mb-2">
                                <img loading="lazy" alt="Motion Design" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsC0yN88gI35_gfWpuRjaZxkOHEk7hUejqSZgVqSQ5ELtcs-z_yy3NJ7087YmUZxBZBezWVxoquLIRxi-08GJQMEI60QR-DbPOqkhTQlYw-ZOMoo2vo5-dpnoTeqXj7ogORKgw0mCjTFWJm6zbckgxePm0X9q3HqB9E6hOy_FYnbf0AyPRln6woRevlhQ6tmHP0CkOU6Y4Wr7CJ7QR8j-_vTZTwOWNmgYirrn3Z5Kj77-36oP7H6rdaxPO3LmoAoQnAEfvZ233cD4" />
                                <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded">FEATURED</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white p-3 rounded-card border border-border-light flex gap-6 group cursor-pointer hover:shadow-lg transition-all items-center">
                                <div className="w-[160px] h-[120px] rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                    <img loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmtUVlVkRanmu7pDSQlGaLOb6Kl9NF7m2GGPC60fzvojMr0jfokmjKKq7GTPJzhvwgXF4FCqZzrs151jf5i5qXbY0TNbj_V-L2z7Aoceey3lu1jzeibaOR0gw72XAPtWRsKoB2KXCzwQmXqSjdDbeUKzkgwBCZ7khmKqRXUydhA1Khhc5nE3is7YdHbQz8BV0npZqSQvDfnKfCPDBPozxRYbHvuMkoddeZMo-pAdYUpcRCTehRpJiWbIG_nNMQtpgtqMFS4qKSGM4" />
                                </div>
                                <div className="py-2 pr-4 flex flex-col h-full justify-between flex-1">
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wide">Maya Koli • Jun 18, 2025</p>
                                            <span className="text-[10px] text-gray-400">5 min</span>
                                        </div>
                                        <h3 className="font-bold text-[16px] leading-snug text-primary mb-3">The Psychology Behind High-Converting Landing Pages</h3>
                                    </div>
                                    <div className="flex justify-between items-center mt-auto">
                                        <div className="flex gap-1">
                                            <span className="text-[10px] font-medium border border-border-light px-2 py-0.5 rounded-full bg-background text-text-secondary">Design</span>
                                            <span className="text-[10px] font-medium border border-border-light px-2 py-0.5 rounded-full bg-background text-text-secondary">Tech</span>
                                        </div>
                                        <div className="w-7 h-7 rounded-full border border-border-light flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-card border border-border-light flex gap-6 group cursor-pointer hover:shadow-lg transition-all items-center">
                                <div className="w-[160px] h-[120px] rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                    <img loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqJ1FatKNWMDAWG3zmOAI_7uBQa1YT7C8ZstuWj2nDUM6kga3xb1Q5SLxs7Oc9sGlOosEHTjJlkzGxdvWM4h5GLfPaj8Qmsp4wjNDKscuu-JiE_k5TpeMmpdrd3ibCkT6lAHK98s0l2sk2gU8iHpdPKtjQKNWss0Ug-szaP8ky0R5oiKbfkQNn_t-5gkI9gHti3icRsZV6KyOO75GqnUpDTtBFvncdAMl-5Zee6gQNUO-IwmLP7XIUudKeGzu2THZpqngexIMlzaU" />
                                </div>
                                <div className="py-2 pr-4 flex flex-col h-full justify-between flex-1">
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wide">Amine Johnson • Jul 4, 2025</p>
                                            <span className="text-[10px] text-gray-400">12 min</span>
                                        </div>
                                        <h3 className="font-bold text-[16px] leading-snug text-primary mb-3">Building an MVP That Doesn't Suck: 6 Rules to Follow</h3>
                                    </div>
                                    <div className="flex justify-between items-center mt-auto">
                                        <div className="flex gap-1">
                                            <span className="text-[10px] font-medium border border-border-light px-2 py-0.5 rounded-full bg-background text-text-secondary">Product</span>
                                        </div>
                                        <div className="w-7 h-7 rounded-full border border-border-light flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 flex justify-end">
                        <a className="inline-flex items-center gap-2 text-[14px] font-semibold border border-border-light bg-white text-primary px-6 py-3 rounded-pill hover:bg-gray-50 transition-colors shadow-sm" href="#">
                            Read All Articles <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
