"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhisperOfScent() {
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
        <div className="whisper-of-scent">
            <section className="whisper-of-scent__hero" ref={heroRef}>
                <div className="whisper-of-scent__hero-image">
                    <Image
                        fill
                        src="/images/projects/whisper-of-scent/A风格3.jpg"
                        alt="Whisper of Scent"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="whisper-of-scent__hero-content">
                    <div className="whisper-of-scent__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`whisper-of-scent__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        Whisper of Scent
                    </h1>
                    <p ref={subtitleRef} className="whisper-of-scent__subtitle">
                        {locale === 'zh' ? '香气的低语，是生活最安静的温度' :
                         locale === 'fr' ? 'Le murmure du parfum est la température la plus silencieuse de la vie' :
                         'The whisper of scent is life\'s quietest warmth'}
                    </p>
                </div>
            </section>

            <section className="whisper-of-scent__narrative" ref={el => sectionsRef.current[0] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="whisper-of-scent__text">
                                <p>
                                    {locale === 'zh' ?
                                    '这是一个属于香气、光线与材质的空间。33 Studio 在这座位于蒙特利尔的公寓中，以柔和的中性色调和克制的比例，描绘了一种日常的优雅。每一处摆设都如同一场细节的对话：BYREDO 的烛香、黑白的画作、金属的光泽，都被安放在恰好的节奏中。' :
                                    locale === 'fr' ?
                                    'C\'est un espace appartenant au parfum, à la lumière et aux matériaux. Dans cet appartement montréalais, 33 Studio dépeint une élégance quotidienne avec des tons neutres doux et des proportions sobres. Chaque arrangement est comme un dialogue de détails : les bougies BYREDO, les œuvres en noir et blanc, l\'éclat métallique, tous placés dans un rythme parfait.' :
                                    'This is a space belonging to scent, light, and materials. In this Montreal apartment, 33 Studio depicts everyday elegance with soft neutral tones and restrained proportions. Each arrangement is like a dialogue of details: BYREDO candles, black and white artworks, metallic luster, all placed in perfect rhythm.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whisper-of-scent__gallery" ref={el => sectionsRef.current[1] = el}>
                <div className="whisper-of-scent__triple">
                    <div className="whisper-of-scent__image-third">
                        <Image
                            fill
                            src="/images/projects/whisper-of-scent/A风格1.jpg"
                            alt="Candle Detail"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="whisper-of-scent__image-third">
                        <Image
                            fill
                            src="/images/projects/whisper-of-scent/A风格4.jpg"
                            alt="Dining Area"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="whisper-of-scent__image-third">
                        <Image
                            fill
                            src="/images/projects/whisper-of-scent/A风格7.jpg"
                            alt="Living Room"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            <section className="whisper-of-scent__details" ref={el => sectionsRef.current[2] = el}>
                <div className="whisper-of-scent__row">
                    <div className="whisper-of-scent__image-half">
                        <Image
                            fill
                            src="/images/projects/whisper-of-scent/A风格2.jpg"
                            alt="Entrance"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="whisper-of-scent__image-half">
                        <Image
                            fill
                            src="/images/projects/whisper-of-scent/A风格5.jpg"
                            alt="Detail"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            <section className="whisper-of-scent__closing" ref={el => sectionsRef.current[3] = el}>
                <div className="whisper-of-scent__closing-bg">
                    <Image
                        fill
                        src="/images/projects/whisper-of-scent/A风格6.jpg"
                        alt="Background"
                        sizes="100vw"
                        style={{ objectFit: 'cover', opacity: 0.3 }}
                    />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="whisper-of-scent__closing-text">
                                <p className="whisper-of-scent__quote">
                                    {locale === 'zh' ?
                                    '光，是家的韵律；香气，是记忆的语言。33 Studio，让生活的每一刻，都柔和而有声。' :
                                    locale === 'fr' ?
                                    'La lumière est le rythme de la maison ; le parfum est le langage de la mémoire. 33 Studio rend chaque moment de la vie doux et sonore.' :
                                    'Light is the rhythm of home; scent is the language of memory. 33 Studio makes every moment of life soft and resonant.'}
                                </p>
                                <p className="whisper-of-scent__signature">
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
