import { useState, useEffect, useRef } from 'react';

export default function LazySection({ children, className = '', rootMargin = '200px' }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref} className={className}>
            {isVisible ? children : (
                <div className="min-h-[200px]" />
            )}
        </div>
    );
}
