import { useState } from 'react';

export default function LazyImage({ src, alt, className = "" }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
            {/* Placeholder / Skeleton */}
            <div
                className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
            ></div>

            {/* Actual Image */}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}
