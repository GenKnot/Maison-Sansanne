"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalLoftContent() {
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

        return () => { ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };
    }, []);

    const addToRefs = (el) => { if (el && !sectionsRef.current.includes(el)) { sectionsRef.current.push(el); } };

    return (
        <div className="digital-loft-project">
            <section className="project-hero" ref={addToRefs}>
                <div className="project-hero__image">
                    <Image src="/images/projects/digital-loft/g5.jpg" alt="Digital Loft" fill style={{ objectFit: 'cover' }} priority />
                    <div className="project-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="project-hero__content">
                        <h1 className="project-hero__title">
                            <span className="title-main">{t('digitalLoft.title')}</span>
                            <span className="title-decoration"></span>
                        </h1>
                        <p className="project-hero__subtitle">{t('digitalLoft.subtitle')}</p>
                        <p className="project-hero__tagline">{t('digitalLoft.tagline')}</p>
                    </div>
                </div>
            </section>

            <section className="project-section project-intro" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="project-intro__content">
                                <p className="project-intro__text">
                                    {t('digitalLoft.intro')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-space" ref={addToRefs}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-lg-1 order-2">
                            <div className="project-text">
                                <h3 className="project-text__subtitle">{t('digitalLoft.spaceTitle')}</h3>
                                <p className="project-text__desc">
                                    {t('digitalLoft.spaceDesc')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-2 order-1">
                            <div className="project-image project-image--portrait">
                                <Image src="/images/projects/digital-loft/g6.jpg" alt="Digital Loft Space" width={1080} height={1350} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-diagram" ref={addToRefs}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="project-section__title">{t('digitalLoft.diagramTitle')}</h3>
                        <p className="project-section__desc">
                            {t('digitalLoft.diagramDesc')}
                        </p>
                    </div>
                    <div className="row gutter-x-40">
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/digital-loft/g1.jpg" alt="Floor Plan" width={1080} height={1350} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('digitalLoft.caption1')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/digital-loft/g2.jpg" alt="Section" width={1080} height={1350} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('digitalLoft.caption2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-x-40 mt-4">
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/digital-loft/g3.jpg" alt="Detail Plan" width={1080} height={1350} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('digitalLoft.caption3')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/digital-loft/g4.jpg" alt="Elevation" width={1080} height={1350} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('digitalLoft.caption4')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-ending" ref={addToRefs}>
                <div className="container">
                    <div className="project-ending__content">
                        <h2 className="project-ending__quote">
                            {t('digitalLoft.closing')}
                        </h2>
                        <p className="project-ending__quote-en">
                            {t('digitalLoft.closingEn')}
                        </p>
                        <div className="project-ending__divider"></div>
                        <p className="project-ending__keywords">
                            {t('digitalLoft.keywords')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
