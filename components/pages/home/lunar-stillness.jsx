"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LunarStillness() {
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
        <div className="lunar-stillness">
            <section className="lunar-stillness__hero" ref={heroRef}>
                <div className="lunar-stillness__hero-image">
                    <Image
                        fill
                        src="/images/projects/lunar-stillness/Moonbeam色调设计2.jpg"
                        alt="Lunar Stillness"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="lunar-stillness__hero-content">
                    <div className="lunar-stillness__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`lunar-stillness__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        Lunar Stillness
                    </h1>
                    <p ref={subtitleRef} className="lunar-stillness__subtitle">
                        {locale === 'zh' ? '月光，不喧哗，却让空间拥有了思想的轮廓' :
                         locale === 'fr' ? 'Le clair de lune, sans bruit, donne à l\'espace le contour de la pensée' :
                         'Moonlight, without clamor, gives space the contour of thought'}
                    </p>
                </div>
            </section>

            <section className="lunar-stillness__narrative" ref={el => sectionsRef.current[0] = el}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="lunar-stillness__text">
                                <p>
                                    {locale === 'zh' ?
                                    'Lunar Stillness 是 33 Studio 对"理性之美"的一次静默探索。这栋位于蒙特利尔的别墅，以"月光"为意象，将冷静的光线与温润的材质交织，形成一种理智与诗意并存的秩序感。' :
                                    locale === 'fr' ?
                                    'Lunar Stillness est une exploration silencieuse de 33 Studio sur "la beauté de la rationalité". Cette villa montréalaise, avec le "clair de lune" comme métaphore, entrelace lumière calme et matériaux chaleureux, formant un sens de l\'ordre où rationalité et poésie coexistent.' :
                                    'Lunar Stillness is 33 Studio\'s silent exploration of "the beauty of rationality". This Montreal villa, with "moonlight" as metaphor, interweaves calm light and warm materials, forming a sense of order where rationality and poetry coexist.'}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="lunar-stillness__image-container">
                                <Image
                                    fill
                                    src="/images/projects/lunar-stillness/Moonbeam色调设计4.jpg"
                                    alt="Interior Detail"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lunar-stillness__gallery">
                <div className="lunar-stillness__row" ref={el => sectionsRef.current[1] = el}>
                    <div className="lunar-stillness__image-half">
                        <Image
                            fill
                            src="/images/projects/lunar-stillness/Moonbeam色调设计5.jpg"
                            alt="Living Space"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="lunar-stillness__image-half">
                        <Image
                            fill
                            src="/images/projects/lunar-stillness/Moonbeam色调设计6.jpg"
                            alt="Detail"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <div className="lunar-stillness__full" ref={el => sectionsRef.current[2] = el}>
                    <Image
                        fill
                        src="/images/projects/lunar-stillness/Moonbeam色调设计3.jpg"
                        alt="Bedroom"
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </section>

            <section className="lunar-stillness__closing" ref={el => sectionsRef.current[3] = el}>
                <div className="lunar-stillness__closing-bg">
                    <Image
                        fill
                        src="/images/projects/lunar-stillness/Moonbeam色调设计1.jpg"
                        alt="Background"
                        sizes="100vw"
                        style={{ objectFit: 'cover', opacity: 0.2, filter: 'blur(8px)' }}
                    />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="lunar-stillness__closing-text">
                                <p className="lunar-stillness__quote">
                                    {locale === 'zh' ?
                                    '月光落下，思想在空间中回响。33 Studio，以冷静与温度，雕刻出理性的柔光。' :
                                    locale === 'fr' ?
                                    'Le clair de lune tombe, la pensée résonne dans l\'espace. 33 Studio, avec calme et chaleur, sculpte la douce lumière de la rationalité.' :
                                    'Moonlight falls, thought resonates in space. 33 Studio, with calm and warmth, sculpts the soft light of rationality.'}
                                </p>
                                <p className="lunar-stillness__signature">
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
