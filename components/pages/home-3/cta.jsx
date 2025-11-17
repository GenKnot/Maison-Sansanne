import Link from "next/link";

export default function Cta() {
    return (
        <div
            className="cta-section-03 overlay-07 section-padding-140"
            style={{
                backgroundImage: 'url("/sansanne网站/室内设计/Maison Sansanne Home｜Lunar Stillness 在柔光与石质的呼吸间，理性与诗意共存，光成为秩序的语言。/Moonbeam色调设计5.jpg")',
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="cta-content-03">
                            <div className="cta-content-03__text-block">
                                <h1 className="cta-content-03__title heading-lg text-sand mb-40">
                                    光韵与气息之间，生活缓缓展开
                                </h1>
                                <p className="text-sand" style={{fontSize: '1.25rem', lineHeight: '2', maxWidth: '900px', margin: '0 auto'}}>
                                    Maison Sansanne 相信，空间的本质，是文化、理性与情绪的平衡。
                                    它在东方的克制中沉静，在法式的优雅中舒展，在北美的现代中生长。
                                    我们用设计去描绘生活的节奏，让光有韵，气有息，
                                    让空间成为一种可被感知、可被记住的存在。
                                </p>
                            </div>
                            <div className="cta-content-03__button">
                                <Link
                                    href="/contact"
                                    className="btn btn-primary hvr-fill-black"
                                >
                                    开启合作
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
