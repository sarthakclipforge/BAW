import { Link } from 'react-router-dom';

export default function BlogPage() {
    const featuredPosts = [
        {
            author: "Tarek El-Hassan",
            date: "Jul 9, 2025",
            readTime: "8 min",
            title: "Why Motion Design is the New Differentiator in SaaS",
            tags: ["Motion Design", "Design"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzYz4xj_rWnJjyMBdyEQbPLN3V43jPkdYYuTdIzD-8KyL_3ndwHyfiAHGMAaySvK7DExgOhc5XxmYZ6yWhcRLA5Oc_Zdm-D3LlH2g5u4C1SBDBwFHl2LzP3enp69vT7Vxvp-CqLKb1si_SIhdqBIS6juPKDbty0drUotkdvZjSvAj-MGxnsynBUawhK_zQBZmS0hQS-HeVlKb6BhwDHF2DiEpGFJYz7TLMcRv2LacnTMH39-MGin1i9Wo3mhMm_HMNDrzFBCiHPZU",
            alt: "Motion design robotics hand",
            isLarge: true
        },
        {
            author: "Maya Koji",
            date: "Jun 18, 2025",
            readTime: "9 min",
            title: "The Psychology Behind High-Converting Landing Pages",
            tags: ["Design", "Technology"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEa3c4IoTtwdgimOQUXipJH7xdXg5M1zdePw8TIItAR0eYtSlYFI8f97y4EMgIrmFjI7kwFu8S8qhJFboHMSlmvXDE7vhtZi3ph27qUClIRhW0o0MM6MaRqP8KnLfiUiRC837P4VMJUeCy9UkTE9iQryU8_7W5G8itO6hQ2P6vTRJruGPOb6Czoy_4f9qwm3gWXD5XCibj4CY2tu-T1QY5zZOXJiaoEMcCWex10xeUMd8xwgZ25LhbXtuk0DRyyRBeJ30O3fCngqg",
            alt: "Team brainstorming session",
            isLarge: false
        }
    ];

    const recentPosts = [
        {
            author: "Amina Johnson",
            date: "Jul 4, 2025",
            readTime: "12 min",
            title: "Building an MVP That Doesn't Suck: 6 Rules to Follow",
            tags: ["product-development", "Design"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzEz08q20z_V4Tcp1m39i2-GMFuK63P9HWOUKmciPPuQ-bqB6FIxCR1yw901hGHFaFo6EUxxnoCdkyt62afX08ip8Ffw1Bpxtq-MhDutj2QqnrHofNoNN6WIFiJrkElxhLi97mwObaLhvQz34rm69q9h16vI2UdvWD1nab5jLc9JC7D8nJHiAGnvxYtDuZi3e5EcYXSfHMWYn3asufl7ctbTTvB0KOD_akycXGur1B_KsgeiVAtr5LBLskRhXwNdchvL-r9ML5KSQ",
            alt: "Abstract geometric shapes"
        },
        {
            author: "Leo Martinez",
            date: "Jun 30, 2025",
            readTime: "10 min",
            title: "5 Modern Marketing Campaigns That Nailed Storytelling",
            tags: ["Marketing", "Productivity"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIemEPBKtx3d9JWFQ1JFo-VjBLxjGw119bzaR2W1CGNmNg7BphxskAUmhoeuuglqTWfrAQE8xOaM5G0MlygIQx74Bx8axcO8EsCSzorB5niesw8xeyNLD3xnPXOb1MhPhs8YYvOn5PUFVkcE9f2HTdsYpSH36U9GKysnwhPKaUQJ1FwUlRP1TZEf53LvGUhDxgN0-baFLiQUouCrPcIG2PBpCMNqpXMfm1G6UR2MkSjIR1c6AWe-nwOe-w1BRYx9-WmR0wcu52lps",
            alt: "Person writing on notepad"
        },
        {
            author: "Maya Koji",
            date: "Jun 21, 2025",
            readTime: "10 min",
            title: "10 Modern Marketing Campaigns That Nailed Storytelling",
            tags: ["Marketing", "Productivity"],
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYn1_sd8Eb_of4O-FefN8Q7J2j7gj3htFwfbYeOTLnlYiX6RWraV_pvC0ZzTqLYs_2aHbJrn0wHZj2-nhAZZb4WniZtGf0II5ydoC_HhmeOKOwkS0u6puFNPbdXa8mHArFamrqX7EYysHKKjFED-mHuVZd10Wu7Kr51VIirIKGPrS8ZFaxer_VVgfB9XHwyCiFgGiV4dZW5Clh03ayNJ5gvi9EDQxRZOkdrfVKqLQ00lfJPdS4BWzOoOtv0hjk7NcZZwgfD3k2SW0",
            alt: "Isometric minimal objects"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-[64px] leading-[1.1] font-semibold tracking-tight text-primary mb-6">
                        Fresh insights & ideas <br /> from the team.
                    </h1>
                    <p className="text-lg text-text-secondary max-w-lg mx-auto leading-relaxed mb-10">
                        Stay ahead with strategies uniting design, technology, and marketing to deliver measurable growth.
                    </p>
                    <div className="relative max-w-md mx-auto">
                        <input className="w-full h-14 pl-6 pr-14 rounded-full border-none shadow-subtle bg-white text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-shadow" placeholder="Enter your email..." type="email" />
                        <button className="absolute right-2 top-2 h-10 w-10 bg-primary hover:bg-primary-hover text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-screen-xl mx-auto px-6 pb-32">
                <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-sm border border-border-light">
                    {/* Featured Posts */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                        {featuredPosts.map((post, index) => (
                            <div key={index} className={`${index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'} flex flex-col h-full group cursor-pointer`}>
                                <div className="flex items-center justify-between text-xs font-medium text-text-secondary mb-3">
                                    <div className="flex items-center gap-2">
                                        <span>{post.author}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span>{post.date}</span>
                                    </div>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className={`${index === 0 ? 'text-[32px] leading-tight' : 'text-2xl'} font-medium text-primary mb-4 group-hover:text-gray-700 transition-colors`}>
                                    {post.title}
                                </h2>
                                <div className="flex items-center gap-2 mb-6">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full border border-border-light text-xs font-medium text-text-secondary">{tag}</span>
                                    ))}
                                    <div className="ml-auto w-8 h-8 rounded-full border border-border-light flex items-center justify-center text-gray-400 group-hover:border-gray-400 group-hover:text-primary transition-all">
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                                <div className={`relative overflow-hidden rounded-[32px] mt-auto ${index === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-[480px]' : 'h-[280px] lg:h-full bg-gray-100'}`}>
                                    {index === 0 && <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">Featured</span>}
                                    <img loading="lazy" alt={post.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={post.img} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentPosts.map((post, index) => (
                            <div key={index} className="flex flex-col group cursor-pointer">
                                <div className="flex items-center justify-between text-xs font-medium text-text-secondary mb-3">
                                    <div className="flex items-center gap-2">
                                        <span>{post.author}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span>{post.date}</span>
                                    </div>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-medium text-primary mb-4 line-clamp-2 h-[56px]">{post.title}</h3>
                                <div className="flex items-center gap-2 mb-6">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full border border-border-light text-xs font-medium text-text-secondary">{tag}</span>
                                    ))}
                                    <div className="ml-auto w-8 h-8 rounded-full border border-border-light flex items-center justify-center text-gray-400 group-hover:border-gray-400 group-hover:text-primary transition-all">
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                                <div className="rounded-[32px] overflow-hidden aspect-[4/3] bg-gray-50">
                                    <img loading="lazy" alt={post.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={post.img} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <button className="bg-white border border-border-light text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                        Load More
                    </button>
                </div>
            </main>


        </>
    );
}
