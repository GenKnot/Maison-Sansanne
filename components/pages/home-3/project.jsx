"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project() {
    const urbanProjects = [
        {
            name: "Civic Syntax",
            subtitle: "当节奏成为建筑",
            description: "节奏、结构、秩序、理性",
            image: "/images/projects/urban-1.jpg"
        },
        {
            name: "Bloom Atelier",
            subtitle: "在理性的结构中，让花开成为一种温度",
            description: "都市静谧、柔光秩序、木质理性",
            image: "/images/projects/urban-2.jpg"
        },
        {
            name: "Verdant Court",
            subtitle: "几何与自然在此共呼吸",
            description: "自然、几何、平衡、宁静",
            image: "/images/projects/urban-3.jpg"
        },
        {
            name: "Digital Loft",
            subtitle: "在光与逻辑之间",
            description: "光、逻辑、理性、温度",
            image: "/images/projects/urban-4.jpg"
        },
        {
            name: "Kinetic Sanctuary",
            subtitle: "光线如能量的脉搏",
            description: "光能、运动、秩序、流动",
            image: "/images/projects/urban-5.jpg"
        }
    ];

    const homeProjects = [
        {
            name: "Flowing Light",
            subtitle: "在白与光之间，以最轻的手法",
            description: "光线、时间、柔和",
            image: "/images/projects/home-1.jpg"
        },
        {
            name: "Lunar Stillness",
            subtitle: "在柔光与石质的呼吸间",
            description: "月光、银灰、棕、极简",
            image: "/images/projects/home-2.jpg"
        },
        {
            name: "Obsidian Calm",
            subtitle: "黑曜的深沉与火光的温度",
            description: "深灰、石材、暗、光、静奢",
            image: "/images/projects/home-3.jpg"
        },
        {
            name: "Traces of Warmth",
            subtitle: "温度，是空间最克制也最动人的情绪",
            description: "触感、留白、灰米棕、柔和",
            image: "/images/projects/home-4.jpg"
        },
        {
            name: "Whispering Light",
            subtitle: "线条柔中带力，材质静中藏光",
            description: "木质、景观、呼吸、时光",
            image: "/images/projects/home-5.jpg"
        }
    ];

    const collections = [
        {
            title: "33STUDIO Urban",
            mainSubtitle: "Architecture of Emotion",
            mainDescription: "理性的秩序 · 柔性的情感",
            link: "/urban",
            projects: urbanProjects
        },
        {
            title: "33STUDIO Home",
            mainSubtitle: "Where Light Becomes Home",
            mainDescription: "光的诗学 · 生活的温度",
            link: "/home",
            projects: homeProjects
        }
    ];

    const [projectIndices, setProjectIndices] = useState([0, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setProjectIndices(prev => 
                prev.map((index, collectionIndex) => 
                    (index + 1) % collections[collectionIndex].projects.length
                )
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="project-section bg-black padding-top-140 padding-bottom-140">
            <div className="container">
                <div className="section-heading text-center mb-60">
                    <span className="subtitle text-scorpion">
                        作品系列
                    </span>
                    <h2 className="section-heading__title heading-md text-sand">
                        探索我们的设计世界
                    </h2>
                </div>
                <div className="row gutter-y-60">
                    {collections.map((collection, collectionIndex) => (
                        <div key={collectionIndex} className="col-lg-6">
                            <Link href={collection.link} className="collection-card">
                                <div className="collection-card__wrapper">
                                    <div className="collection-card__image collection-image-slider">
                                        {collection.projects.map((project, pIndex) => (
                                            <Image
                                                key={pIndex}
                                                fill
                                                src={project.image}
                                                alt={project.name}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className={`collection-slide-image ${pIndex === projectIndices[collectionIndex] ? 'active' : ''}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="collection-card__content">
                                        <h3 className="collection-card__title text-sand">
                                            {collection.title}
                                        </h3>
                                        <span className="collection-card__subtitle text-scorpion">
                                            {collection.mainSubtitle}
                                        </span>
                                        <p className="collection-card__description text-sand">
                                            {collection.mainDescription}
                                        </p>
                                        <div className="collection-card__project">
                                            <h4 className="collection-card__project-name text-sand">
                                                {collection.projects[projectIndices[collectionIndex]].name}
                                            </h4>
                                            <p className="collection-card__project-subtitle text-scorpion">
                                                {collection.projects[projectIndices[collectionIndex]].subtitle}
                                            </p>
                                            <p className="collection-card__project-desc text-scorpion">
                                                {collection.projects[projectIndices[collectionIndex]].description}
                                            </p>
                                        </div>
                                        <span className="collection-card__link text-sand">
                                            探索系列 <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
