"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Cta() {
    const { t, locale } = useLanguage();
    
    return (
        <div
            className="cta-section-03 overlay-07 section-padding-140"
            style={{
                backgroundImage: 'url("/images/cta/moonbeam-design.jpg")',
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="cta-content-03">
                            <div className="cta-content-03__text-block">
                                <h1 
                                    className={`cta-content-03__title heading-lg text-sand mb-40 ${locale !== 'zh' ? 'heading-lg-en' : ''}`} 
                                    style={{ 
                                        fontSize: 'clamp(1.5rem, 4.5vw, 2.75rem)', 
                                        letterSpacing: '0.02em' 
                                    }}
                                >
                                    {t('cta.title').split('\n').map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < t('cta.title').split('\n').length - 1 && <br />}
                                        </span>
                                    ))}
                                </h1>
                                <p 
                                    className="text-sand" 
                                    style={{
                                        fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', 
                                        lineHeight: '2.4', 
                                        maxWidth: '900px', 
                                        margin: '0 auto'
                                    }}
                                >
                                    {t('cta.p1')}<br />
                                    {t('cta.p2')}<br />
                                    {t('cta.p3')}
                                </p>
                            </div>
                            <div className="cta-content-03__button">
                                <Link
                                    href="/contact"
                                    className="btn btn-primary hvr-fill-black"
                                >
                                    {t('common.contact')}
                                    <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
