"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KineticAtelierContent() {
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
        <div className="kinetic-atelier-project">
            <section className="project-hero" ref={addToRefs}>
                <div className="project-hero__image">
                    <Image src="/images/projects/kinetic-atelier/X1.jpg" alt="Kinetic Atelier" fill style={{ objectFit: 'cover' }} priority />
                    <div className="project-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="project-hero__content">
                        <h1 className="project-hero__title">
                            <span className="title-main">{t('kineticAtelier.title')}</span>
                            <span className="title-decoration"></span>
                        </h1>
                        <p className="project-hero__subtitle">{t('kineticAtelier.subtitle')}</p>
                        <p className="project-hero__tagline">{t('kineticAtelier.tagline')}</p>
                    </div>
                </div>
            </section>

            <section className="project-section project-intro" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="project-intro__content">
                                <p className="project-intro__text">
                                    {t('kineticAtelier.intro')}
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
                                <h3 className="project-text__subtitle">{t('kineticAtelier.conceptTitle')}</h3>
                                <p className="project-text__desc">
                                    {t('kineticAtelier.conceptDesc')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="project-image">
                                <Image src="/images/projects/kinetic-atelier/X3.jpg" alt="Display System" width={1200} height={800} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-display" ref={addToRefs}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="project-section__title">{t('kineticAtelier.displayTitle')}</h3>
                        <p className="project-section__desc">
                            {t('kineticAtelier.displayDesc')}
                        </p>
                    </div>
                    <div className="row gutter-x-40">
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image src="/images/projects/kinetic-atelier/X4.jpg" alt="Display Detail 1" width={1200} height={800} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image src="/images/projects/kinetic-atelier/X5.jpg" alt="Display Detail 2" width={1200} height={800} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-atmosphere" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-image">
                                <Image src="/images/projects/kinetic-atelier/X6.jpg" alt="Atmosphere" width={1600} height={1000} />
                            </div>
                            <div className="project-text text-center mt-4">
                                <p className="project-text__desc">
                                    {t('kineticAtelier.atmosphereDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-details" ref={addToRefs}>
                <div className="container">
                    <div className="row gutter-x-40">
                        <div className="col-lg-4">
                            <div className="project-image">
                                <Image src="/images/projects/kinetic-atelier/X7.jpg" alt="Material Detail" width={800} height={1000} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('kineticAtelier.caption1')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-image">
                                <Image src="/images/projects/kinetic-atelier/X8.jpg" alt="Light System" width={800} height={1000} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('kineticAtelier.caption2')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-image">
                                <Image src="/images/projects/kinetic-atelier/X9.jpg" alt="Brand Atmosphere" width={800} height={1000} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('kineticAtelier.caption3')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-ending" ref={addToRefs}>
                <div className="container">
                    <div className="project-ending__content">
                        <h2 className="project-ending__quote">
                            {t('kineticAtelier.closing')}
                        </h2>
                        <p className="project-ending__quote-en">
                            {t('kineticAtelier.closingEn')}
                        </p>
                        <div className="project-ending__divider"></div>
                        <p className="project-ending__keywords">
                            {t('kineticAtelier.keywords')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
