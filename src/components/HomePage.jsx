import Hero from './Hero';
import LazySection from './LazySection';
import { lazy, Suspense } from 'react';

const Stats = lazy(() => import('./Stats'));
const Services = lazy(() => import('./Services'));
const Projects = lazy(() => import('./Projects'));
const Process = lazy(() => import('./Process'));
const Testimonials = lazy(() => import('./Testimonials'));
const Pricing = lazy(() => import('./Pricing'));
const FAQ = lazy(() => import('./FAQ'));
const Blog = lazy(() => import('./Blog'));

export default function HomePage() {
    return (
        <>
            <Hero />
            <LazySection>
                <Suspense fallback={null}>
                    <Stats />
                </Suspense>
            </LazySection>
            <LazySection>
                <Suspense fallback={null}>
                    <Services />
                </Suspense>
            </LazySection>
            <LazySection>
                <Suspense fallback={null}>
                    <Projects />
                </Suspense>
            </LazySection>
            <LazySection>
                <Suspense fallback={null}>
                    <Process />
                </Suspense>
            </LazySection>
            <LazySection>
                <Suspense fallback={null}>
                    <Testimonials />
                </Suspense>
            </LazySection>
            <LazySection>
                <Suspense fallback={null}>
                    <Pricing />
                </Suspense>
            </LazySection>
            <LazySection>
                <Suspense fallback={null}>
                    <FAQ />
                </Suspense>
            </LazySection>
            <LazySection>
                <Suspense fallback={null}>
                    <Blog />
                </Suspense>
            </LazySection>
        </>
    );
}
