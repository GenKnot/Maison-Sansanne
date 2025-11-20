"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CyberReverbContent() {
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
        <div className="cyber-reverb-project">
            <section className="project-hero" ref={addToRefs}>
                <div className="project-hero__image">
                    <Image src="/images/projects/cyber-reverb/yd1.jpg" alt="Cyber Reverb" fill style={{ objectFit: 'cover' }} priority />
                    <div className="project-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="project-hero__content">
                        <h1 className="project-hero__title">
                            <span className="title-main">Cyber Reverb</span>
                            <span className="title-decoration"></span>
                        </h1>
                        <p className="project-hero__subtitle">讯光回响</p>
                        <p className="project-hero__tagline">Where Light Becomes Sound</p>
                    </div>
                </div>
            </section>

            <section className="project-section project-intro" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="project-intro__content">
                                <p className="project-intro__text">
                                    当光与声重叠，空间成为城市的回声。
                                    <br />
                                    这是一个艺术装置与娱乐空间的融合体，霓虹蓝紫与电蓝交织，机器人酒吧与光影装置构建出未来的节奏。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-concept" ref={addToRefs}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="project-text">
                                <h3 className="project-text__subtitle">光在金属间反射，声在空间中叠加</h3>
                                <p className="project-text__desc">
                                    空间被声音重新定义。功能消融于体验，结构成为流线。
                                    <br /><br />
                                    霓虹光带贯穿始终，VR 体验区、机器人酒吧、主舞台形成能量节点。
                                    这不是传统的夜店，而是一场关于未来、节奏与感官的实验。
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="project-image">
                                <Image src="/images/projects/cyber-reverb/yd2.jpg" alt="VR Experience" width={1200} height={800} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-bar" ref={addToRefs}>
                <div className="container">
                    <div className="row gutter-x-40">
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image src="/images/projects/cyber-reverb/yd3.jpg" alt="Robot Bar" width={1200} height={800} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image">
                                <Image src="/images/projects/cyber-reverb/yd4.jpg" alt="Stage Area" width={1200} height={800} />
                            </div>
                        </div>
                    </div>
                    <div className="project-text text-center mt-4">
                        <p className="project-text__desc">
                            机械手臂调配出的，不只是酒精，更是未来的节奏
                        </p>
                    </div>
                </div>
            </section>

            <section className="project-section project-stage" ref={addToRefs}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="project-image">
                                <Image src="/images/projects/cyber-reverb/yd5.jpg" alt="Main Stage" width={1600} height={1000} />
                            </div>
                            <div className="project-text text-center mt-4">
                                <h3 className="project-text__subtitle">舞台如能量核心，光成为信号，节奏即信仰</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-diagram" ref={addToRefs}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="project-section__title">建筑被声音重新定义</h3>
                        <p className="project-section__desc">
                            功能消融于体验，结构成为流线
                        </p>
                    </div>
                    <div className="row gutter-x-40">
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/cyber-reverb/yd6.jpg" alt="Floor Plan" width={1200} height={800} />
                            </div>
                            <div className="project-image-caption">
                                <p>平面布局 · 能量流线</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/cyber-reverb/yd7.jpg" alt="Section" width={1200} height={800} />
                            </div>
                            <div className="project-image-caption">
                                <p>剖面逻辑 · 声光系统</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-x-40 mt-4 justify-content-center">
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/cyber-reverb/yd8.jpg" alt="Perspective" width={1200} height={800} />
                            </div>
                            <div className="project-image-caption">
                                <p>透视分析 · 空间体验</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-image project-image--diagram">
                                <Image src="/images/projects/cyber-reverb/yd9.jpg" alt="Concept" width={1200} height={800} />
                            </div>
                            <div className="project-image-caption">
                                <p>概念图 · 色块结构</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section project-ending" ref={addToRefs}>
                <div className="container">
                    <div className="project-ending__content">
                        <h2 className="project-ending__quote">
                            当光与声重叠，空间成为城市的回声
                        </h2>
                        <p className="project-ending__quote-en">
                            Designing the Architecture of Sound
                        </p>
                        <div className="project-ending__divider"></div>
                        <p className="project-ending__keywords">
                            声音 · 光线 · 节奏 · 回响 · 赛博美学
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
