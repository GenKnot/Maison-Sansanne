"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n/context";

export default function Preloader() {
    const path = usePathname();
    const preloaderRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const body = document.getElementsByTagName("body")[0];
            preloaderRef.current.style.display = "block";
            body.classList.add("loading");
            body.classList.remove("loaded");

            setTimeout(() => {
                body.classList.remove("loading");
                body.classList.add("loaded");
            }, 700);

            setTimeout(() => {
                preloaderRef.current.style.display = "none";
            }, 1500);
        }
    }, [path]);

    return (
        <>
            <div ref={preloaderRef} className="preloader-wrapp">
                <div className="preloader-content">
                    <h1 className="preloader-title">{t('hero.title')}</h1>
                    <p className="preloader-subtitle">{t('hero.subtitle')}</p>
                </div>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </div>
        </>
    );
}
