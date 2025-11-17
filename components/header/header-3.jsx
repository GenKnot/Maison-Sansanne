"use client";
import Link from "next/link";
import Navigation from "./ui/navigation";
import Image from "next/image";
import useSticky from "@/hooks/useSticky";
import HamburgerBtn from "./ui/hamburger-btn";

export default function Header3() {
    const scrolling = useSticky(50);
    const sticky = useSticky(650);

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
                                src="/maison-sansanne-web-logo.svg"
                                alt="Maison Sansanne"
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
                        <div className="header-group-3">
                            <a
                                href="mailto:info@maisonsansanne.com"
                                className="btn btn-primary hvr-fill-black"
                            >
                                Contact
                                <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
