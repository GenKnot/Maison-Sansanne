"use client";
import { useEffect, useRef } from "react";
import Header3 from "@/components/header/header-3";
import Footer from "@/components/footer/footer";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const { t } = useLanguage();
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current.forEach((section, index) => {
            if (!section) return;
            
            gsap.fromTo(
                section,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <>
            <Header3 />
            <div className="new-home">
                <section className="hero-video">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="hero-video__player"
                    >
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                </section>

                <section className="manifesto-section" ref={addToRefs}>
                    <div className="container">
                        <div className="manifesto-content">
                            <h2 className="manifesto-title">{t('home.manifestoTitle')}</h2>
                            <div className="manifesto-text">
                                <p style={{ whiteSpace: 'pre-line' }}>{t('home.manifestoP1')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-section" ref={addToRefs}>
                    <div className="container">
                        <div className="about-content">
                            <h2 className="about-title">{t('home.aboutTitle')}</h2>
                            <div className="about-text">
                                <p style={{ whiteSpace: 'pre-line' }}>{t('home.aboutP1')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="closing-section" ref={addToRefs}>
                    <div className="container">
                        <div className="closing-content">
                            <p className="closing-text" style={{ whiteSpace: 'pre-line' }}>{t('home.closingP1')}</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
