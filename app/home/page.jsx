"use client";
import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";
import { useLanguage } from "@/lib/i18n/context";

export default function Home() {
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
            <section className="home-hero">
                <div className="home-hero__background">
                    <img 
                        src="/images/projects/home-hero.jpg" 
                        alt="33 Studio Living"
                    />
                    <div className="home-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="home-hero-content">
                        <h1>33 Studio Living</h1>
                        <p className="subtitle">Where Light Becomes Home</p>
                        <p className="tagline">当光成为家</p>
                        <div className="intro">
                            <p>光的诗性 · 情绪的栖息</p>
                            <p>{renderText('住宅不是商业的反面，\n而是体验逻辑的更柔软版本。\n我们以柔光、触感与比例打造居者的节奏，\n在安静中呈现精确，在松弛中描绘生活的本真。')}</p>
                        </div>
                    </div>
                </div>
                <div className="home-hero__scroll-indicator"></div>
            </section>
            <section className="projects-grid padding-top-140 padding-bottom-140">
                <div className="container">
                    <div className="text-center mb-5">
                        <p style={{ fontSize: '1.25rem', color: '#999', fontWeight: 300 }}>
                            住宅设计项目即将上线...
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
