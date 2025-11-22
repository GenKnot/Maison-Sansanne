"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

const footerLinks = [
    {
        labelKey: "nav.urban",
        url: "/urban",
    },
    {
        labelKey: "nav.living",
        url: "/home",
    },
    {
        labelKey: "nav.contact",
        url: "/contact",
    },
];

const footerSocialLinks = [
    {
        label: "Instagram",
        icon: "fa-brands fa-instagram",
        url: "/",
    },
    {
        label: "Pinterest",
        icon: "fa-brands fa-pinterest",
        url: "/",
    },
    {
        label: "LinkedIn",
        icon: "fa-brands fa-linkedin",
        url: "/",
    },
];

export default function Footer() {
    const { t } = useLanguage();
    const date = new Date().getFullYear();

    return (
        <div className="footer-section bg-black padding-top-140">
            <div className="container">
                <div className="footer-section__shape ">
                    <Image
                        height={217}
                        width={459}
                        src="/photo/footer-section-pattern.png"
                        alt="section pattern"
                    />
                </div>
                <div className="row row--footer-main gutter-y-50">
                    <div className="col-xl-4 col-lg-5 col-md-8">
                        <div className="footer-section__content-block">
                            <div className="footer-section__content-text">
                                <div className="footer-brand">
                                    <Image
                                        height={80}
                                        width={360}
                                        src="/Logo33.png"
                                        alt="33 Studio"
                                        style={{ width: 'auto', height: '80px' }}
                                    />
                                </div>
                                <p>
                                    {t('essenceClosing.text').split('\n').map((line, i, arr) => (
                                        <span key={i}>
                                            {line || '\u00A0'}
                                            {i < arr.length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <form action="#" className="newsletter-form-1">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                />
                                <button className="submit-button icon-arrow-corner text-primary btn-reset">
                                    <i className="fa-solid fa-arrow-right" />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="offset-xl-2 col-xl-6 offset-lg-1 col-lg-6">
                        <div className="row row--list-block">
                            <div className="col-auto">
                                <div className="footer-contact-block">
                                    <div className="single-block">
                                        <h3 className="footer-title">
                                            Find us
                                        </h3>
                                        <p>
                                            33STUDIO <br />
                                            Montreal, QC
                                            <br />
                                            Canada
                                        </p>
                                    </div>
                                    <div className="single-block">
                                        <h3 className="footer-title">
                                            get in touch
                                        </h3>
                                        <ul className="list-style-regular row-gap-8">
                                            <li>
                                                <Link href="mailto:info@33studio.ca">
                                                    info@33studio.ca
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <h3 className="footer-title">Useful Links</h3>
                                <ul className="list-style-regular">
                                    {footerLinks?.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.url}>
                                                {t(item.labelKey)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-block padding-top-140">
                <div className="container">
                    <div className="copyright-row">
                        <div className="copyright-text">
                            <p>© {date} 33 Studio. {t('common.allRightsReserved')}</p>
                        </div>
                        <ul className="divider-navigation-inline footer-social-list">
                            {footerSocialLinks?.map((item, i) => (
                                <li key={i}>
                                    <Link href={item.url}>
                                        <i className={item.icon} />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
