import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";

export default function Urban() {
    return (
        <>
            <Header3 />
            <section className="urban-hero">
                <div className="container">
                    <div className="urban-hero-content">
                        <h1>Maison Sansanne Urban</h1>
                        <p className="subtitle">Architecture of Emotion</p>
                        <p className="tagline">当秩序拥有了情绪</p>
                        <div className="intro">
                            <p>理性的秩序 · 柔性的情感</p>
                            <p>
                                城市空间是流动的舞台，<br />
                                它既要承载人群的节奏，也要留下温度。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects-grid">
                <div className="container">
                    <p className="text-center">商业设计项目即将上线...</p>
                </div>
            </section>
            <Footer />
        </>
    );
}
