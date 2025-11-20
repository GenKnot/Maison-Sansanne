"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CivicCanopyContent() {
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
            gsap.fromTo(section, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none none" } });
            
            const images = section.querySelectorAll('.project-image img');
            images.forEach((img) => { gsap.to(img, { y: -30, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 1 } }); });
        });

        return () => { ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };
    }, []);

    const addToRefs = (el) => { if (el && !sectionsRef.current.includes(el)) { sectionsRef.current.push(el); } };
    const renderText = (text) => { return text.split('\n').map((line, i) => (<span key={i}>{line}{i < text.split('\n').length - 1 && <br />}</span>)); };

    return (
        <div className="civic-canopy-project">
            <section className="project-hero" ref={addToRefs}>
                <div className="project-hero__image">
                    <Image src="/images/projects/civic-canopy/S1.jpg" alt="Civic Canopy" fill style={{ objectFit: 'cover' }} priority />
                    <div className="project-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="project-hero__content">
                        <h1 className="project-hero__title">
                            <span className="title-main">{t('civicCanopy.title')}</span>
                            <span className="title-decoration"></span>
                        </h1>
                        <p className="project-hero__subtitle">{t('civicCanopy.subtitle')}</p>
                    </div>
                </div>
            </section>

            <section className="project-section project-intro" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-text text-center">
                                <p className="project-text__desc">{renderText(t('civicCanopy.intro'))}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-gallery" ref={addToRefs}>
                <div className="container">
                    <div className="row gutter-y-40">
                        {[2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <div key={num} className="col-lg-6">
                                <div className="project-image">
                                    <Image src={`/images/projects/civic-canopy/S${num}.jpg`} alt={`Civic Canopy ${num}`} width={800} height={600} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="project-section project-ending" ref={addToRefs}>
                <div className="container">
                    <div className="project-ending__content">
                        <h2 className="project-ending__quote">{t('civicCanopy.closing')}</h2>
                        <p className="project-ending__keywords">{t('civicCanopy.keywords')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
