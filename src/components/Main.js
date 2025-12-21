import Hero from './widgets/Hero/Hero';
import About from './widgets/About/About';
import Header from './widgets/Header/Header';
import Skills from './widgets/Skills/Skills';
import Contact from './widgets/Contact/Contact';
import Projects from './widgets/Projects/Projects';
import Copyright from './widgets/Copyright/Copyright';
import Experience from './widgets/Experience/Experience';

import { useEffect, useRef } from 'react';

const Main = ({ handleNavClick, activeSection }) => {

    const interactiveRef = useRef(null);

    useEffect(() => {
        const el = interactiveRef.current;
        if (!el) return;

        const handleMove = (e) => {
            const w = window.innerWidth || document.documentElement.clientWidth;
            const h = window.innerHeight || document.documentElement.clientHeight;

            const nx = (e.clientX / w - 0.5) * 2;
            const ny = (e.clientY / h - 0.5) * 2;

            const maxTranslate = 30;
            const tx = nx * maxTranslate;
            const ty = ny * maxTranslate;

            el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', (t) => {
            if (!t.touches || t.touches.length === 0) return;
            handleMove(t.touches[0]);
        }, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, []);

    return (
        <>
            {/* Gradient Background Container - Fixed positioning */}
            <div className="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  
                          0 1 0 0 0  
                          0 0 1 0 0  
                          0 0 0 20 -10"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>

                <div className="gradient-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <div className="interactive" ref={interactiveRef}></div>
                </div>
            </div>

            {/* Main Content - Scrollable */}
            <main id="main" className="section-wrappers">
                <Header handleNavClick={handleNavClick} activeSection={activeSection} />
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Copyright />
            </main>
        </>
    );
}

export default Main;