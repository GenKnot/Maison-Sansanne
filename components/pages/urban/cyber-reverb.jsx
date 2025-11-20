"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CyberReverbContent() {
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
        <div className="cyber-reverb-project">
            <section className="project-hero" ref={addToRefs}>
                <div className="project-hero__image">
                    <Image src="/images/projects/cyber-reverb/yd1.jpg" alt="Cyber Reverb" fill style={{ objectFit: 'cover' }} priority />
                    <div className="project-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="project-hero__content">
                        <h1 className="project-hero__title">
                            <span className="title-main">{t('cyberReverb.title')}</span>
                            <span className="title-decoration"></span>
                        </h1>
                        <p className="project-hero__subtitle">{t('cyberReverb.subtitle')}</p>
                        <p className="project-hero__tagline">{t('cyberReverb.tagline')}</p>
                    </div>
                </div>
            </section>

            <section className="project-section project-intro" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="project-intro__content">
                                <p className="project-intro__text">
                                    {t('cyberReverb.intro')}
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
                                <h3 className="project-text__subtitle">{t('cyberReverb.conceptTitle')}</h3>
                                <p className="project-text__desc">
                                    {t('cyberReverb.conceptDesc')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="project-image">
                                <Image src="/images/projects/cyber-reverb/yd2.jpg" alt="VR Experience" width={1200} height={800} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-bar" ref={addToRefs}>
                <div className="container">
                    <div className="row gutter-x-40">
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image src="/images/projects/cyber-reverb/yd3.jpg" alt="Robot Bar" width={1200} height={800} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image src="/images/projects/cyber-reverb/yd4.jpg" alt="Stage Area" width={1200} height={800} />
                            </div>
                        </div>
                    </div>
                    <div className="project-text text-center mt-4">
                        <p className="project-text__desc">
                            {t('cyberReverb.barDesc')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="project-section project-stage" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-image">
                                <Image src="/images/projects/cyber-reverb/yd5.jpg" alt="Main Stage" width={1600} height={1000} />
                            </div>
                            <div className="project-text text-center mt-4">
                                <h3 className="project-text__subtitle">{t('cyberReverb.stageTitle')}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-diagram" ref={addToRefs}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="project-section__title">{t('cyberReverb.diagramTitle')}</h3>
                        <p className="project-section__desc">
                            {t('cyberReverb.diagramDesc')}
                        </p>
                    </div>
                    <div className="row gutter-x-40">
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/cyber-reverb/yd6.jpg" alt="Floor Plan" width={1200} height={800} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('cyberReverb.caption1')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/cyber-reverb/yd7.jpg" alt="Section" width={1200} height={800} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('cyberReverb.caption2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-x-40 mt-4 justify-content-center">
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/cyber-reverb/yd8.jpg" alt="Perspective" width={1200} height={800} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('cyberReverb.caption3')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/cyber-reverb/yd9.jpg" alt="Concept" width={1200} height={800} />
                            </div>
                            <div className="project-image-caption">
                                <p>{t('cyberReverb.caption4')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-ending" ref={addToRefs}>
                <div className="container">
                    <div className="project-ending__content">
                        <h2 className="project-ending__quote">
                            {t('cyberReverb.closing')}
                        </h2>
                        <p className="project-ending__quote-en">
                            {t('cyberReverb.closingEn')}
                        </p>
                        <div className="project-ending__divider"></div>
                        <p className="project-ending__keywords">
                            {t('cyberReverb.keywords')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
