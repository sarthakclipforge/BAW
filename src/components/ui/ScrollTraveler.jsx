import { useRef, useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';

// ─── Primary section waypoints the dot will travel between ─────
const WAYPOINT_IDS = [
    'waypoint-hero',
    'waypoint-stats',
    'waypoint-services',
    'waypoint-projects',
    'waypoint-process',
    'waypoint-testimonials',
    'waypoint-pricing',
    'waypoint-faq',
    'waypoint-blog',
    'waypoint-footer',
];

export default function ScrollTraveler() {
    const trackRef = useRef(null);
    const dotRef = useRef(null);
    const nodeRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const dataRef = useRef({ raf: null, observer: null, resizeTimer: null });

    // ─── Compute which waypoint is "active" based on scroll ─────
    const update = useCallback(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const vh = window.innerHeight;
        // Threshold: the top 40% of viewport decides the "active" section
        const triggerLine = scrollY + vh * 0.4;

        let bestIdx = -1;

        for (let i = 0; i < WAYPOINT_IDS.length; i++) {
            const el = document.getElementById(WAYPOINT_IDS[i]);
            if (!el) continue;

            const rect = el.getBoundingClientRect();
            const absY = rect.top + scrollY;

            if (triggerLine >= absY) {
                bestIdx = i;
            }
        }

        // Always show if we've scrolled at all
        if (scrollY > 50 && bestIdx === -1) bestIdx = 0;

        setActiveIndex(bestIdx);

        // Position the dot at the active node
        if (bestIdx >= 0 && dotRef.current && nodeRefs.current[bestIdx]) {
            const nodeEl = nodeRefs.current[bestIdx];
            const trackEl = trackRef.current;
            if (!nodeEl || !trackEl) return;

            const trackRect = trackEl.getBoundingClientRect();
            const nodeRect = nodeEl.getBoundingClientRect();

            // Get center of node relative to track container
            const y = nodeRect.top - trackRect.top + nodeRect.height / 2;

            gsap.to(dotRef.current, {
                y: y,
                duration: 0.5,
                ease: 'power3.out',
                overwrite: true,
            });
        }
    }, []);

    // ─── RAF loop for smooth tracking ─────────────────────────
    const tick = useCallback(() => {
        update();
        dataRef.current.raf = requestAnimationFrame(tick);
    }, [update]);

    useEffect(() => {
        // Start the loop after a short delay for lazy content to load
        const start = setTimeout(() => {
            dataRef.current.raf = requestAnimationFrame(tick);

            // Watch for DOM changes (lazy-loaded sections)
            const observer = new MutationObserver(() => {
                clearTimeout(dataRef.current.resizeTimer);
                dataRef.current.resizeTimer = setTimeout(update, 100);
            });
            observer.observe(document.body, { childList: true, subtree: true });
            dataRef.current.observer = observer;

            window.addEventListener('resize', update, { passive: true });
        }, 800);

        return () => {
            clearTimeout(start);
            clearTimeout(dataRef.current.resizeTimer);
            if (dataRef.current.raf) cancelAnimationFrame(dataRef.current.raf);
            if (dataRef.current.observer) dataRef.current.observer.disconnect();
            window.removeEventListener('resize', update);
        };
    }, [tick, update]);

    // Show/hide based on scroll
    const isVisible = activeIndex >= 0;

    return (
        <div
            ref={trackRef}
            className={`fixed right-3 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            style={{ gap: '0px' }}
        >
            {/* Vertical track line */}
            <div className="absolute top-0 bottom-0 w-px bg-gray-200/60 left-1/2 -translate-x-1/2" />

            {/* Traveling dot - positioned absolutely, animated with GSAP */}
            <div
                ref={dotRef}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-new z-10"
                style={{
                    boxShadow: '0 0 12px rgba(48, 79, 255, 0.5), 0 0 4px rgba(48, 79, 255, 0.3)',
                    top: 0,
                }}
            />

            {/* Node markers for each section */}
            {WAYPOINT_IDS.map((id, i) => (
                <div
                    key={id}
                    ref={el => nodeRefs.current[i] = el}
                    className={`relative w-2 h-2 rounded-full transition-all duration-300 z-[5] ${activeIndex === i
                        ? 'bg-accent-new scale-150'
                        : activeIndex > i
                            ? 'bg-gray-300 scale-100'
                            : 'bg-gray-200 scale-75'
                        }`}
                    style={{
                        margin: '10px 0',
                    }}
                    title={id.replace('waypoint-', '').replace(/-/g, ' ')}
                />
            ))}
        </div>
    );
}
