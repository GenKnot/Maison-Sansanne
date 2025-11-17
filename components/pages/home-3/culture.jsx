import Image from "next/image";

export default function Culture() {
    const cultures = [
        {
            image: "/sansanne网站/主页about/A1 代表东方的秩序.jpg",
            title: "东方的秩序",
            subtitle: "Oriental Order",
            description: "在东方文化的滋养下，我学会了克制、含蓄、让空间留有呼吸"
        },
        {
            image: "/sansanne网站/主页about/A2 代表法式的优雅.jpg",
            title: "法式的优雅",
            subtitle: "French Elegance",
            description: "在法式美学的影响中，我追求比例的优雅、细节的温度、光影的诗意"
        },
        {
            image: "/sansanne网站/主页about/A3 代表北美的现代.jpg",
            title: "北美的现代",
            subtitle: "North American Modern",
            description: "在北美的当代精神中，我吸收了自由、逻辑与结构的清晰感"
        }
    ];

    return (
        <div className="culture-section section-padding bg-white">
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-xxl-8 col-xl-9">
                        <div className="section-heading text-center">
                            <span className="subtitle">设计理念</span>
                            <h2 className="section-heading__title heading-md">
                                三种文化的交融
                            </h2>
                            <p className="mt-24">
                                这三种文化在 Maison Sansanne 的作品中彼此渗透，
                                共同构成了独特的设计语言
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row gutter-y-40">
                    {cultures.map((culture, index) => (
                        <div 
                            key={index} 
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={index * 200}
                        >
                            <div className="culture-card">
                                <div className="culture-card__image">
                                    <Image
                                        fill
                                        src={culture.image}
                                        alt={culture.title}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="culture-card__content">
                                    <h3 className="culture-card__title">
                                        {culture.title}
                                    </h3>
                                    <span className="culture-card__subtitle">
                                        {culture.subtitle}
                                    </span>
                                    <p className="culture-card__description">
                                        {culture.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
