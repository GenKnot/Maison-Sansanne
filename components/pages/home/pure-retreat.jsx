"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PureRetreat() {
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
        <div className="pure-retreat">
            <section className="pure-retreat__hero" ref={heroRef}>
                <div className="pure-retreat__hero-image">
                    <Image
                        fill
                        src="/images/projects/pure-retreat/浴室风格A1.jpg"
                        alt="Pure Retreat"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="pure-retreat__hero-content">
                    <div className="pure-retreat__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`pure-retreat__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        Pure Retreat
                    </h1>
                    <p ref={subtitleRef} className="pure-retreat__subtitle">
                        {locale === 'zh' ? '水与光的对话，纯净成为一种仪式' :
                         locale === 'fr' ? 'Dialogue entre eau et lumière, la pureté devient un rituel' :
                         'Dialogue of water and light, purity becomes ritual'}
                    </p>
                </div>
            </section>

            <section className="pure-retreat__narrative" ref={el => sectionsRef.current[0] = el}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="pure-retreat__text">
                                <p>
                                    {locale === 'zh' ?
                                    '浴室不是功能的堆叠，而是一场关于纯净与平衡的空间叙事。Pure Retreat 以极简的白、自然的木与柔和的灰，构建出一个安静的退隐之所。镜面的倒影延伸空间，光线在水与石之间流动，每一次沐浴都成为一种回归自我的仪式。' :
                                    locale === 'fr' ?
                                    'La salle de bain n\'est pas un empilement de fonctions, mais un récit spatial sur la pureté et l\'équilibre. Pure Retreat, avec son blanc minimaliste, son bois naturel et son gris doux, construit un refuge tranquille. Le reflet du miroir étend l\'espace, la lumière circule entre l\'eau et la pierre, chaque bain devient un rituel de retour à soi.' :
                                    'The bathroom is not a stack of functions, but a spatial narrative about purity and balance. Pure Retreat, with minimalist white, natural wood, and soft gray, constructs a quiet retreat. Mirror reflections extend the space, light flows between water and stone, each bath becomes a ritual of returning to oneself.'}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="pure-retreat__images">
                                <div className="pure-retreat__image-side">
                                    <Image
                                        fill
                                        src="/images/projects/pure-retreat/浴室风格A2.jpg"
                                        alt="Bathroom Detail"
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="pure-retreat__image-side">
                                    <Image
                                        fill
                                        src="/images/projects/pure-retreat/浴室风格A3.jpg"
                                        alt="Bathroom Space"
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pure-retreat__philosophy" ref={el => sectionsRef.current[2] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="pure-retreat__philosophy-text">
                                <h2 className="pure-retreat__section-title">
                                    {locale === 'zh' ? '设计理念' :
                                     locale === 'fr' ? 'Philosophie de Design' :
                                     'Design Philosophy'}
                                </h2>
                                <p>
                                    {locale === 'zh' ?
                                    '在 Pure Retreat 的设计中，我们追求的是一种"极简的丰富"——用最少的元素，创造最深的体验。白色不是空白，而是光的载体；木质不是装饰，而是温度的传递；镜面不是反射，而是空间的延伸。每一个细节都在诉说着关于纯净、平衡与回归的故事。' :
                                    locale === 'fr' ?
                                    'Dans la conception de Pure Retreat, nous recherchons une "richesse minimaliste" - créer l\'expérience la plus profonde avec le moins d\'éléments. Le blanc n\'est pas vide, mais porteur de lumière ; le bois n\'est pas décoratif, mais transmetteur de chaleur ; le miroir n\'est pas réflexion, mais extension de l\'espace. Chaque détail raconte une histoire de pureté, d\'équilibre et de retour.' :
                                    'In Pure Retreat\'s design, we pursue "minimalist richness" - creating the deepest experience with the fewest elements. White is not emptiness, but carrier of light; wood is not decoration, but transmitter of warmth; mirror is not reflection, but extension of space. Every detail tells a story of purity, balance, and return.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pure-retreat__closing" ref={el => sectionsRef.current[1] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="pure-retreat__closing-text">
                                <p className="pure-retreat__quote">
                                    {locale === 'zh' ?
                                    '在白与木之间，水成为光的载体。Pure Retreat——纯净，是空间最温柔的力量。' :
                                    locale === 'fr' ?
                                    'Entre le blanc et le bois, l\'eau devient le porteur de lumière. Pure Retreat—la pureté est la force la plus douce de l\'espace.' :
                                    'Between white and wood, water becomes the carrier of light. Pure Retreat—purity is the gentlest force of space.'}
                                </p>
                                <p className="pure-retreat__signature">
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
