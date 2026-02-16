import Hero from './Hero';
import Stats from './Stats';
import Services from './Services';
import Projects from './Projects';
import Process from './Process';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Blog from './Blog';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <Projects />
            <Process />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Blog />
        </>
    );
}
