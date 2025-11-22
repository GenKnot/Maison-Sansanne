"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuietElevation() {
    const { t, locale } = useLanguage();
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const imageRowsRef = useRef([]);

    useEffect(() => {
        const hero = heroRef.current;
        const title = titleRef.current;
        const subtitle = subtitleRef.current;

        if (hero && title && subtitle) {
            gsap.set([title, subtitle], { opacity: 0, y: 30 });

            const tl = gsap.timeline({ delay: 0.3 });
            tl.to(title, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
              .to(subtitle, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6");
        }

        imageRowsRef.current.forEach((row, index) => {
            if (row) {
                gsap.fromTo(row,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: row,
                            start: "top 85%",
                            end: "top 60%",
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
        <div className="quiet-elevation">
            <section className="quiet-elevation__hero" ref={heroRef}>
                <div className="quiet-elevation__hero-image">
                    <Image
                        fill
                        src="/images/projects/quiet-elevation/X风格1.jpg"
                        alt="Quiet Elevation"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="quiet-elevation__hero-content">
                    <div className="quiet-elevation__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`quiet-elevation__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        Quiet Elevation
                    </h1>
                    <p ref={subtitleRef} className="quiet-elevation__subtitle">
                        {locale === 'zh' ? '在高度之上，空间回到了最安静的平面' : 
                         locale === 'fr' ? 'Au-dessus des hauteurs, l\'espace revient au plan le plus silencieux' :
                         'Above the heights, space returns to its quietest plane'}
                    </p>
                </div>
            </section>

            <section className="quiet-elevation__intro">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="quiet-elevation__text-block">
                                <p>
                                    {locale === 'zh' ? 
                                    '这是一个关于"高度"的空间叙事。在城市的垂直维度中，光线、比例与视野共同定义了居住的意义。我们用极简的语言、克制的材质与精准的比例，让空间在安静中呈现力量，在留白中容纳呼吸。' :
                                    locale === 'fr' ?
                                    'C\'est un récit spatial sur la "hauteur". Dans la dimension verticale de la ville, la lumière, les proportions et la vue définissent ensemble le sens de l\'habitation. Nous utilisons un langage minimaliste, des matériaux sobres et des proportions précises pour que l\'espace révèle sa force dans le calme et accueille la respiration dans le vide.' :
                                    'This is a spatial narrative about "elevation". In the vertical dimension of the city, light, proportion, and view together define the meaning of dwelling. We use minimalist language, restrained materials, and precise proportions to let space reveal strength in quietness and embrace breathing in emptiness.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="quiet-elevation__gallery">
                <div className="quiet-elevation__image-row" ref={el => imageRowsRef.current[0] = el}>
                    <div className="quiet-elevation__image-container quiet-elevation__image-container--large">
                        <Image
                            fill
                            src="/images/projects/quiet-elevation/X风格4.jpg"
                            alt="Living Space"
                            sizes="(max-width: 768px) 100vw, 60vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="quiet-elevation__text-overlay">
                        <h3>{locale === 'zh' ? '光与比例的对话' : locale === 'fr' ? 'Dialogue entre lumière et proportion' : 'Dialogue of Light and Proportion'}</h3>
                        <p>
                            {locale === 'zh' ?
                            '落地窗将城市的光线引入室内，空间在明暗之间找到平衡。家具的比例、材质的选择、留白的节奏，都在为光线的流动让路。' :
                            locale === 'fr' ?
                            'Les baies vitrées introduisent la lumière urbaine à l\'intérieur, l\'espace trouve son équilibre entre ombre et lumière. Les proportions du mobilier, le choix des matériaux, le rythme du vide, tout cède le passage au flux de la lumière.' :
                            'Floor-to-ceiling windows bring urban light indoors, space finds balance between light and shadow. Furniture proportions, material choices, rhythm of emptiness—all make way for the flow of light.'}
                        </p>
                    </div>
                </div>

                <div className="quiet-elevation__image-row quiet-elevation__image-row--reverse" ref={el => imageRowsRef.current[1] = el}>
                    <div className="quiet-elevation__image-container">
                        <Image
                            fill
                            src="/images/projects/quiet-elevation/X风格7.jpg"
                            alt="City View"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="quiet-elevation__image-container">
                        <Image
                            fill
                            src="/images/projects/quiet-elevation/X风格3.jpg"
                            alt="Interior Detail"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <div className="quiet-elevation__full-image" ref={el => imageRowsRef.current[2] = el}>
                    <Image
                        fill
                        src="/images/projects/quiet-elevation/X风格9.jpg"
                        alt="Bedroom"
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="quiet-elevation__image-row" ref={el => imageRowsRef.current[3] = el}>
                    <div className="quiet-elevation__image-container">
                        <Image
                            fill
                            src="/images/projects/quiet-elevation/X风格5.jpg"
                            alt="Dining Area"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="quiet-elevation__image-container">
                        <Image
                            fill
                            src="/images/projects/quiet-elevation/X风格8.jpg"
                            alt="Kitchen"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            <section className="quiet-elevation__closing">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="quiet-elevation__closing-text">
                                <p className="quiet-elevation__quote">
                                    {locale === 'zh' ?
                                    '在城市的高度中，我们不追求奢华，而是追求一种安静的力量——让光线成为空间的主角，让比例成为情绪的语言，让留白成为生活的呼吸。' :
                                    locale === 'fr' ?
                                    'Dans les hauteurs urbaines, nous ne recherchons pas le luxe, mais une force tranquille—laissant la lumière devenir le protagoniste de l\'espace, les proportions devenir le langage de l\'émotion, le vide devenir la respiration de la vie.' :
                                    'In urban heights, we seek not luxury, but a quiet strength—letting light become the protagonist of space, proportion become the language of emotion, emptiness become the breathing of life.'}
                                </p>
                                <p className="quiet-elevation__signature">
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
