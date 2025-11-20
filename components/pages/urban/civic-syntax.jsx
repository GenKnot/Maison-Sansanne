"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CivicSyntaxContent() {
    const { t } = useLanguage();
    const sectionsRef = useRef([]);
    
    useEffect(() => {
        const heroTitle = document.querySelector('.project-hero__title');
        const heroSubtitle = document.querySelector('.project-hero__subtitle');
        const heroProject = document.querySelector('.project-hero__project');
        
        if (heroTitle && heroSubtitle && heroProject) {
            gsap.fromTo(
                heroTitle,
                { opacity: 0, y: 100, scale: 0.9 },
                { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    duration: 1.2, 
                    ease: "power4.out",
                    delay: 0.3
                }
            );
            
            gsap.fromTo(
                heroSubtitle,
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1, 
                    ease: "power3.out",
                    delay: 0.6
                }
            );
            
            gsap.fromTo(
                heroProject,
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: "power2.out",
                    delay: 0.9
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
                    y: -50,
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

        const scrollRevealSections = document.querySelectorAll('.scroll-reveal');
        scrollRevealSections.forEach((section) => {
            const overlay = section.querySelector('.scroll-reveal-overlay');
            const texts = section.querySelectorAll('.scroll-reveal-text');
            
            if (overlay && texts.length > 0) {
                gsap.set(overlay, { opacity: 0 });
                gsap.set(texts, { opacity: 0, y: 30 });
                
                ScrollTrigger.create({
                    trigger: section,
                    start: "top 80%",
                    end: "center center",
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        gsap.to(overlay, { 
                            opacity: progress * 0.9,
                            duration: 0.1 
                        });
                        gsap.to(texts, { 
                            opacity: Math.max(0, (progress - 0.2) * 1.3),
                            y: 30 - (progress * 30),
                            duration: 0.1 
                        });
                    }
                });
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
        <div className="civic-syntax-project">
            <section className="project-hero" ref={addToRefs}>
                <div className="project-hero__image">
                    <Image
                        src="/images/projects/civic-syntax/V1.jpg"
                        alt="Civic Syntax - Place Victoria"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className="project-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="project-hero__content">
                        <h1 className="project-hero__title">
                            <span className="title-main">{t('civicSyntax.title')}</span>
                            <span className="title-decoration"></span>
                        </h1>
                        <p className="project-hero__subtitle">
                            {t('civicSyntax.subtitle')}
                        </p>
                        <p className="project-hero__project">
                            {t('civicSyntax.project')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="project-section project-concept" ref={addToRefs}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image
                                    src="/images/projects/civic-syntax/V2.jpg"
                                    alt="Civic Syntax Concept"
                                    width={800}
                                    height={600}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-text">
                                <h3 className="project-text__subtitle">
                                    {t('civicSyntax.concept')}
                                </h3>
                                <p className="project-text__desc">
                                    {renderText(t('civicSyntax.narrative'))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-material" ref={addToRefs}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="project-section__title">
                            {t('civicSyntax.material')}
                        </h3>
                        <p className="project-section__desc">
                            {t('civicSyntax.materialDesc')}
                        </p>
                    </div>
                    <div className="row gutter-x-30">
                        <div className="col-md-4">
                            <div className="project-image">
                                <Image
                                    src="/images/projects/civic-syntax/V3.jpg"
                                    alt="Wood Material"
                                    width={600}
                                    height={800}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-image">
                                <Image
                                    src="/images/projects/civic-syntax/V4.jpg"
                                    alt="Concrete Material"
                                    width={600}
                                    height={800}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-image">
                                <Image
                                    src="/images/projects/civic-syntax/V5.jpg"
                                    alt="Metal Details"
                                    width={600}
                                    height={800}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-rhythm" ref={addToRefs}>
                <div className="project-fullwidth-image scroll-reveal">
                    <Image
                        src="/images/projects/civic-syntax/V6.jpg"
                        alt="Spatial Rhythm"
                        width={1920}
                        height={1080}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="project-fullwidth-image__overlay scroll-reveal-overlay">
                        <div className="container">
                            <h3 className="project-overlay__title scroll-reveal-text">
                                {t('civicSyntax.rhythm')}
                            </h3>
                            <p className="project-overlay__desc scroll-reveal-text">
                                {t('civicSyntax.rhythmDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-ambient" ref={addToRefs}>
                <div className="project-fullwidth-image">
                    <Image
                        src="/images/projects/civic-syntax/V7.jpg"
                        alt="Ambient Space"
                        width={1920}
                        height={1080}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="container">
                    <div className="project-text text-center mt-5">
                        <h3 className="project-text__subtitle">
                            {t('civicSyntax.ambient')}
                        </h3>
                        <p className="project-text__desc">
                            {t('civicSyntax.ambientDesc')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="project-section project-detail" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="project-image">
                                <Image
                                    src="/images/projects/civic-syntax/V8.jpg"
                                    alt="Detail"
                                    width={1200}
                                    height={800}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="project-text text-center mt-4">
                                <h3 className="project-text__subtitle">
                                    {t('civicSyntax.detail')}
                                </h3>
                                <p className="project-text__desc">
                                    {t('civicSyntax.detailDesc')}
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
                            {t('civicSyntax.closing')}
                        </h2>
                        <p className="project-ending__keywords">
                            {t('civicSyntax.keywords')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
