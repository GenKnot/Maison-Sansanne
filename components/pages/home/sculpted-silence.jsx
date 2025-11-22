"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SculptedSilence() {
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
        <div className="sculpted-silence">
            <section className="sculpted-silence__hero" ref={heroRef}>
                <div className="sculpted-silence__hero-image">
                    <Image
                        fill
                        src="/images/projects/sculpted-silence/E风格3.jpg"
                        alt="Sculpted Silence"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="sculpted-silence__hero-content">
                    <div className="sculpted-silence__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`sculpted-silence__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        Sculpted Silence
                    </h1>
                    <p ref={subtitleRef} className="sculpted-silence__subtitle">
                        {locale === 'zh' ? '在光影的雕刻中，极简成为最有力量的存在' :
                         locale === 'fr' ? 'Dans la sculpture de lumière et d\'ombre, le minimalisme devient l\'existence la plus puissante' :
                         'In the sculpture of light and shadow, minimalism becomes the most powerful existence'}
                    </p>
                </div>
            </section>

            <section className="sculpted-silence__narrative" ref={el => sectionsRef.current[0] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="sculpted-silence__text">
                                <p>
                                    {locale === 'zh' ?
                                    '本案为蒙特利尔的一栋私宅，33 Studio 以"黑白之间的秩序"为线索，探索空间在光影下的理性与情绪。深黑墙体构建出空间的静默感，乳白色 boucle 沙发与石材茶几形成肌理对话，灯光则以极小的笔触介入，让明暗、体积与反射成为真正的装饰。' :
                                    locale === 'fr' ?
                                    'Cette résidence privée montréalaise, 33 Studio explore la rationalité et l\'émotion de l\'espace sous la lumière et l\'ombre avec "l\'ordre entre noir et blanc" comme fil conducteur. Les murs noirs profonds construisent le silence de l\'espace, le canapé bouclé blanc cassé et la table basse en pierre forment un dialogue de texture, la lumière intervient avec les touches les plus minimes, faisant de l\'ombre, du volume et de la réflexion la véritable décoration.' :
                                    'This Montreal private residence, 33 Studio explores the rationality and emotion of space under light and shadow with "order between black and white" as the thread. Deep black walls construct the silence of space, off-white boucle sofa and stone coffee table form a texture dialogue, lighting intervenes with minimal touches, making shadow, volume, and reflection the true decoration.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sculpted-silence__gallery" ref={el => sectionsRef.current[1] = el}>
                <div className="sculpted-silence__row">
                    <div className="sculpted-silence__image-half">
                        <Image
                            fill
                            src="/images/projects/sculpted-silence/E风格1.jpg"
                            alt="Detail 1"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="sculpted-silence__image-half">
                        <Image
                            fill
                            src="/images/projects/sculpted-silence/E风格2.jpg"
                            alt="Detail 2"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            <section className="sculpted-silence__closing" ref={el => sectionsRef.current[2] = el}>
                <div className="sculpted-silence__closing-bg">
                    <Image
                        fill
                        src="/images/projects/sculpted-silence/E风格4.jpg"
                        alt="Background"
                        sizes="100vw"
                        style={{ objectFit: 'cover', opacity: 0.15, filter: 'blur(10px)' }}
                    />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="sculpted-silence__closing-text">
                                <p className="sculpted-silence__quote">
                                    {locale === 'zh' ?
                                    '当空间不再喧哗，材质开始说话。33 Studio，在黑与白之间，找到情绪的重量。' :
                                    locale === 'fr' ?
                                    'Quand l\'espace cesse de crier, les matériaux commencent à parler. 33 Studio, entre noir et blanc, trouve le poids de l\'émotion.' :
                                    'When space stops clamoring, materials begin to speak. 33 Studio, between black and white, finds the weight of emotion.'}
                                </p>
                                <p className="sculpted-silence__signature">
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
