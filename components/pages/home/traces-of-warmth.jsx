"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TracesOfWarmth() {
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
        <div className="traces-of-warmth">
            <section className="traces-of-warmth__hero" ref={heroRef}>
                <div className="traces-of-warmth__hero-image">
                    <Image
                        fill
                        src="/images/projects/traces-of-warmth/aldred project软装2.jpg"
                        alt="Traces of Warmth"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="traces-of-warmth__hero-content">
                    <div className="traces-of-warmth__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`traces-of-warmth__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        Traces of Warmth
                    </h1>
                    <p ref={subtitleRef} className="traces-of-warmth__subtitle">
                        {locale === 'zh' ? '温度，不在颜色里，而在材质的呼吸之间' :
                         locale === 'fr' ? 'La chaleur n\'est pas dans la couleur, mais dans la respiration des matériaux' :
                         'Warmth is not in color, but in the breathing of materials'}
                    </p>
                </div>
            </section>

            <section className="traces-of-warmth__narrative" ref={el => sectionsRef.current[0] = el}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="traces-of-warmth__text">
                                <p>
                                    {locale === 'zh' ?
                                    'Traces of Warmth 是一个关于"感知"的项目。33 Studio 在这个住宅空间中，以最轻的笔触描绘家的质地——它没有刻意的焦点，却处处有温度的痕迹。浅灰与米白的交织，像被阳光轻触的肌理；木饰面、织物、柔焦的墙面，共同构筑出一个"看不见的温度场"。' :
                                    locale === 'fr' ?
                                    'Traces of Warmth est un projet sur la "perception". Dans cet espace résidentiel, 33 Studio dépeint la texture de la maison avec les touches les plus légères—sans point focal délibéré, mais avec des traces de chaleur partout. L\'entrelacement du gris pâle et du blanc cassé, comme une texture effleurée par le soleil ; les revêtements en bois, les tissus, les murs en douceur, construisent ensemble un "champ de température invisible".' :
                                    'Traces of Warmth is a project about "perception". In this residential space, 33 Studio depicts the texture of home with the lightest touches—no deliberate focal point, yet traces of warmth everywhere. The interweaving of pale gray and off-white, like texture touched by sunlight; wood paneling, fabrics, soft-focus walls, together construct an "invisible temperature field".'}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="traces-of-warmth__image-container">
                                <Image
                                    fill
                                    src="/images/projects/traces-of-warmth/aldred project软装6.jpg"
                                    alt="Detail"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="traces-of-warmth__gallery">
                <div className="traces-of-warmth__row" ref={el => sectionsRef.current[1] = el}>
                    <div className="traces-of-warmth__image-half">
                        <Image
                            fill
                            src="/images/projects/traces-of-warmth/aldred project软装5.jpg"
                            alt="Living Space"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="traces-of-warmth__image-half">
                        <Image
                            fill
                            src="/images/projects/traces-of-warmth/aldred project软装8.jpg"
                            alt="Texture"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <div className="traces-of-warmth__full" ref={el => sectionsRef.current[2] = el}>
                    <Image
                        fill
                        src="/images/projects/traces-of-warmth/aldred project软装1.jpg"
                        alt="Interior"
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="traces-of-warmth__mosaic" ref={el => sectionsRef.current[3] = el}>
                    <div className="traces-of-warmth__image-small">
                        <Image
                            fill
                            src="/images/projects/traces-of-warmth/aldred project软装3.jpg"
                            alt="Detail 1"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="traces-of-warmth__image-small">
                        <Image
                            fill
                            src="/images/projects/traces-of-warmth/aldred project软装7.jpg"
                            alt="Detail 2"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="traces-of-warmth__image-small">
                        <Image
                            fill
                            src="/images/projects/traces-of-warmth/aldred project软装9.jpg"
                            alt="Detail 3"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            <section className="traces-of-warmth__closing" ref={el => sectionsRef.current[4] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="traces-of-warmth__closing-text">
                                <p className="traces-of-warmth__quote">
                                    {locale === 'zh' ?
                                    '温度，不是被制造的，而是生活留下的痕迹。33 Studio，让每一处触感，都成为时间的注脚。' :
                                    locale === 'fr' ?
                                    'La chaleur n\'est pas fabriquée, mais les traces laissées par la vie. 33 Studio fait de chaque toucher une note de bas de page du temps.' :
                                    'Warmth is not manufactured, but traces left by life. 33 Studio makes every touch a footnote of time.'}
                                </p>
                                <p className="traces-of-warmth__signature">
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
