"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BloomAtelierContent() {
    const { t, locale } = useLanguage();
    const sectionsRef = useRef([]);
    
    useEffect(() => {
        const heroTitle = document.querySelector('.project-hero__title');
        const heroSubtitle = document.querySelector('.project-hero__subtitle');
        const heroTagline = document.querySelector('.project-hero__tagline');
        
        if (heroTitle && heroSubtitle && heroTagline) {
            gsap.fromTo(heroTitle, { opacity: 0, y: 100, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power4.out", delay: 0.3 });
            gsap.fromTo(heroSubtitle, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.7 });
            gsap.fromTo(heroTagline, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 1 });
        }

        sectionsRef.current.forEach((section) => {
            if (!section) return;
            gsap.fromTo(section, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 85%", end: "top 40%", toggleActions: "play none none none" } });
            
            const images = section.querySelectorAll('.project-image img');
            images.forEach((img) => {
                gsap.to(img, { y: -40, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 1.2 } });
            });
            
            const textElements = section.querySelectorAll('.project-text__subtitle, .project-text__desc, .project-section__title, .project-section__desc');
            if (textElements.length > 0) {
                gsap.fromTo(textElements, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none none" } });
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
                        gsap.to(overlay, { opacity: progress * 0.88, duration: 0.1 });
                        gsap.to(texts, { opacity: Math.max(0, (progress - 0.2) * 1.3), y: 30 - (progress * 30), duration: 0.1 });
                    }
                });
            }
        });

        return () => { ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };
    }, []);

    const addToRefs = (el) => { if (el && !sectionsRef.current.includes(el)) { sectionsRef.current.push(el); } };

    return (
        <div className="bloom-atelier-project">
            <section className="project-hero" ref={addToRefs}>
                <div className="project-hero__image">
                    <Image src="/images/projects/bloom-atelier/C5.jpg" alt="Bloom Atelier" fill style={{ objectFit: 'cover' }} priority />
                    <div className="project-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="project-hero__content">
                        <h1 className="project-hero__title">
                            <span className="title-main">{t('bloomAtelier.title')}</span>
                            <span className="title-decoration"></span>
                        </h1>
                        <p className="project-hero__subtitle">{t('bloomAtelier.subtitle')}</p>
                        <p className="project-hero__tagline">{t('bloomAtelier.tagline')}</p>
                    </div>
                </div>
            </section>

            <section className="project-section project-intro" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="project-intro__content">
                                <p className="project-intro__text">
                                    {t('bloomAtelier.intro')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-concept" ref={addToRefs}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="project-text">
                                <h3 className="project-text__subtitle">{t('bloomAtelier.conceptTitle')}</h3>
                                <p className="project-text__desc">
                                    {t('bloomAtelier.conceptDesc')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="project-image">
                                <Image src="/images/projects/bloom-atelier/C1.jpg" alt="Bloom Atelier Concept" width={900} height={675} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-atmosphere" ref={addToRefs}>
                <div className="project-fullwidth-image scroll-reveal">
                    <Image src="/images/projects/bloom-atelier/C4.jpg" alt="Atmosphere" width={1920} height={1080} />
                    <div className="project-fullwidth-image__overlay scroll-reveal-overlay">
                        <div className="container">
                            <h3 className="project-overlay__title scroll-reveal-text">{t('bloomAtelier.atmosphereTitle')}</h3>
                            <p className="project-overlay__desc scroll-reveal-text">
                                {t('bloomAtelier.atmosphereDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-material" ref={addToRefs}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="project-section__title">{t('bloomAtelier.materialTitle')}</h3>
                        <p className="project-section__desc">
                            {t('bloomAtelier.materialDesc')}
                        </p>
                    </div>
                    <div className="row gutter-x-40">
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image src="/images/projects/bloom-atelier/C2.jpg" alt="Material Detail" width={900} height={675} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('bloomAtelier.materialCaption1')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image src="/images/projects/bloom-atelier/C3.jpg" alt="Human Moment" width={900} height={675} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('bloomAtelier.materialCaption2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-detail" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-detail__content">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="project-text">
                                            <h3 className="project-text__subtitle">{t('bloomAtelier.detailTitle')}</h3>
                                            <p className="project-text__desc">
                                                {t('bloomAtelier.detailDesc')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="project-image">
                                            <Image src="/images/projects/bloom-atelier/C5.jpg" alt="Bloom Detail" width={1000} height={750} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-ending" ref={addToRefs}>
                <div className="container">
                    <div className="project-ending__content">
                        <h2 className="project-ending__quote">
                            {t('bloomAtelier.closing')}
                        </h2>
                        <p className="project-ending__quote-en">
                            {t('bloomAtelier.closingEn')}
                        </p>
                        <div className="project-ending__divider"></div>
                        <p className="project-ending__keywords">
                            {t('bloomAtelier.keywords')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
