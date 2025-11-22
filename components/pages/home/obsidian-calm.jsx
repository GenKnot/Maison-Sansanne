"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ObsidianCalm() {
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
        <div className="obsidian-calm">
            <section className="obsidian-calm__hero" ref={heroRef}>
                <div className="obsidian-calm__hero-image">
                    <Image
                        fill
                        src="/images/projects/obsidian-calm/encore-residence3.jpg"
                        alt="Obsidian Calm"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="obsidian-calm__hero-content">
                    <div className="obsidian-calm__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`obsidian-calm__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        Obsidian Calm
                    </h1>
                    <p ref={subtitleRef} className="obsidian-calm__subtitle">
                        {locale === 'zh' ? '在黑曜石般的深邃中，奢华以沉默的方式闪光' :
                         locale === 'fr' ? 'Dans la profondeur de l\'obsidienne, le luxe brille en silence' :
                         'In obsidian depth, luxury shines in silence'}
                    </p>
                </div>
            </section>

            <section className="obsidian-calm__narrative" ref={el => sectionsRef.current[0] = el}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="obsidian-calm__text">
                                <p>
                                    {locale === 'zh' ?
                                    '坐落于蒙特利尔市中心的 Obsidian Calm，是 33 Studio 对「静谧奢华」的又一次精确诠释。空间以深灰石材、黑色木饰面与金属细节为主调，形成冷静而克制的节奏。壁炉的火光成为唯一的温度源，在石与影的折射中，构建出安静而坚定的生活语境。' :
                                    locale === 'fr' ?
                                    'Situé au centre-ville de Montréal, Obsidian Calm est une autre interprétation précise de 33 Studio sur le "luxe tranquille". L\'espace, dominé par la pierre grise profonde, les revêtements en bois noir et les détails métalliques, forme un rythme calme et sobre. La lumière du foyer devient la seule source de chaleur, construisant dans la réfraction de pierre et d\'ombre un contexte de vie calme et ferme.' :
                                    'Located in downtown Montreal, Obsidian Calm is 33 Studio\'s another precise interpretation of "quiet luxury". The space, dominated by deep gray stone, black wood paneling, and metallic details, forms a calm and restrained rhythm. Firelight becomes the only source of warmth, constructing in the refraction of stone and shadow a quiet yet firm living context.'}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="obsidian-calm__images">
                                <div className="obsidian-calm__image-side">
                                    <Image
                                        fill
                                        src="/images/projects/obsidian-calm/encore-residence4.jpg"
                                        alt="Fireplace"
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="obsidian-calm__image-side">
                                    <Image
                                        fill
                                        src="/images/projects/obsidian-calm/encore-residence2.jpg"
                                        alt="Living Area"
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="obsidian-calm__gallery" ref={el => sectionsRef.current[1] = el}>
                <div className="obsidian-calm__triple">
                    <div className="obsidian-calm__image-third">
                        <Image
                            fill
                            src="/images/projects/obsidian-calm/encore-residence-1.jpg"
                            alt="Detail 1"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="obsidian-calm__image-third">
                        <Image
                            fill
                            src="/images/projects/obsidian-calm/encore-residence5.jpg"
                            alt="Detail 2"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="obsidian-calm__image-third">
                        <Image
                            fill
                            src="/images/projects/obsidian-calm/encore-residence6.jpg"
                            alt="Detail 3"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            <section className="obsidian-calm__closing" ref={el => sectionsRef.current[2] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="obsidian-calm__closing-text">
                                <p className="obsidian-calm__quote">
                                    {locale === 'zh' ?
                                    '深黑如石，光隐其间。每一次反射，都是平静的回声。Obsidian Calm——沉默，是最恒久的奢华。' :
                                    locale === 'fr' ?
                                    'Noir profond comme la pierre, la lumière cachée entre. Chaque réflexion est un écho de calme. Obsidian Calm—le silence est le luxe le plus durable.' :
                                    'Deep black like stone, light hidden within. Every reflection is an echo of calm. Obsidian Calm—silence is the most enduring luxury.'}
                                </p>
                                <p className="obsidian-calm__signature">
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
