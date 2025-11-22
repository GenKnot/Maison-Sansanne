"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function HeroFullscreen() {
    const { t } = useLanguage();
    
    const slides = [
        {
            image: "/images/projects/civic-syntax/V1.jpg",
            title: t('heroFullscreen.slide1Title'),
            subtitle: t('heroFullscreen.slide1Subtitle'),
        },
        {
            image: "/images/projects/kinetic-atelier/X1.jpg",
            title: t('heroFullscreen.slide2Title'),
            subtitle: t('heroFullscreen.slide2Subtitle'),
        },
        {
            image: "/images/projects/bloom-atelier/C1.jpg",
            title: t('heroFullscreen.slide3Title'),
            subtitle: t('heroFullscreen.slide3Subtitle'),
        },
        {
            image: "/images/projects/cyber-reverb/yd1.jpg",
            title: t('heroFullscreen.slide4Title'),
            subtitle: t('heroFullscreen.slide4Subtitle'),
        },
    ];
    
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="hero-fullscreen">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-fullscreen__slide ${
                        index === currentSlide ? "active" : ""
                    }`}
                >
                    <div className="hero-fullscreen__image">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={index === 0}
                        />
                    </div>
                    <div className="hero-fullscreen__overlay"></div>
                </div>
            ))}
            
            <div className="hero-fullscreen__content">
                <div className="container">
                    <div className="hero-fullscreen__text">
                        <h1 
                            className="hero-fullscreen__title" 
                            data-text={slides[currentSlide].title}
                            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
                        >
                            {slides[currentSlide].title}
                        </h1>
                        <p className="hero-fullscreen__subtitle" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
                            {slides[currentSlide].subtitle}
                        </p>
                        <div className="hero-fullscreen__buttons">
                            <Link href="/urban" className="btn btn-primary hvr-fill-black">
                                {t('common.viewWork')}
                                <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                            </Link>
                            <Link href="/contact" className="btn btn-outline-white hvr-white-primary">
                                {t('common.contact')}
                                <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-fullscreen__pagination">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-fullscreen__dot ${
                            index === currentSlide ? "active" : ""
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="hero-fullscreen__scroll-indicator">
                <span></span>
            </div>
        </div>
    );
}
