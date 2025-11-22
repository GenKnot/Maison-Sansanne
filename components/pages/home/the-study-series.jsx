"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheStudySeries() {
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
        <div className="the-study-series">
            <section className="the-study-series__hero" ref={heroRef}>
                <div className="the-study-series__hero-image">
                    <Image
                        fill
                        src="/images/projects/the-study-series/B风格.jpg"
                        alt="The Study Series"
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="the-study-series__hero-content">
                    <div className="the-study-series__brand">33 Studio</div>
                    <h1 ref={titleRef} className={`the-study-series__title ${locale !== 'zh' ? 'heading-xl-en' : ''}`}>
                        The Study Series
                    </h1>
                    <p ref={subtitleRef} className="the-study-series__subtitle">
                        {locale === 'zh' ? '材质、光影与比例的实验性探索' :
                         locale === 'fr' ? 'Explorations expérimentales de texture, lumière et proportion' :
                         'Experimental explorations in texture, light and proportion'}
                    </p>
                </div>
            </section>

            <section className="the-study-series__intro" ref={el => sectionsRef.current[0] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="the-study-series__intro-text">
                                <p>
                                    {locale === 'zh' ?
                                    '设计是一场持续的思考练习。The Study Series 是 33 Studio 对空间、材质与光影的实验性记录——它们不是完整的项目，而是设计过程中的片段、思考与探索。每一个画面都是关于比例、色彩、触感与氛围的研究，是我们对"生活艺术"的持续追问。' :
                                    locale === 'fr' ?
                                    'Le design est un exercice de réflexion continue. The Study Series est un enregistrement expérimental de 33 Studio sur l\'espace, les matériaux et la lumière—ce ne sont pas des projets complets, mais des fragments, des réflexions et des explorations du processus de conception. Chaque image est une étude sur la proportion, la couleur, la texture et l\'atmosphère, notre questionnement continu sur "l\'art de vivre".' :
                                    'Design is a continuous exercise in thinking. The Study Series is 33 Studio\'s experimental record of space, materials, and light—they are not complete projects, but fragments, thoughts, and explorations from the design process. Each image is a study of proportion, color, texture, and atmosphere, our continuous inquiry into the "art of living".'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="the-study-series__study-one" ref={el => sectionsRef.current[1] = el}>
                <div className="container-fluid">
                    <div className="the-study-series__study-header">
                        <h2 className="the-study-series__study-title">
                            {locale === 'zh' ? 'Study I — 温暖构成' :
                             locale === 'fr' ? 'Study I — Composition Chaleureuse' :
                             'Study I — Warm Composition'}
                        </h2>
                        <p className="the-study-series__study-desc">
                            {locale === 'zh' ? '触感 · 柔光 · 生活性' :
                             locale === 'fr' ? 'Texture · Lumière douce · Vie' :
                             'Texture · Soft light · Living'}
                        </p>
                    </div>
                    <div className="the-study-series__grid">
                        <div className="the-study-series__grid-item">
                            <Image
                                fill
                                src="/images/projects/the-study-series/C风格.jpg"
                                alt="Study I - 1"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="the-study-series__grid-item">
                            <Image
                                fill
                                src="/images/projects/the-study-series/D风格1.jpg"
                                alt="Study I - 2"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="the-study-series__study-two" ref={el => sectionsRef.current[2] = el}>
                <div className="container-fluid">
                    <div className="the-study-series__study-header">
                        <h2 className="the-study-series__study-title">
                            {locale === 'zh' ? 'Study II — 材质对比' :
                             locale === 'fr' ? 'Study II — Contraste Matériel' :
                             'Study II — Material Contrast'}
                        </h2>
                        <p className="the-study-series__study-desc">
                            {locale === 'zh' ? '石纹 · 金属 · 建筑感' :
                             locale === 'fr' ? 'Pierre · Métal · Architecture' :
                             'Stone · Metal · Architecture'}
                        </p>
                    </div>
                    <div className="the-study-series__grid">
                        <div className="the-study-series__grid-item">
                            <Image
                                fill
                                src="/images/projects/the-study-series/F风格1.jpg"
                                alt="Study II - 1"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="the-study-series__grid-item">
                            <Image
                                fill
                                src="/images/projects/the-study-series/G风格.jpg"
                                alt="Study II - 2"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="the-study-series__study-three" ref={el => sectionsRef.current[3] = el}>
                <div className="container-fluid">
                    <div className="the-study-series__study-header">
                        <h2 className="the-study-series__study-title">
                            {locale === 'zh' ? 'Study III — 设计片段' :
                             locale === 'fr' ? 'Study III — Fragments de Design' :
                             'Study III — Design Fragments'}
                        </h2>
                        <p className="the-study-series__study-desc">
                            {locale === 'zh' ? '色彩点 · 家具实验 · 节奏' :
                             locale === 'fr' ? 'Point de couleur · Expérience · Rythme' :
                             'Color accent · Experiment · Rhythm'}
                        </p>
                    </div>
                    <div className="the-study-series__single">
                        <div className="the-study-series__single-item">
                            <Image
                                fill
                                src="/images/projects/the-study-series/J风格.jpg"
                                alt="Study III"
                                sizes="(max-width: 768px) 100vw, 60vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="the-study-series__philosophy" ref={el => sectionsRef.current[5] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="the-study-series__philosophy-text">
                                <h2 className="the-study-series__section-title">
                                    {locale === 'zh' ? '关于这个系列' :
                                     locale === 'fr' ? 'À Propos de Cette Série' :
                                     'About This Series'}
                                </h2>
                                <p>
                                    {locale === 'zh' ?
                                    'The Study Series 不是完整的项目展示，而是设计过程中的思考碎片。它们记录了我们对材质、光影、比例与色彩的持续探索——有些是实验，有些是灵感，有些是对空间本质的追问。这些片段共同构成了 33 Studio 对"生活艺术"的理解：设计不是终点，而是一场永不停歇的对话。' :
                                    locale === 'fr' ?
                                    'The Study Series n\'est pas une présentation de projets complets, mais des fragments de réflexion du processus de conception. Ils enregistrent notre exploration continue des matériaux, de la lumière, des proportions et des couleurs - certains sont des expériences, certains sont des inspirations, certains sont des questionnements sur l\'essence de l\'espace. Ces fragments constituent ensemble la compréhension de 33 Studio de "l\'art de vivre" : le design n\'est pas une fin, mais un dialogue sans fin.' :
                                    'The Study Series is not a complete project showcase, but fragments of thought from the design process. They record our continuous exploration of materials, light, proportion, and color - some are experiments, some are inspirations, some are inquiries into the essence of space. These fragments together form 33 Studio\'s understanding of "the art of living": design is not an end, but an endless dialogue.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="the-study-series__closing" ref={el => sectionsRef.current[4] = el}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="the-study-series__closing-text">
                                <p className="the-study-series__quote">
                                    {locale === 'zh' ?
                                    '设计不是终点，而是一场持续的对话。The Study Series——每一个片段，都是我们对空间本质的追问。' :
                                    locale === 'fr' ?
                                    'Le design n\'est pas une fin, mais un dialogue continu. The Study Series—chaque fragment est notre questionnement sur l\'essence de l\'espace.' :
                                    'Design is not an end, but a continuous dialogue. The Study Series—each fragment is our inquiry into the essence of space.'}
                                </p>
                                <p className="the-study-series__signature">
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
