"use client";
import Link from "next/link";
import Navigation from "./ui/navigation";
import Image from "next/image";
import useSticky from "@/hooks/useSticky";
import HamburgerBtn from "./ui/hamburger-btn";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { useLanguage } from "@/lib/i18n/context";

export default function Header3() {
    const scrolling = useSticky(50);
    const sticky = useSticky(650);
    const { t } = useLanguage();

    return (
        <header
            className={`site-header site-header--sticky site-header--white site-header--v3 ${
                scrolling ? "scrolling" : ""
            } ${sticky ? "reveal-header" : ""}`}
        >
            <div className="container">
                <nav className="navbar site-navbar">
                    <div className="brand">
                        <Link href="/" className="brand-link">
                            <Image
                                height={80}
                                width={360}
                                className="brand-logo"
                                src="/Logo33.png"
                                alt="33 Studio"
                                priority
                                style={{ width: 'auto', height: '80px' }}
                            />
                        </Link>
                    </div>
                    <div className="menu-block-wrapper ">
                        <div className="menu-overlay" />
                        <nav className="menu-block" id="append-menu-header">
                            <Navigation />
                        </nav>
                    </div>
                    <HamburgerBtn />
                    <div className="header-cta-btn-wrapper">
                        <div className="header-group-3" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <LanguageSwitcher />
                            <a
                                href="mailto:info@33studio.com"
                                className="btn btn-primary hvr-fill-black"
                            >
                                {t('common.contact')}
                                <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
