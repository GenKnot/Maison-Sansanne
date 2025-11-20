"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const logoRef = useRef(null);
    const textRef = useRef(null);
    
    useEffect(() => {
        const section = sectionRef.current;
        const logo = logoRef.current;
        const text = textRef.current;

        if (!section || !logo || !text) return;

        const mm = gsap.matchMedia();

        mm.add("(max-width: 991px)", () => {
            gsap.set(logo, { x: "50%", opacity: 0, scale: 1.5 });
            gsap.set(text, { opacity: 0, y: 30 });

            ScrollTrigger.create({
                trigger: section,
                start: "top bottom",
                end: "center center",
                scrub: 0.5,
                onUpdate: (self) => {
                    const progress = self.progress;
                    
                    if (progress < 0.4) {
                        const logoProgress = progress / 0.4;
                        gsap.to(logo, {
                            x: `${50 - (logoProgress * 50)}%`,
                            opacity: logoProgress,
                            scale: 1.5 - (logoProgress * 0.5),
                            duration: 0.1,
                            ease: "none"
                        });
                    } else {
                        gsap.to(logo, {
                            x: "0%",
                            opacity: 1,
                            scale: 1,
                            duration: 0.1,
                            ease: "none"
                        });
                        
                        const textProgress = (progress - 0.4) / 0.6;
                        gsap.to(text, {
                            opacity: textProgress,
                            y: 30 - (textProgress * 30),
                            duration: 0.1,
                            ease: "none"
                        });
                    }
                }
            });
        });

        mm.add("(min-width: 992px)", () => {
            gsap.set([logo, text], { opacity: 1, scale: 1, x: 0, y: 0 });
        });

        return () => {
            mm.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    
    return (
        <div ref={sectionRef} className="about-section padding-top-140">
            <div className="container">
                <div className="about-section__wrapper border-bottom padding-bottom-140">
                    <div className="row gutter-x-40 align-items-center row align-items-center justify-content-center gutter-y-40">
                        <div className="col-xl-5 col-lg-5 col-md-6 col-xs-7 col-8">
                            <div ref={logoRef} className="about-image-3">
                                <Image
                                    height={600}
                                    width={500}
                                    src="/Logo33.png"
                                    alt="33 Studio"
                                    className="w-100 h-auto"
                                />
                            </div>
                        </div>
                        <div className="offset-xl-1 col-xxl-6 col-xl-6 col-lg-7 col-md-8 col-auto">
                            <div ref={textRef} className="content-text-block-wrapper">
                                <div className="content-text-block">
                                    <span className="subtitle">
                                        {t('about.subtitle')}
                                    </span>
                                    <h2 className="content-title heading-md mb-32">
                                        {t('about.title')}
                                    </h2>
                                    <p className="mb-24">
                                        {t('about.p1')}
                                    </p>
                                    <p>
                                        {t('about.p2')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
