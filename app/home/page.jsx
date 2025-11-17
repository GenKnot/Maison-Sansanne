import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";

export default function Home() {
    return (
        <>
            <Header3 />
            <section className="home-hero">
                <div className="container">
                    <div className="home-hero-content">
                        <h1>Maison Sansanne Home</h1>
                        <p className="subtitle">Where Light Becomes Home</p>
                        <p className="tagline">当光成为家</p>
                        <div className="intro">
                            <p>光的诗学 · 生活的温度</p>
                            <p>
                                家，是情绪的容器。<br />
                                在这里，空间的意义不止是功能，<br />
                                更是安放身体与心灵的节奏。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects-grid">
                <div className="container">
                    <p className="text-center">住宅设计项目即将上线...</p>
                </div>
            </section>
            <Footer />
        </>
    );
}
