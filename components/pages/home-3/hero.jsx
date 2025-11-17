"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const titles = [
        "光韵与气息之间",
        "东方的克制",
        "法式的优雅",
        "北美的现代"
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
                        <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-7 col-sm-8 col-9">
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
                                        空间不止是容器，而是一种光韵与气息的共鸣。
                                        Maison Sansanne 的设计语言，诞生于三种文化之间的自然交融——
                                        东方的克制、法式的优雅、北美的现代。
                                        我们用设计去描绘生活的节奏，让光有韵，气有息，
                                        让空间成为一种可被感知、可被记住的存在。
                                    </p>
                                </div>
                                <div className="hero-content-03_button-group">
                                    <Link
                                        href="/contact"
                                        className="btn btn-primary hvr-fill-black"
                                    >
                                        联系我们
                                        <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                                    </Link>
                                    <Link
                                        href="/urban"
                                        className="btn btn-black hvr-black-primary"
                                    >
                                        查看作品
                                        <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                                    </Link>
                                </div>
                            </div>
                            <div className="hero-contact-widgets">
                                <div className="contact-widget">
                                    <h3 className="contact-widget__title">
                                        邮箱
                                    </h3>
                                    <span className="contact-widget__text">
                                        info@maisonsansanne.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
