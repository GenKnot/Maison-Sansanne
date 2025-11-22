"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlowingLight() {
    const { locale } = useLanguage();
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const title = titleRef.current;
        const subtitle = subtitleRef.current;

        if (title && subtitle) {
            gsap.set([title, subtitle], { opacity: 0, y: 30 });
            const tl = gsap.timeline({ delay: 0.3 });
            tl.to(title, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
              .to(subtitle, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6");
        }

        sectionsRef.current.forEach((section) => {
            if (section) {
                gsap.fromTo(section,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="flowing-light">
            <section className="flowing-light__hero" ref={heroRef}>
                <div className="flowing-light__hero-image">
                    <Image
                        fill
                        src="/images/projects/flowing-light/myst-Z风格1.jpg"
                        alt="Flowing Light"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="flowing-light__hero-content">
                    <div className="flowing-light__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`flowing-light__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        Flowing Light
                    </h1>
                    <p ref={subtitleRef} className="flowing-light__subtitle">
                        {locale === 'zh' ? '光在时间中流动，让空间学会了呼吸' :
                         locale === 'fr' ? 'La lumière coule dans le temps, l\'espace apprend à respirer' :
                         'Light flows through time, space learns to breathe'}
                    </p>
                </div>
            </section>

            <section className="flowing-light__narrative" ref={el => sectionsRef.current[0] = el}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="flowing-light__text">
                                <p>
                                    {locale === 'zh' ?
                                    'Flowing Light 是 33 Studio 对"光与生活关系"的一次温柔诠释。这座位于蒙特利尔的公寓项目，以自然光为叙事主线，让空间在时间的流转中变得有生命。' :
                                    locale === 'fr' ?
                                    'Flowing Light est une interprétation douce de 33 Studio sur "la relation entre lumière et vie". Ce projet d\'appartement à Montréal utilise la lumière naturelle comme fil narratif, donnant vie à l\'espace dans le flux du temps.' :
                                    'Flowing Light is 33 Studio\'s gentle interpretation of "the relationship between light and life". This Montreal apartment project uses natural light as its narrative thread, bringing space to life through the passage of time.'}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="flowing-light__image-container">
                                <Image
                                    fill
                                    src="/images/projects/flowing-light/myst-Z风格4.jpg"
                                    alt="Living Space"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flowing-light__gallery">
                <div className="flowing-light__row" ref={el => sectionsRef.current[1] = el}>
                    <div className="flowing-light__image-large">
                        <Image
                            fill
                            src="/images/projects/flowing-light/myst-Z风格5.jpg"
                            alt="Detail"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="flowing-light__image-large">
                        <Image
                            fill
                            src="/images/projects/flowing-light/myst-Z风格8.jpg"
                            alt="Texture"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <div className="flowing-light__full" ref={el => sectionsRef.current[2] = el}>
                    <Image
                        fill
                        src="/images/projects/flowing-light/myst-Z风格3.jpg"
                        alt="Bedroom"
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="flowing-light__row" ref={el => sectionsRef.current[3] = el}>
                    <div className="flowing-light__image-large">
                        <Image
                            fill
                            src="/images/projects/flowing-light/myst-Z风格7.jpg"
                            alt="Kitchen"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="flowing-light__image-large">
                        <Image
                            fill
                            src="/images/projects/flowing-light/myst-Z风格9.jpg"
                            alt="Dining"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            <section className="flowing-light__closing" ref={el => sectionsRef.current[4] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="flowing-light__closing-text">
                                <p className="flowing-light__quote">
                                    {locale === 'zh' ?
                                    '光不只是照亮，它让时间流动，让生活变得有方向。33 Studio，以光为笔，描绘宁静的节奏。' :
                                    locale === 'fr' ?
                                    'La lumière ne fait pas qu\'éclairer, elle fait couler le temps, donne une direction à la vie. 33 Studio, avec la lumière comme pinceau, dessine le rythme de la tranquillité.' :
                                    'Light doesn\'t just illuminate, it makes time flow, gives life direction. 33 Studio, with light as brush, paints the rhythm of tranquility.'}
                                </p>
                                <p className="flowing-light__signature">
                                    — 33 Studio
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
