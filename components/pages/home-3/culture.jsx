"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Culture() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const cultures = [
        {
            image: "/images/culture/oriental-order.jpg",
            title: "东方的秩序",
            subtitle: "Oriental Order",
            description: "在东方文化的滋养下，我学会了克制、含蓄、让空间留有呼吸"
        },
        {
            image: "/images/culture/french-elegance.jpg",
            title: "法式的优雅",
            subtitle: "French Elegance",
            description: "在法式美学的影响中，我追求比例的优雅、细节的温度、光影的诗意"
        },
        {
            image: "/images/culture/north-american-modern.jpg",
            title: "北美的现代",
            subtitle: "North American Modern",
            description: "在北美的当代精神中，我吸收了自由、逻辑与结构的清晰感"
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
                            <span className="subtitle">设计理念</span>
                            <h2 className="section-heading__title heading-md">
                                三种文化的交融
                            </h2>
                            <p className="mt-24">
                                这三种文化在 33STUDIO 的作品中彼此渗透，
                                共同构成了独特的设计语言
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
                                            alt={culture.title}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="culture-card__content">
                                        <h3 className="culture-card__title">
                                            {culture.title}
                                        </h3>
                                        <span className="culture-card__subtitle">
                                            {culture.subtitle}
                                        </span>
                                        <p className="culture-card__description">
                                            {culture.description}
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
