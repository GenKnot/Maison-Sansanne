"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/i18n/context";

gsap.registerPlugin(ScrollTrigger);

export default function Culture() {
    const { t, locale } = useLanguage();
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const cultures = [
        {
            image: "/images/culture/oriental-order.jpg",
            titleKey: "culture.oriental.title",
            subtitleKey: "culture.oriental.subtitle",
            descriptionKey: "culture.oriental.description"
        },
        {
            image: "/images/culture/french-elegance.jpg",
            titleKey: "culture.french.title",
            subtitleKey: "culture.french.subtitle",
            descriptionKey: "culture.french.description"
        },
        {
            image: "/images/culture/north-american-modern.jpg",
            titleKey: "culture.northAmerican.title",
            subtitleKey: "culture.northAmerican.subtitle",
            descriptionKey: "culture.northAmerican.description"
        }
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current.filter(card => card !== null);

        if (!section || cards.length === 0) return;

        const mm = gsap.matchMedia();

        mm.add("(max-width: 991px)", () => {
            const container = section.querySelector('.row');
            const totalCards = cards.length;
            
            gsap.set(container, {
                display: 'flex',
                flexWrap: 'nowrap',
                width: `${totalCards * 100}vw`
            });

            cards.forEach((card, index) => {
                gsap.set(card, {
                    width: '100vw',
                    flex: '0 0 100vw'
                });
            });

            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: `+=${window.innerHeight * (totalCards - 1)}`,
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const moveDistance = (totalCards - 1) * 100;
                    
                    gsap.to(container, {
                        x: `-${progress * moveDistance}vw`,
                        duration: 0.1,
                        ease: "none"
                    });
                }
            });
        });

        mm.add("(min-width: 992px)", () => {
            const container = section.querySelector('.row');
            gsap.set(container, { clearProps: 'all' });
            cards.forEach((card) => {
                gsap.set(card, { clearProps: 'all' });
            });
        });

        return () => {
            mm.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="culture-section section-padding bg-white">
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xxl-8 col-xl-9">
                        <div className="section-heading text-center">
                            <span className="subtitle">{t('culture.subtitle')}</span>
                            <h2 
                                className={`section-heading__title heading-md ${locale !== 'zh' ? 'heading-md-en' : ''}`}
                                style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.875rem)' }}
                            >
                                {t('culture.title')}
                            </h2>
                            <p className="mt-24" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', lineHeight: '2.4' }}>
                                {t('culture.intro')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={sectionRef} className="culture-cards-wrapper">
                <div className="container">
                    <div className="row gutter-y-40">
                        {cultures.map((culture, index) => (
                            <div 
                                key={index} 
                                className="col-lg-4 col-md-6"
                                ref={(el) => (cardsRef.current[index] = el)}
                            >
                                <div className="culture-card">
                                    <div className="culture-card__image">
                                        <Image
                                            fill
                                            src={culture.image}
                                            alt={t(culture.titleKey)}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="culture-card__content">
                                        <h3 className="culture-card__title" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                                            {t(culture.titleKey)}
                                        </h3>
                                        <span className="culture-card__subtitle" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)' }}>
                                            {t(culture.subtitleKey)}
                                        </span>
                                        <p className="culture-card__description" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', lineHeight: '2.4' }}>
                                            {t(culture.descriptionKey)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
