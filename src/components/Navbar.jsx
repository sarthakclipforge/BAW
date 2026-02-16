import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] rounded-full px-2 py-2 w-[94%] max-w-[1000px] transition-all duration-300">
            <div className="w-full px-4">
                <div className="flex justify-between items-center h-[56px]">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm italic font-serif">/</span>
                        </div>
                        <span className="font-bold text-[18px] tracking-tight text-primary">Lamosa</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-6 text-[13px] font-medium text-text-secondary">
                        {/* Company Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                            onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                        >
                            <button className={`hover:text-primary transition-colors flex items-center gap-1 py-4 ${isCompanyDropdownOpen ? 'text-primary' : ''}`}>
                                Company <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>

                            {/* Invisible bridge to prevent gap */}
                            <div className={`absolute left-0 top-full w-full h-6 ${isCompanyDropdownOpen ? 'block' : 'hidden'}`} />

                            {/* Dropdown Menu - Adjusted for floating pill */}
                            <div
                                className={`absolute -left-20 top-[calc(100%+8px)] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden transition-all duration-300 ease-out ${isCompanyDropdownOpen
                                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                                    : 'opacity-0 -translate-y-1 pointer-events-none'
                                    }`}
                                style={{ width: '580px' }}
                            >
                                <div className="flex">
                                    {/* Company Section */}
                                    <div className="flex-1 p-8 pr-6">
                                        <h4 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-5">Company</h4>
                                        <div className="space-y-5">
                                            <Link to="/projects" className="flex items-center gap-3.5 group" onClick={() => setIsCompanyDropdownOpen(false)}>
                                                <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-gray-300 transition-colors">
                                                    <span className="material-symbols-outlined text-gray-400 text-[18px]">folder_open</span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[13px] font-semibold text-primary">Projects</span>
                                                        <span className="bg-red-500 text-[8px] text-white px-1.5 py-0.5 rounded-sm font-bold">new</span>
                                                    </div>
                                                    <p className="text-[12px] text-gray-400 mt-0.5">See our work that we've built.</p>
                                                </div>
                                            </Link>
                                            <Link to="/blog" className="flex items-center gap-3.5 group" onClick={() => setIsCompanyDropdownOpen(false)}>
                                                <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-gray-300 transition-colors">
                                                    <span className="material-symbols-outlined text-gray-400 text-[18px]">article</span>
                                                </div>
                                                <div>
                                                    <span className="text-[13px] font-semibold text-primary block">Blog</span>
                                                    <p className="text-[12px] text-gray-400 mt-0.5">Design tips & insights from blogs.</p>
                                                </div>
                                            </Link>
                                            <Link to="/about" className="flex items-center gap-3.5 group" onClick={() => setIsCompanyDropdownOpen(false)}>
                                                <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-gray-300 transition-colors">
                                                    <span className="material-symbols-outlined text-gray-400 text-[18px]">group</span>
                                                </div>
                                                <div>
                                                    <span className="text-[13px] font-semibold text-primary block">About us</span>
                                                    <p className="text-[12px] text-gray-400 mt-0.5">About our amazing team.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Pages Section - with left border */}
                                    <div className="flex-1 p-8 pl-6 border-l border-gray-100">
                                        <h4 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-5">Pages</h4>
                                        <div className="space-y-4">
                                            <Link to="/contact" className="text-[13px] font-semibold text-primary hover:text-black block transition-colors" onClick={() => setIsCompanyDropdownOpen(false)}>
                                                Contact us
                                            </Link>
                                            <a href="#" className="text-[13px] font-semibold text-primary hover:text-black flex items-center gap-2 transition-colors">
                                                Career
                                                <span className="bg-red-500 text-[9px] text-white min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold">4</span>
                                            </a>
                                            <a href="#" className="text-[13px] font-semibold text-primary hover:text-black block transition-colors">
                                                Privacy Policy
                                            </a>
                                            <a href="#" className="text-[13px] font-semibold text-primary hover:text-black block transition-colors">
                                                Terms of Service
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="bg-primary mx-6 mb-6 rounded-2xl px-6 py-5">
                                    <Link to="/contact" className="bg-white hover:bg-gray-50 text-primary px-6 py-3 rounded-full text-[13px] font-semibold transition-colors flex items-center justify-between group" onClick={() => setIsCompanyDropdownOpen(false)}>
                                        Book A Call
                                        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/projects">
                            Projects <span className="bg-accent-new text-[10px] text-white px-1.5 py-0.5 rounded ml-1 font-bold">New</span>
                        </Link>
                        <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/blog">Blog</Link>
                        <Link className="hover:text-primary transition-colors" to="/about">About us</Link>
                    </div>
                    <div>
                        <Link className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full text-[13px] font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2" to="/contact">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
