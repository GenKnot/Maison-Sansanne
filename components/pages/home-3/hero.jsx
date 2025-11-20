"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Hero() {
    const { t } = useLanguage();
    
    const titles = [
        t('hero.typing1'),
        t('hero.typing2'),
        t('hero.typing3'),
        t('hero.typing4')
    ];

    const images = [
        {
            src: "/images/hero/hero-1.jpg",
            alt: "Flowing Light"
        },
        {
            src: "/images/hero/hero-2.jpg",
            alt: "Whisper of Scent"
        },
        {
            src: "/images/hero/hero-3.jpg",
            alt: "Traces of Warmth"
        },
        {
            src: "/images/hero/hero-4.jpg",
            alt: "The Study Series"
        },
        {
            src: "/images/hero/hero-5.jpg",
            alt: "Whisper of Scent"
        },
        {
            src: "/images/hero/hero-6.jpg",
            alt: "Traces of Warmth"
        },
        {
            src: "/images/hero/hero-7.jpg",
            alt: "Whisper of Scent"
        }
    ];
    
    const [currentTitle, setCurrentTitle] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = isDeleting ? 80 : 150;
        const pauseTime = 3000;

        const timer = setTimeout(() => {
            const currentFullTitle = titles[titleIndex];

            if (!isDeleting && charIndex < currentFullTitle.length) {
                setCurrentTitle(currentFullTitle.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setCurrentTitle(currentFullTitle.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentFullTitle.length) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTitleIndex((titleIndex + 1) % titles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, titleIndex]);

    useEffect(() => {
        const imageTimer = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(imageTimer);
    }, []);

    return (
        <div className="hero-section-03">
            <div className="hero-section-03_wrapper">
                <div className="container ">
                    <div className="row gutter-y-40 flex-lg-row-reverse justify-content-center align-items-center ">
                        <div className="offset-xl-1 col-xl-5 col-lg-6 col-12 px-0 px-lg-3">
                            <div className="hero-content-03_image-3 hero-image-slider">
                                {images.map((image, index) => (
                                    <Image
                                        key={index}
                                        height={1004}
                                        width={580}
                                        src={image.src}
                                        alt={image.alt}
                                        className={`object-image hero-slide-image ${
                                            index === imageIndex ? "active" : ""
                                        }`}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center bottom'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div
                            className="col-xl-6 col-lg-6 col-md-8 col-sm-9 col-xs-10"
                            data-aos-duration={1000}
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="hero-content-03">
                                <div className="hero-content-03_text-block">
                                    <h1 className="hero-content-03__title heading-xl text-black">
                                        {currentTitle}
                                        <span className="typing-cursor">|</span>
                                    </h1>
                                    <p>
                                        {t('manifesto.lead')} {t('manifesto.p2')} {t('essence.p3')}
                                    </p>
                                </div>
                                <div className="hero-content-03_button-group">
                                    <Link
                                        href="/contact"
                                        className="btn btn-primary hvr-fill-black"
                                    >
                                        {t('common.contact')}
                                        <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                                    </Link>
                                    <Link
                                        href="/urban"
                                        className="btn btn-black hvr-black-primary"
                                    >
                                        {t('common.viewWork')}
                                        <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                                    </Link>
                                </div>
                            </div>
                            <div className="hero-contact-widgets">
                                <div className="contact-widget">
                                    <a href="mailto:info@33studio.com" className="contact-widget__email">
                                        info@33studio.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
