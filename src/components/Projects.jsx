import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <section className="py-160 bg-white">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-24">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-new"></span>
                        <span className="text-[10px] font-bold uppercase text-text-secondary tracking-widest">Projects</span>
                    </div>
                    <h2 className="text-h2 font-semibold text-primary">Here's what<br />the momentum looks like.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-20">
                    <div className="group cursor-pointer">
                        <div className="flex justify-between items-end mb-6 px-1">
                            <div>
                                <h3 className="font-bold text-xl text-primary mb-2">Atlas Technologies</h3>
                                <div className="flex gap-2 text-[11px] font-medium text-text-secondary">
                                    <span className="bg-background px-2.5 py-1 rounded border border-border-light">UX Design</span>
                                    <span className="bg-background px-2.5 py-1 rounded border border-border-light">Web Design</span>
                                </div>
                            </div>
                            <span className="w-9 h-9 rounded-full border border-border-light flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </span>
                        </div>
                        <div className="bg-[#111] rounded-[32px] overflow-hidden aspect-[4/3] relative border border-border-light shadow-sm flex items-center justify-center p-12">
                            <img alt="Atlas project" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDyi-beGxR5mWboq4-97RO9e00l98NzhA0hl_LG0gxQFGybNMLKDR67-6MW0_dnmBb28Y-XJ1ayvygepHh6r13UaRkOqoqe7V8bjpdW_YIvzqvZZgnd3RJFtrc1sUrsbLTCVJ6tsEBLItmVJ0scECR2FqQUB7WNTNOQ1DPxFvBnhrYVWIx7BPKYGWJxQg8hfLzvk5V_0hBczuFXfIGXw7vywsRZb8stRtVLd1OcpcgIWie3fsh9oycWhIvitk8eaRoEmwslTjssns" />
                        </div>
                    </div>
                    <div className="group cursor-pointer md:mt-24">
                        <div className="flex justify-between items-end mb-6 px-1">
                            <div>
                                <h3 className="font-bold text-xl text-primary mb-2">Finlytics</h3>
                                <div className="flex gap-2 text-[11px] font-medium text-text-secondary">
                                    <span className="bg-background px-2.5 py-1 rounded border border-border-light">UI Design</span>
                                    <span className="bg-background px-2.5 py-1 rounded border border-border-light">Branding</span>
                                </div>
                            </div>
                            <span className="w-9 h-9 rounded-full border border-border-light flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </span>
                        </div>
                        <div className="bg-[#2D8C98] rounded-[32px] overflow-hidden aspect-[4/3] relative border border-border-light shadow-sm flex items-center justify-center">
                            <div className="text-center text-white/90">
                                <h4 className="text-4xl font-light tracking-widest uppercase mb-4 opacity-80">Finlytics</h4>
                                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-3xl">local_florist</span>
                                </div>
                                <p className="mt-4 text-sm font-mono opacity-60">finly.siml</p>
                            </div>
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="flex justify-between items-end mb-6 px-1">
                            <div>
                                <h3 className="font-bold text-xl text-primary mb-2">Orbital Bank</h3>
                                <div className="flex gap-2 text-[11px] font-medium text-text-secondary">
                                    <span className="bg-background px-2.5 py-1 rounded border border-border-light">Fintech</span>
                                    <span className="bg-background px-2.5 py-1 rounded border border-border-light">UX Design</span>
                                </div>
                            </div>
                            <span className="w-9 h-9 rounded-full border border-border-light flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </span>
                        </div>
                        <div className="bg-[#568233] rounded-[32px] overflow-hidden aspect-[4/3] relative border border-border-light shadow-sm flex items-center justify-center p-0">
                            <img alt="Orbital Bank project" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnxbAQWjD_cxfIH-N2iB6j46lCxKB35EdqBDTAJ-QEAedGvTh433C3kXuPdUrdgSePKW4G32G1BxiFmbXypdm2SzPtwc1LMEM2QtwEAkA5ESgmFnX9utdbIN9E6CFNSIjYdI9ZoXdeCmJGmCEYAOwNgZFUolfo4pdpcfd4v7cVHlq1SSpfd8LStEJ3J4kURVeDnIUFVzfXIdefynvDmUXkEpc-IQSQc57YGHyznjaCGyps2_THpnCyhg1aQHGYEG3cYSeFnQjfwGU" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h4 className="text-[80px] font-thin text-white/20 tracking-[0.5em] w-full text-center">ORBITAL</h4>
                            </div>
                        </div>
                    </div>
                    <div className="group cursor-pointer md:mt-24">
                        <div className="flex justify-between items-end mb-6 px-1">
                            <div>
                                <h3 className="font-bold text-xl text-primary mb-2">Echo Analytics</h3>
                                <div className="flex gap-2 text-[11px] font-medium text-text-secondary">
                                    <span className="bg-background px-2.5 py-1 rounded border border-border-light">UI Design</span>
                                    <span className="bg-background px-2.5 py-1 rounded border border-border-light">Motion Design</span>
                                </div>
                            </div>
                            <span className="w-9 h-9 rounded-full border border-border-light flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </span>
                        </div>
                        <div className="bg-[#4B9598] rounded-[32px] overflow-hidden aspect-[4/3] relative border border-border-light shadow-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4B9598] to-[#3A7578]"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-24 flex justify-center">
                    <Link className="inline-flex items-center gap-2 text-[14px] font-semibold border border-border-light bg-white text-primary px-8 py-3.5 rounded-pill hover:bg-gray-50 transition-colors shadow-sm group" to="/projects">
                        View All Projects <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
