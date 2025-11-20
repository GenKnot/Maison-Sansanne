"use client";
import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";
import { useLanguage } from "@/lib/i18n/context";

export default function Urban() {
    const { t } = useLanguage();
    
    const renderText = (text) => {
        return text.split('\n').map((line, i) => (
            <span key={i}>
                {line}
                {i < text.split('\n').length - 1 && <br />}
            </span>
        ));
    };
    
    return (
        <>
            <Header3 />
            <section className="urban-hero">
                <div className="urban-hero__background">
                    <img 
                        src="/images/projects/civic-canopy/S1.jpg" 
                        alt="33 Studio Urban"
                    />
                    <div className="urban-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="urban-hero-content">
                        <h1>{t('urban.title')}</h1>
                        <p className="subtitle">{t('urban.subtitle')}</p>
                        <p className="tagline">{t('urban.tagline')}</p>
                        <div className="intro">
                            <p>{t('urban.intro1')}</p>
                            <p>{renderText(t('urban.intro2'))}</p>
                        </div>
                    </div>
                </div>
                <div className="urban-hero__scroll-indicator"></div>
            </section>
            <section className="projects-grid padding-top-140 padding-bottom-140">
                <div className="container">
                    <div className="row gutter-y-40">
                        <div className="col-lg-6">
                            <a href="/urban/civic-syntax" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/civic-syntax/V1.jpg" 
                                        alt="Civic Syntax"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        {t('projects.civicSyntax')}
                                    </h3>
                                    <p className="project-card__subtitle">
                                        {t('civicSyntax.subtitle')}
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/urban/chromatic-playform" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/chromatic-playform/ET2.jpg" 
                                        alt="Chromatic Playform"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        {t('projects.chromaticPlayform')}
                                    </h3>
                                    <p className="project-card__subtitle">
                                        {t('chromaticPlayform.subtitle')}
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/urban/verdant-court" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/verdant-court/F1.jpg" 
                                        alt="Verdant Court"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        {t('projects.verdantCourt')}
                                    </h3>
                                    <p className="project-card__subtitle">
                                        {t('verdantCourt.subtitle')}
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/urban/civic-canopy" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/civic-canopy/S1.jpg" 
                                        alt="Civic Canopy"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        {t('projects.civicCanopy')}
                                    </h3>
                                    <p className="project-card__subtitle">
                                        {t('civicCanopy.subtitle')}
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/urban/bloom-atelier" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/bloom-atelier/C5.jpg" 
                                        alt="Bloom Atelier"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        {t('projects.bloomAtelier')}
                                    </h3>
                                    <p className="project-card__subtitle">
                                        在理性的结构中，让花开成为一种温度
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/urban/digital-loft" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/digital-loft/g5.jpg" 
                                        alt="Digital Loft"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Digital Loft
                                    </h3>
                                    <p className="project-card__subtitle">
                                        在光与逻辑之间，理性找到它的温度
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/urban/cyber-reverb" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/cyber-reverb/yd1.jpg" 
                                        alt="Cyber Reverb"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Cyber Reverb
                                    </h3>
                                    <p className="project-card__subtitle">
                                        当光与声重叠，空间成为城市的回声
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/urban/kinetic-atelier" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/kinetic-atelier/X1.jpg" 
                                        alt="Kinetic Atelier"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Kinetic Atelier
                                    </h3>
                                    <p className="project-card__subtitle">
                                        动势陈列 · 关于力量与当代男性气质的表达
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
