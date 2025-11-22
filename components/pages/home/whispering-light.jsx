"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhisperingLight() {
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
        <div className="whispering-light">
            <section className="whispering-light__hero" ref={heroRef}>
                <div className="whispering-light__hero-image">
                    <Image
                        fill
                        src="/images/projects/whispering-light/Y风格3.jpg"
                        alt="Whispering Light"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="whispering-light__hero-content">
                    <div className="whispering-light__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`whispering-light__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        Whispering Light
                    </h1>
                    <p ref={subtitleRef} className="whispering-light__subtitle">
                        {locale === 'zh' ? '光，是最温柔的语言。它让空间学会了呼吸' :
                         locale === 'fr' ? 'La lumière est le langage le plus doux. Elle apprend à l\'espace à respirer' :
                         'Light is the gentlest language. It teaches space to breathe'}
                    </p>
                </div>
            </section>

            <section className="whispering-light__narrative" ref={el => sectionsRef.current[0] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="whispering-light__text">
                                <p>
                                    {locale === 'zh' ?
                                    'Whispering Light 是 33 Studio 对"光的性格"最细腻的诠释。这座位于蒙特利尔的住宅，以自然光为核心，构建了一个既克制又充满情绪的空间。晨光透过窗帘的纹理洒落，在木面上铺开柔和的金色；午后的阳光沿着墙面滑动，轻触织物、镜面与玻璃。' :
                                    locale === 'fr' ?
                                    'Whispering Light est l\'interprétation la plus délicate de 33 Studio sur "le caractère de la lumière". Cette résidence montréalaise, centrée sur la lumière naturelle, construit un espace à la fois sobre et chargé d\'émotion. La lumière du matin se répand à travers la texture des rideaux, déployant un doré doux sur le bois ; la lumière de l\'après-midi glisse le long des murs, effleurant tissus, miroirs et verre.' :
                                    'Whispering Light is 33 Studio\'s most delicate interpretation of "the character of light". This Montreal residence, centered on natural light, constructs a space both restrained and full of emotion. Morning light spills through curtain textures, spreading soft gold across wood; afternoon sun slides along walls, gently touching fabric, mirrors, and glass.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whispering-light__gallery">
                <div className="whispering-light__row" ref={el => sectionsRef.current[1] = el}>
                    <div className="whispering-light__image-half">
                        <Image
                            fill
                            src="/images/projects/whispering-light/Y风格1.jpg"
                            alt="Sunroom"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="whispering-light__image-half">
                        <Image
                            fill
                            src="/images/projects/whispering-light/Y风格6.jpg"
                            alt="Living Room"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <div className="whispering-light__full" ref={el => sectionsRef.current[2] = el}>
                    <Image
                        fill
                        src="/images/projects/whispering-light/Y风格2.jpg"
                        alt="Interior Detail"
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="whispering-light__row" ref={el => sectionsRef.current[3] = el}>
                    <div className="whispering-light__image-half">
                        <Image
                            fill
                            src="/images/projects/whispering-light/Y风格4.jpg"
                            alt="Bedroom"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="whispering-light__image-half">
                        <Image
                            fill
                            src="/images/projects/whispering-light/Y风格5.jpg"
                            alt="Detail"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <div className="whispering-light__final" ref={el => sectionsRef.current[4] = el}>
                    <Image
                        fill
                        src="/images/projects/whispering-light/Y风格9.jpg"
                        alt="Dining Area"
                        sizes="100vw"
                        style={{ objectFit: 'cover', opacity: 0.7 }}
                    />
                    <div className="whispering-light__final-overlay">
                        <p className="whispering-light__quote">
                            {locale === 'zh' ?
                            '光轻轻落下，在木、石与空气之间延展。33 Studio，以温柔的克制，书写生活的安静诗意。' :
                            locale === 'fr' ?
                            'La lumière tombe doucement, s\'étendant entre bois, pierre et air. 33 Studio, avec une retenue douce, écrit la poésie tranquille de la vie.' :
                            'Light falls gently, extending between wood, stone, and air. 33 Studio, with gentle restraint, writes the quiet poetry of life.'}
                        </p>
                        <p className="whispering-light__signature">
                            — 33 Studio
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
