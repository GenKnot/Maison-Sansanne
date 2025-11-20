"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalLoftContent() {
    const { t } = useLanguage();
    const sectionsRef = useRef([]);
    
    useEffect(() => {
        const heroTitle = document.querySelector('.project-hero__title');
        const heroSubtitle = document.querySelector('.project-hero__subtitle');
        const heroTagline = document.querySelector('.project-hero__tagline');
        
        if (heroTitle && heroSubtitle && heroTagline) {
            gsap.fromTo(heroTitle, { opacity: 0, y: 100, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power4.out", delay: 0.3 });
            gsap.fromTo(heroSubtitle, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.7 });
            gsap.fromTo(heroTagline, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 1 });
        }

        sectionsRef.current.forEach((section) => {
            if (!section) return;
            gsap.fromTo(section, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 85%", end: "top 40%", toggleActions: "play none none none" } });
            
            const images = section.querySelectorAll('.project-image img');
            images.forEach((img) => {
                gsap.to(img, { y: -40, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 1.2 } });
            });
            
            const textElements = section.querySelectorAll('.project-text__subtitle, .project-text__desc, .project-section__title, .project-section__desc');
            if (textElements.length > 0) {
                gsap.fromTo(textElements, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none none" } });
            }
        });

        return () => { ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };
    }, []);

    const addToRefs = (el) => { if (el && !sectionsRef.current.includes(el)) { sectionsRef.current.push(el); } };

    return (
        <div className="digital-loft-project">
            <section className="project-hero" ref={addToRefs}>
                <div className="project-hero__image">
                    <Image src="/images/projects/digital-loft/g5.jpg" alt="Digital Loft" fill style={{ objectFit: 'cover' }} priority />
                    <div className="project-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="project-hero__content">
                        <h1 className="project-hero__title">
                            <span className="title-main">Digital Loft</span>
                            <span className="title-decoration"></span>
                        </h1>
                        <p className="project-hero__subtitle">数光之阁</p>
                        <p className="project-hero__tagline">The Architecture of Creative Logic</p>
                    </div>
                </div>
            </section>

            <section className="project-section project-intro" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="project-intro__content">
                                <p className="project-intro__text">
                                    在光与逻辑之间，理性找到它的温度。
                                    <br />
                                    这是一个数码体验与办公的复合空间，蓝色光带贯穿始终，模块化的逻辑与玻璃幕墙构建出冷静而纯粹的秩序。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-space" ref={addToRefs}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-lg-1 order-2">
                            <div className="project-text">
                                <h3 className="project-text__subtitle">逻辑为骨，光为肤</h3>
                                <p className="project-text__desc">
                                    空间以蓝色光带为导向，串联起接待、工作、社交的不同场景。
                                    <br /><br />
                                    玻璃、金属与混凝土构成理性的框架，而光线的流动赋予了空间情绪的层次。
                                    这是数字时代的办公美学——冷静、有序，却不失人的温度。
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-2 order-1">
                            <div className="project-image project-image--portrait">
                                <Image src="/images/projects/digital-loft/g6.jpg" alt="Digital Loft Space" width={1080} height={1350} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-diagram" ref={addToRefs}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="project-section__title">结构是一种隐形的代码</h3>
                        <p className="project-section__desc">
                            平面与剖面揭示了空间的底层逻辑——每一条动线、每一个节点，都是精确计算的结果
                        </p>
                    </div>
                    <div className="row gutter-x-40">
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/digital-loft/g1.jpg" alt="Floor Plan" width={1080} height={1350} />
                            </div>
                            <div className="project-image-caption">
                                <p>平面布局 · 功能分区</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/digital-loft/g2.jpg" alt="Section" width={1080} height={1350} />
                            </div>
                            <div className="project-image-caption">
                                <p>剖面逻辑 · 空间关系</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-x-40 mt-4">
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/digital-loft/g3.jpg" alt="Detail Plan" width={1080} height={1350} />
                            </div>
                            <div className="project-image-caption">
                                <p>细部设计 · 材质构成</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/digital-loft/g4.jpg" alt="Elevation" width={1080} height={1350} />
                            </div>
                            <div className="project-image-caption">
                                <p>立面分析 · 光线系统</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-ending" ref={addToRefs}>
                <div className="container">
                    <div className="project-ending__content">
                        <h2 className="project-ending__quote">
                            在光与逻辑之间，理性找到它的温度
                        </h2>
                        <p className="project-ending__quote-en">
                            Where light meets logic, rationality finds its warmth.
                        </p>
                        <div className="project-ending__divider"></div>
                        <p className="project-ending__keywords">
                            光 · 逻辑 · 理性 · 温度 · 数字美学
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
