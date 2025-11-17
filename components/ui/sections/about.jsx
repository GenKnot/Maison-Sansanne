import Image from "next/image";

export default function About() {
    return (
        <div className="about-section padding-top-140">
            <div className="container">
                <div className="about-section__wrapper border-bottom padding-bottom-140">
                    <div className="row gutter-x-40 align-items-center row align-items-center justify-content-center gutter-y-40">
                        <div
                            className="col-xl-5  col-lg-5 col-md-6 col-xs-7 col-8"
                            data-aos-duration={1000}
                            data-aos="fade-right"
                        >
                            <div className="about-image-3">
                                <Image
                                    height={600}
                                    width={500}
                                    src="/maison-sansanne-logo.svg"
                                    alt="Maison Sansanne"
                                    className="w-100 h-auto"
                                />
                            </div>
                        </div>
                        <div
                            className="offset-xl-1  col-xxl-6 col-xl-6 col-lg-7 col-md-8 col-auto"
                            data-aos-duration={1000}
                            data-aos="fade-left"
                        >
                            <div className="content-text-block-wrapper">
                                <div className="content-text-block">
                                    <span className="subtitle">
                                        品牌宣言
                                    </span>
                                    <h2 className="content-title heading-md mb-32">
                                        空间不止是容器，而是一种光韵与气息的共鸣
                                    </h2>
                                    <p className="mb-24">
                                        我出生在中国，成长于蒙特利尔——那是一座同时散发着法式浪漫与北美现代理性的城市。
                                        这样的成长背景，让我始终生活在多重美学的交汇处，也让我理解：真正的设计，不在于风格的叠加，而在于气质的平衡。
                                    </p>
                                    <p>
                                        在东方文化的滋养下，我学会了克制、含蓄、让空间留有呼吸；
                                        在法式美学的影响中，我追求比例的优雅、细节的温度、光影的诗意；
                                        而在北美的当代精神中，我吸收了自由、逻辑与结构的清晰感。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
