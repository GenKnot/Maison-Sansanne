"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VerdantCourtContent() {
    const { t } = useLanguage();
    const sectionsRef = useRef([]);
    
    useEffect(() => {
        const heroTitle = document.querySelector('.project-hero__title');
        const heroSubtitle = document.querySelector('.project-hero__subtitle');
        
        if (heroTitle && heroSubtitle) {
            gsap.fromTo(heroTitle, { opacity: 0, y: 100, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out", delay: 0.3 });
            gsap.fromTo(heroSubtitle, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 });
        }

        sectionsRef.current.forEach((section) => {
            if (!section) return;
            gsap.fromTo(section, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 85%", end: "top 40%", toggleActions: "play none none none" } });
            
            const images = section.querySelectorAll('.project-image img');
            images.forEach((img) => { gsap.to(img, { y: -30, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 1 } }); });
            
            const textElements = section.querySelectorAll('.project-text__subtitle, .project-text__desc, .project-section__title, .project-section__desc');
            if (textElements.length > 0) {
                gsap.fromTo(textElements, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none none" } });
            }
        });

        const scrollRevealSections = document.querySelectorAll('.scroll-reveal');
        scrollRevealSections.forEach((section) => {
            const overlay = section.querySelector('.scroll-reveal-overlay');
            const texts = section.querySelectorAll('.scroll-reveal-text');
            if (overlay && texts.length > 0) {
                gsap.set(overlay, { opacity: 0 });
                gsap.set(texts, { opacity: 0, y: 30 });
                ScrollTrigger.create({
                    trigger: section, start: "top 80%", end: "center center", scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        gsap.to(overlay, { opacity: progress * 0.85, duration: 0.1 });
                        gsap.to(texts, { opacity: Math.max(0, (progress - 0.2) * 1.3), y: 30 - (progress * 30), duration: 0.1 });
                    }
                });
            }
        });

        return () => { ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };
    }, []);

    const addToRefs = (el) => { if (el && !sectionsRef.current.includes(el)) { sectionsRef.current.push(el); } };
    const renderText = (text) => { return text.split('\n').map((line, i) => (<span key={i}>{line}{i < text.split('\n').length - 1 && <br />}</span>)); };

    return (
        <div className="verdant-court-project">
            <section className="project-hero" ref={addToRefs}>
                <div className="project-hero__image">
                    <Image src="/images/projects/verdant-court/F1.jpg" alt="Verdant Court" fill style={{ objectFit: 'cover' }} priority />
                    <div className="project-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="project-hero__content">
                        <h1 className="project-hero__title">
                            <span className="title-main">{t('verdantCourt.title')}</span>
                            <span className="title-decoration"></span>
                        </h1>
                        <p className="project-hero__subtitle">{t('verdantCourt.subtitle')}</p>
                    </div>
                </div>
            </section>

            <section className="project-section project-intro" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-text text-center">
                                <p className="project-text__desc">{renderText(t('verdantCourt.intro'))}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-concept" ref={addToRefs}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image src="/images/projects/verdant-court/f2.jpg" alt="Verdant Court Concept" width={800} height={600} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-text">
                                <h3 className="project-text__subtitle">{t('verdantCourt.concept')}</h3>
                                <p className="project-text__desc">{t('verdantCourt.conceptDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-material" ref={addToRefs}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="project-section__title">{t('verdantCourt.material')}</h3>
                        <p className="project-section__desc">{t('verdantCourt.materialDesc')}</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-image">
                                <Image src="/images/projects/verdant-court/f3.jpg" alt="Materials" width={1200} height={800} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-rhythm" ref={addToRefs}>
                <div className="project-fullwidth-image scroll-reveal">
                    <Image src="/images/projects/verdant-court/f4.jpg" alt="Spatial Rhythm" width={1920} height={1080} />
                    <div className="project-fullwidth-image__overlay scroll-reveal-overlay">
                        <div className="container">
                            <h3 className="project-overlay__title scroll-reveal-text">{t('verdantCourt.rhythm')}</h3>
                            <p className="project-overlay__desc scroll-reveal-text">{t('verdantCourt.rhythmDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-ending" ref={addToRefs}>
                <div className="container">
                    <div className="project-ending__content">
                        <h2 className="project-ending__quote">{t('verdantCourt.closing')}</h2>
                        <p className="project-ending__keywords">{t('verdantCourt.keywords')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
