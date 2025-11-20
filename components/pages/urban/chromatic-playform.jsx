"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ChromaticPlayformContent() {
    const { t } = useLanguage();
    const sectionsRef = useRef([]);
    
    useEffect(() => {
        const heroTitle = document.querySelector('.project-hero__title');
        const heroSubtitle = document.querySelector('.project-hero__subtitle');
        const heroText = document.querySelector('.project-hero__text');
        
        if (heroTitle && heroSubtitle && heroText) {
            gsap.fromTo(
                heroTitle,
                { opacity: 0, x: -80 },
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 1.2, 
                    ease: "power4.out",
                    delay: 0.3
                }
            );
            
            gsap.fromTo(
                heroSubtitle,
                { opacity: 0, x: -60 },
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 1, 
                    ease: "power3.out",
                    delay: 0.5
                }
            );
            
            gsap.fromTo(
                heroText,
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: "power2.out",
                    delay: 0.7
                }
            );
        }

        sectionsRef.current.forEach((section) => {
            if (!section) return;
            
            gsap.fromTo(
                section,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "top 40%",
                        toggleActions: "play none none none",
                    },
                }
            );
            
            const images = section.querySelectorAll('.project-image img');
            images.forEach((img) => {
                gsap.to(img, {
                    y: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            });
            
            const textElements = section.querySelectorAll('.project-text__subtitle, .project-text__desc, .project-section__title, .project-section__desc');
            if (textElements.length > 0) {
                gsap.fromTo(
                    textElements,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 75%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
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

    const renderText = (text) => {
        return text.split('\n').map((line, i) => (
            <span key={i}>
                {line}
                {i < text.split('\n').length - 1 && <br />}
            </span>
        ));
    };

    return (
        <div className="chromatic-playform-project">
            <section className="project-hero">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 project-hero__image-col">
                            <div className="project-hero__image">
                                <Image
                                    src="/images/projects/chromatic-playform/ET1.jpg"
                                    alt="Chromatic Playform Design"
                                    width={1080}
                                    height={2095}
                                    style={{ width: '100%', height: 'auto' }}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 project-hero__content-col">
                            <div className="project-hero__content">
                                <h1 className="project-hero__title">
                                    <span className="title-main">{t('chromaticPlayform.title')}</span>
                                    <span className="title-decoration"></span>
                                </h1>
                                <p className="project-hero__subtitle">
                                    {t('chromaticPlayform.subtitle')}
                                </p>
                                <div className="project-hero__text">
                                    <p>{renderText(t('chromaticPlayform.narrative'))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-philosophy" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-text text-center">
                                <h3 className="project-text__subtitle">
                                    {t('chromaticPlayform.concept')}
                                </h3>
                                <p className="project-text__desc">
                                    {renderText(t('chromaticPlayform.philosophy'))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-visual" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-image">
                                <Image
                                    src="/images/projects/chromatic-playform/ET2.jpg"
                                    alt="Chromatic Playform Concept"
                                    width={1920}
                                    height={1080}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-experience" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-text text-center">
                                <h3 className="project-text__subtitle">
                                    {t('chromaticPlayform.experience')}
                                </h3>
                                <p className="project-text__desc">
                                    {t('chromaticPlayform.experienceDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-ending" ref={addToRefs}>
                <div className="container">
                    <div className="project-ending__content">
                        <h2 className="project-ending__quote">
                            {t('chromaticPlayform.closing')}
                        </h2>
                        <p className="project-ending__keywords">
                            {t('chromaticPlayform.keywords')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
