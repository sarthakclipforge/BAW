import { useRef, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';

// ─── Meaningful Waypoints ───────────────────────────────
const WAYPOINTS = [
    '#waypoint-hero',
    '#waypoint-stats',
    '#waypoint-services',
    '#waypoint-projects',
    '#waypoint-process',
    '#waypoint-testimonials',
    '#waypoint-pricing',
    '#waypoint-faq',
    '#waypoint-blog',
    '#waypoint-footer',
];

const DOCK_PAUSE_MS = 2000;

export default function ScrollTraveler() {
    const travelerRef = useRef(null);
    const stateRef = useRef({
        nextDockIdx: 0,
        lastDockedIdx: -1,
        isLocked: false,
        prevScrollY: 0,
        points: [],
        initialized: false,
    });

    // Get the Lenis instance from context
    const lenisRef = useRef(null);
    useLenis((lenis) => {
        lenisRef.current = lenis;
    });

    useEffect(() => {
        const initTimer = setTimeout(() => {
            if (!travelerRef.current) return;

            // ─── Gather elements ───
            const elements = [];
            for (const sel of WAYPOINTS) {
                const el = document.querySelector(sel);
                if (el) elements.push(el);
            }
            if (elements.length < 2) return;

            // ─── Measure ───
            const sy = window.scrollY || 0;
            const vh = window.innerHeight;

            const points = elements.map(el => {
                const r = el.getBoundingClientRect();
                const cs = window.getComputedStyle(el);
                return {
                    el,
                    centerX: r.left + r.width / 2,
                    centerY: r.top + sy + r.height / 2,
                    width: r.width,
                    height: r.height,
                    bg: cs.backgroundColor,
                    radius: cs.borderRadius,
                    triggerScroll: Math.max(0, (r.top + sy + r.height / 2) - vh / 2),
                };
            });

            stateRef.current.points = points;

            // ─── Hide originals ───
            points.forEach(p => gsap.set(p.el, { visibility: 'hidden' }));

            // ─── Initial dot ───
            const first = points[0];
            gsap.set(travelerRef.current, {
                position: 'fixed',
                left: first.centerX - first.width / 2,
                top: first.centerY - sy - first.height / 2,
                width: first.width,
                height: first.height,
                backgroundColor: first.bg,
                borderRadius: first.radius,
                zIndex: 9999,
                pointerEvents: 'none',
                opacity: 1,
            });

            // ─── Helper: clamp Y to viewport ───
            const clampY = (y) => Math.max(vh * 0.1, Math.min(vh * 0.9, y));

            // ─── Helper: get viewport-relative Y ───
            const getVpY = (pt) => {
                const scrollY = window.scrollY || 0;
                return clampY(pt.centerY - scrollY);
            };

            // ─── DOCK ───
            const dockAt = (idx, callback) => {
                const s = stateRef.current;
                const pt = s.points[idx];
                if (!pt || s.isLocked) { callback?.(); return; }

                s.isLocked = true;

                const lenis = lenisRef.current;

                // 1. INSTANTLY snap scroll to anchor position (no smooth animation!)
                //    This prevents the dot from visually overshooting during a smooth scroll.
                if (lenis) {
                    lenis.scrollTo(pt.triggerScroll, { immediate: true });
                } else {
                    window.scrollTo({ top: pt.triggerScroll, behavior: 'instant' });
                }

                // 2. IMMEDIATELY position the dot on the anchor
                const vpY = clampY(pt.centerY - pt.triggerScroll);
                gsap.set(travelerRef.current, {
                    left: pt.centerX - pt.width / 2,
                    top: vpY - pt.height / 2,
                    width: pt.width,
                    height: pt.height,
                    backgroundColor: pt.bg,
                    borderRadius: pt.radius,
                    overwrite: true,
                });

                // 3. Now freeze Lenis
                if (lenis) lenis.stop();

                // 4. Proceed to pulse + pause
                finishDock(pt, callback);
            };

            const finishDock = (pt, callback) => {
                const lenis = lenisRef.current;

                // Gentle pulse animation during dock
                gsap.fromTo(travelerRef.current,
                    { scale: 1 },
                    {
                        scale: 2,
                        duration: 0.3,
                        yoyo: true,
                        repeat: 2,
                        ease: 'sine.inOut',
                        delay: 0.1,
                    }
                );

                // After pause, smoothly resume
                setTimeout(() => {
                    if (lenis) lenis.start();
                    stateRef.current.isLocked = false;
                    callback?.();
                }, DOCK_PAUSE_MS);
            };

            // ─── Tracking between anchors ───
            const updateDotPosition = (scrollY) => {
                const s = stateRef.current;
                if (s.isLocked || s.points.length === 0) return;

                const pts = s.points;

                // Find which two anchors we're between
                let prevIdx = 0;
                for (let i = 0; i < pts.length; i++) {
                    if (scrollY >= pts[i].triggerScroll) prevIdx = i;
                }
                const nxtIdx = Math.min(prevIdx + 1, pts.length - 1);
                const prev = pts[prevIdx];
                const next = pts[nxtIdx];

                if (prevIdx === nxtIdx) {
                    const vpY = clampY(prev.centerY - scrollY);
                    gsap.set(travelerRef.current, {
                        left: prev.centerX - prev.width / 2,
                        top: vpY - prev.height / 2,
                    });
                    return;
                }

                // Progress
                const range = next.triggerScroll - prev.triggerScroll;
                const progress = range > 0
                    ? Math.max(0, Math.min(1, (scrollY - prev.triggerScroll) / range))
                    : 0;

                // Interpolate position
                const x = prev.centerX + (next.centerX - prev.centerX) * progress;
                const w = prev.width + (next.width - prev.width) * progress;
                const h = prev.height + (next.height - prev.height) * progress;

                const prevVpY = clampY(prev.centerY - scrollY);
                const nextVpY = clampY(next.centerY - scrollY);
                const y = prevVpY + (nextVpY - prevVpY) * progress;
                const clampedY = clampY(y);

                gsap.set(travelerRef.current, {
                    left: x - w / 2,
                    top: clampedY - h / 2,
                    width: w,
                    height: h,
                });
            };

            // ─── Scroll handler ───
            const onScroll = () => {
                const s = stateRef.current;
                if (s.isLocked) return;

                const currentScrollY = window.scrollY;
                const scrollDirection = currentScrollY >= s.prevScrollY ? 1 : -1;

                if (scrollDirection === 1) {
                    if (s.nextDockIdx < s.points.length) {
                        const target = s.points[s.nextDockIdx];
                        if (currentScrollY >= target.triggerScroll - 100) {
                            const idx = s.nextDockIdx;
                            s.nextDockIdx++;
                            s.lastDockedIdx = idx;
                            dockAt(idx, () => { });
                            return;
                        }
                    }
                } else {
                    if (s.lastDockedIdx > 0) {
                        const prevAnchor = s.points[s.lastDockedIdx - 1];
                        if (currentScrollY <= prevAnchor.triggerScroll + 100) {
                            const idx = s.lastDockedIdx - 1;
                            s.lastDockedIdx = idx;
                            s.nextDockIdx = idx + 1;
                            dockAt(idx, () => { });
                            return;
                        }
                    }
                }

                updateDotPosition(currentScrollY);
                s.prevScrollY = currentScrollY;
            };

            // ─── Listen ───
            let ticking = false;
            const scrollListener = () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        onScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            };

            window.addEventListener('scroll', scrollListener, { passive: true });
            stateRef.current.initialized = true;

            // ─── Initial dock ───
            setTimeout(() => {
                if (stateRef.current.nextDockIdx === 0) {
                    dockAt(0, () => {
                        stateRef.current.nextDockIdx = 1;
                        stateRef.current.lastDockedIdx = 0;
                    });
                }
            }, 500);

            return () => {
                window.removeEventListener('scroll', scrollListener);
                stateRef.current.isLocked = false;
                const lenis = lenisRef.current;
                if (lenis) lenis.start(); // Ensure Lenis is running on cleanup
                points.forEach(p => gsap.set(p.el, { visibility: 'visible' }));
            };
        }, 800);

        return () => clearTimeout(initTimer);
    }, []);

    return (
        <div
            ref={travelerRef}
            className="pointer-events-none rounded-full"
            style={{ position: 'fixed', opacity: 0 }}
        />
    );
}
