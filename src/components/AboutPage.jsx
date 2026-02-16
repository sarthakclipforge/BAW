import { Link } from 'react-router-dom';

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Elias Reed",
            role: "Founder & Creative Director",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOI8s1xV5NIoTkxwN5WZyDHBlEQ6shDDfz2nNYsnDLiwfsBg6bUfJ2QFavHns8ADv1iLNEC40ZWnXaYgZ_R8IwfGKz6ebPP80iKpoFNE0dSyaessY5TUB44VaTSt9J7KaIIZ1-OVXKMmlM6BimSq2IDoNRXfa2VmnuVEEcWIQOC11F57kKbCFDJEzqBxemO4cUodVK1PZu3saeHudqNpTAiv5eH8f12lrvssMH6Rn8UBblAzyhPw8lDe7k5J0m_ZyxCKIKvF6IPao",
            alt: "Elias Reed Portrait"
        },
        {
            name: "Maya Koji",
            role: "Lead Product Designer",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl81X0Ezgrubrh7Hkn2gD6l8hDBtnYLXSyBeRcwjPKdvtieY8V3e7fJjlYHfFo4yoZNdKEXCQ_UaZt2O9o2IM3a7fMzYFO61pkd5ZAD2jU0Rs9msalead7I_Vox10kCqtwHZ9u9M19FNqwiLcIkU9hcu8sUHh6GMzmTr74SEUF59okkMEqRydDqgKThhDo4JiNlMnWg3shfkVIJupZw0wxg92ufLmzPjDzdStfRrO3vJMfC23Wy_dvjKpMmEYWQLReBIKtcjQn26I",
            alt: "Maya Koji Portrait"
        },
        {
            name: "Leo Martinez",
            role: "Senior Full-Stack Developer",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ULuwewxbAVodcqqNBJLtPkZZSP_ARL6T9aiRCVcEkE698z5DTlwefRVpv9o_XYO9KuryPcvrmPCzG8dHdr3Ac-Xhfqfcj3ocvyEj13jpUSp-4-zBsfB-bGbyQsFpyG8Ux8PPqvXTgSsLO-Ezzhwljt6c5vczGCy0m0-YZjCJJsFQVOXUasteiazXCSO49OugUooBv8sFlq9LRjHeY02GuGcQOrstG7WmdueL76J0JwMvKoSjJDiG-G3jbqIUfYAk605vvvdJZLY",
            alt: "Leo Martinez Portrait"
        },
        {
            name: "Amina Johnson",
            role: "Brand Strategist",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2m5s48ZLZ9Q5_acWPMUxqxX-nr3Kc_KNs2AzII58IYaYgR2y3fAd6RAZZHLSRL4PrwSHw-57EtCi39p9m3E8CPy2ESh2PA69o7kSzo6DsaX34oCN1-S-iizybUoRYCuqw5993DZr1fUxuL-xZArYmvpFhba9bi1nCFpP5mTfUG585QBfm3o33KUiZGNmOs5nMJH-BMFvZtYxe8_lEcsGg719rkH3a1Vm4deKm_GAF4_tL0J5GLVeOQ5Xm89xNByqY-UQmjkkXwrM",
            alt: "Amina Johnson Portrait"
        }
    ];

    const awards = [
        { name: "Awwwards — Site of the Day", desc: "Recognizing outstanding design, creativity, and innovation in web experiences.", year: "2025" },
        { name: "FWA — Cutting Edge Award", desc: "Awarded for pushing creative and technical boundaries in web design.", year: "2024" },
        { name: "CSS Design Awards — Best UI/UX", desc: "Celebrating cutting-edge user interface and user experience design.", year: "2023" },
        { name: "Behance Interaction Design Feature", desc: "Spotlighting exceptional interaction design showcased to a global audience.", year: "2023" },
        { name: "Webby Awards — Best Visual Design", desc: "Honoring excellence in visual aesthetics and creative digital storytelling.", year: "2022" },
    ];

    const whyUs = [
        {
            icon: "check_circle",
            title: "Lamosa Studio",
            isPrimary: true,
            features: [
                { icon: "bolt", text: "Affordable one-time or subscription pricing." },
                { icon: "rocket_launch", text: "Launch-ready, deploys in days." },
                { icon: "draw", text: "Flexible, easy to tailor with Framer." },
                { icon: "verified", text: "Professionally crafted, conversion-focused." },
                { icon: "autorenew", text: "Regular improvements & new features included." },
                { icon: "shield", text: "Low risk, proven template tested for results." }
            ]
        },
        {
            icon: "radio_button_unchecked",
            title: "Other Agency",
            isPrimary: false,
            features: [
                { icon: "close", text: "Often high and project-based, with hidden fees." },
                { icon: "close", text: "Weeks to months depending on scope." },
                { icon: "close", text: "Fully custom but at higher cost and time." },
                { icon: "close", text: "High quality but varies by agency expertise." },
                { icon: "close", text: "Updates only on new contracts." },
                { icon: "close", text: "Medium risk; quality varies per agency." }
            ]
        }
    ];

    return (
        <div className="bg-background text-primary">
            {/* Hero Section */}
            <header className="pt-40 pb-20 px-6">
                <div className="max-w-screen-xl mx-auto text-center mb-16">
                    <h1 className="text-[80px] leading-[1.1] font-semibold text-primary mb-6 tracking-tight">
                        Ambitious talents,<br />for bold ideas.
                    </h1>
                    <p className="text-text-secondary text-lg max-w-lg mx-auto leading-relaxed">
                        creating a culture where ideas flow freely and<br />innovation thrives.
                    </p>
                </div>
                <div className="max-w-screen-xl mx-auto space-y-6">
                    <div className="w-full h-[500px] overflow-hidden rounded-[32px] relative">
                        <img alt="Team meeting in a modern office with large windows" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAxI0-_bzojxGTLdlWi9Ia5cgLidLCYkmaglXV1gG4gi0ly1ZJFXE1r7tsIGoc5g-k-nW7HySPRW5_XFNOD9-z8Ho3vW8LWNn0jH1X5A15Y05FASLAc-twQ-rYz0Vvvboh-MycXeAaDsnYLw8ozzjdOX7tA0eem4B1x06ZB2ZP4vTTdwl7CFnOwHYd-uarzdk9XsP5hEd-8dtqqx3C9nfzCDLfy_m3wbOCdC2GfH04sSzXNtp0JxUl1ek1d3ykK3_eTgAdahwqj9Y" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="h-[400px] overflow-hidden rounded-[32px] relative">
                            <img alt="People collaborating in a bright workspace" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABpsJN56VDsmLglE2IoZRVYo_bZ4Mv8bjCyXlPNoGTxKVLRE7Y-89EgCcv0EyE8GVv3F6ane4oy1aHzh5brA5Xnn5NEJpIDWbpzgbAIxkqreVsJdqkISyEbZpF3dGxwG5Af8OK-mtu1Tz3LN3kAAzpWLMsvxVpjNMOYhcuU7JOS6MlNUBP3fWvcmf-5AyspZ_qYTL_HvBYh5UFqxisseWdaVIDHz6b3iUM_KncAq_f7uOGO3CubqnL-QRPmNwbkMG-_itgjl1FI_A" />
                        </div>
                        <div className="h-[400px] overflow-hidden rounded-[32px] relative">
                            <img alt="Designers discussing project details at a desk" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDdcLnFAISzRcgsoB6J0iD8MBHSWYwW3HlR5DXAAgxaa4H7fk1auY5Ze8JU8oThwq6qt2b7Kam39-YKE5aNnqSAuvpur4B0-gWvg4RLtX-VzBW40qy7Ye_uYri9Z5Db4C4ro6HlXnD_JKHl4NhCw6H1ZdpUm2deVMLaXah-uUNmU5wsggRbjvqxWE9fPsPy3Kdjb7_WMKb-DYvvr-_fQ8RXxJOMx41XJJRYPyUYCsw1E4eyTeSjYUX_1XHy_DrkxSMVSyev84P4Fg" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Story Section */}
            <section className="py-24 px-6">
                <div className="max-w-[800px] mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">Story</span>
                    </div>
                    <h2 className="text-5xl font-semibold text-primary mb-8">
                        Our story<br />
                        <span className="text-gray-400">matters.</span>
                    </h2>
                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed mb-16">
                        <p>We believe great work comes from collaboration, curiosity, and a shared vision.</p>
                        <p>Each team member—from designers to developers to strategists—brings unique skills and perspectives, creating a culture where ideas flow freely and innovation thrives.</p>
                        <p>Beyond projects, we celebrate milestones together, share learnings, and support one another. Our bond goes beyond work, shaping Lamosa into not just a team but a community that's driven to help brands grow and succeed.</p>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto border-t border-border-light pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-8">
                        <span className="text-sm text-gray-500 font-medium">Trusted by top founders.</span>
                        <div className="flex items-center gap-6 opacity-60">
                            <div className="h-6 w-16 bg-gray-400 rounded"></div>
                            <div className="h-6 w-16 bg-gray-400 rounded"></div>
                            <div className="h-6 w-16 bg-gray-400 rounded"></div>
                        </div>
                    </div>
                    <Link className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-light bg-white text-sm font-medium hover:border-gray-400 transition-colors" to="/projects">
                        View Our Work
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="sticky top-32 h-fit">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">process</span>
                        </div>
                        <h2 className="text-5xl font-semibold text-primary mb-6 leading-tight">
                            Proven & effective process.<br />
                            That delivers results.
                        </h2>
                        <p className="text-text-secondary text-lg max-w-md">
                            We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
                        </p>
                    </div>
                    <div className="relative pl-8 border-l border-red-500 space-y-12 py-4">
                        {/* Step 01 */}
                        <div className="relative bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
                            <span className="absolute -left-[45px] top-8 text-xs font-mono text-gray-500 bg-gray-50 py-1 border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center">01</span>
                            <h3 className="text-xl font-semibold mb-3">Discovery & Strategy</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We uncover your goals, audience, and challenges to build a clear roadmap for success.
                            </p>
                        </div>
                        {/* Step 02 */}
                        <div className="relative bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
                            <span className="absolute -left-[45px] top-8 text-xs font-mono text-gray-500 bg-gray-50 py-1 border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center">02</span>
                            <h3 className="text-xl font-semibold mb-3">Design & Prototyping</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Transforming insights into bold, user-focused designs that connect and convert.
                            </p>
                        </div>
                        {/* Step 03 */}
                        <div className="relative bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
                            <span className="absolute -left-[45px] top-8 text-xs font-mono text-gray-500 bg-gray-50 py-1 border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center">03</span>
                            <h3 className="text-xl font-semibold mb-3">Development & Launch</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                From pixel to code, we craft high-performing websites and launch them flawlessly.
                            </p>
                        </div>
                        {/* Step 04 */}
                        <div className="relative bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
                            <span className="absolute -left-[45px] top-8 text-xs font-mono text-gray-500 bg-gray-50 py-1 border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center">04</span>
                            <h3 className="text-xl font-semibold mb-3">Optimization & Scale</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We monitor, refine, and enhance to ensure continuous growth and lasting impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">Team</span>
                        </div>
                        <h2 className="text-5xl font-semibold text-primary mb-6">
                            Meet our<br />amazing team.
                        </h2>
                        <p className="text-text-secondary text-sm italic opacity-80">
                            Great things in business are never done by one person.<br />They are done by a team of people - Steve Jobs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {teamMembers.map((member, index) => (
                            <div key={index} className={`group ${index % 2 !== 0 ? 'md:mt-16' : ''}`}>
                                <div className="flex justify-between items-end mb-4 border-b border-border-light pb-2">
                                    <div>
                                        <h3 className="font-semibold text-lg">{member.name}</h3>
                                        <div className="flex gap-2 mt-2">
                                            <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-500 hover:bg-black hover:text-white transition-colors cursor-pointer">𝕏</span>
                                            <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-500 hover:bg-black hover:text-white transition-colors cursor-pointer">in</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{member.role}</span>
                                </div>
                                <div className="aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-200">
                                    <img alt={member.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={member.img} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">Achievements</span>
                    </div>
                    <h2 className="text-5xl font-semibold text-primary mb-12">
                        Awards,<br />We won.
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="pb-4 text-xs uppercase text-gray-500 font-medium w-1/4">Name</th>
                                    <th className="pb-4 text-xs uppercase text-gray-500 font-medium w-1/2">Description</th>
                                    <th className="pb-4 text-xs uppercase text-gray-500 font-medium w-24">Year</th>
                                    <th className="pb-4 text-xs uppercase text-gray-500 font-medium text-right">View</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {awards.map((award, index) => (
                                    <tr key={index} className="group border-b border-gray-200 hover:bg-white transition-colors">
                                        <td className="py-6 font-medium text-primary">{award.name}</td>
                                        <td className="py-6 text-text-secondary pr-4">{award.desc}</td>
                                        <td className="py-6 text-gray-500">{award.year}</td>
                                        <td className="py-6 text-right">
                                            <a className="inline-flex w-8 h-8 rounded-full border border-gray-200 items-center justify-center text-gray-500 group-hover:border-primary group-hover:text-primary transition-colors" href="#">
                                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">Why us</span>
                        </div>
                        <h2 className="text-5xl font-semibold text-primary mb-4">
                            Why work with us?
                        </h2>
                        <p className="text-text-secondary text-sm opacity-80">
                            Find out why Lamosa is Your Smartest Choice<br />for Project Success.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
                        {whyUs.map((item, index) => (
                            <div key={index} className={`bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 ${!item.isPrimary ? 'opacity-60' : ''}`}>
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                                    <span className="material-symbols-outlined text-gray-400">{item.icon}</span>
                                    <h3 className="font-medium text-lg">{item.title}</h3>
                                </div>
                                <ul className="space-y-6">
                                    {item.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <span className={`material-symbols-outlined text-lg mt-0.5 ${item.isPrimary ? 'text-red-500' : 'text-gray-400'}`}>{feature.icon}</span>
                                            <span className={`text-sm ${item.isPrimary ? 'text-gray-600' : 'text-gray-500'}`}>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="absolute -bottom-10 right-0 bg-primary text-white p-8 rounded-[24px] w-full max-w-sm shadow-xl flex flex-col items-start gap-6 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                            <div>
                                <h3 className="text-2xl font-bold mb-1">We're hiring.</h3>
                                <h3 className="text-2xl font-bold">Join Our Team.</h3>
                            </div>
                            <a className="w-full bg-white text-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-between" href="#">
                                Check Career
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
