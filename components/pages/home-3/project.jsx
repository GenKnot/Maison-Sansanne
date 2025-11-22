"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

export default function Project() {
    const { t, locale } = useLanguage();
    
    const urbanProjects = [
        {
            name: "Civic Syntax",
            subtitle: locale === 'zh' ? "当节奏成为建筑" : locale === 'fr' ? "Quand le Rythme Devient Architecture" : "When Rhythm Becomes Architecture",
            description: locale === 'zh' ? "节奏、结构、秩序、理性" : locale === 'fr' ? "Rythme, Structure, Ordre, Rationalité" : "Rhythm, Structure, Order, Rationality",
            image: "/images/projects/urban-1.jpg"
        },
        {
            name: "Bloom Atelier",
            subtitle: locale === 'zh' ? "在理性的结构中，让花开成为一种温度" : locale === 'fr' ? "Dans la Structure Rationnelle, la Floraison Devient Chaleur" : "In Rational Structure, Bloom Becomes Warmth",
            description: locale === 'zh' ? "都市静谧、柔光秩序、木质理性" : locale === 'fr' ? "Sérénité Urbaine, Ordre Lumineux, Rationalité du Bois" : "Urban Serenity, Soft Light Order, Wood Rationality",
            image: "/images/projects/urban-2.jpg"
        },
        {
            name: "Verdant Court",
            subtitle: locale === 'zh' ? "几何与自然在此共呼吸" : locale === 'fr' ? "Où la Géométrie Rencontre la Nature" : "Where Geometry Meets Nature",
            description: locale === 'zh' ? "自然、几何、平衡、宁静" : locale === 'fr' ? "Nature, Géométrie, Équilibre, Tranquillité" : "Nature, Geometry, Balance, Tranquility",
            image: "/images/projects/urban-3.jpg"
        },
        {
            name: "Digital Loft",
            subtitle: locale === 'zh' ? "在光与逻辑之间" : locale === 'fr' ? "Entre Lumière et Logique" : "Between Light and Logic",
            description: locale === 'zh' ? "光、逻辑、理性、温度" : locale === 'fr' ? "Lumière, Logique, Rationalité, Chaleur" : "Light, Logic, Rationality, Warmth",
            image: "/images/projects/urban-4.jpg"
        },
        {
            name: "Kinetic Sanctuary",
            subtitle: locale === 'zh' ? "光线如能量的脉搏" : locale === 'fr' ? "La Lumière comme Pouls d'Énergie" : "Light as Energy's Pulse",
            description: locale === 'zh' ? "光能、运动、秩序、流动" : locale === 'fr' ? "Énergie Lumineuse, Mouvement, Ordre, Flux" : "Light Energy, Movement, Order, Flow",
            image: "/images/projects/urban-5.jpg"
        }
    ];

    const homeProjects = [
        {
            name: "Flowing Light",
            subtitle: locale === 'zh' ? "在白与光之间，以最轻的手法" : locale === 'fr' ? "Entre Blanc et Lumière, avec la Plus Légère des Touches" : "Between White and Light, with the Lightest Touch",
            description: locale === 'zh' ? "光线、时间、柔和" : locale === 'fr' ? "Lumière, Temps, Douceur" : "Light, Time, Softness",
            image: "/images/projects/home-1.jpg"
        },
        {
            name: "Lunar Stillness",
            subtitle: locale === 'zh' ? "在柔光与石质的呼吸间" : locale === 'fr' ? "Entre Lumière Douce et Respiration de Pierre" : "Between Soft Light and Stone's Breath",
            description: locale === 'zh' ? "月光、银灰、棕、极简" : locale === 'fr' ? "Clair de Lune, Gris Argenté, Brun, Minimalisme" : "Moonlight, Silver Gray, Brown, Minimalism",
            image: "/images/projects/home-2.jpg"
        },
        {
            name: "Obsidian Calm",
            subtitle: locale === 'zh' ? "黑曜的深沉与火光的温度" : locale === 'fr' ? "Profondeur d'Obsidienne et Chaleur de Flamme" : "Obsidian Depth and Firelight Warmth",
            description: locale === 'zh' ? "深灰、石材、暗、光、静奢" : locale === 'fr' ? "Gris Profond, Pierre, Obscurité, Lumière, Luxe Tranquille" : "Deep Gray, Stone, Dark, Light, Quiet Luxury",
            image: "/images/projects/home-3.jpg"
        },
        {
            name: "Traces of Warmth",
            subtitle: locale === 'zh' ? "温度，是空间最克制也最动人的情绪" : locale === 'fr' ? "La Chaleur, l'Émotion la Plus Retenue et la Plus Touchante de l'Espace" : "Warmth, the Most Restrained Yet Moving Emotion of Space",
            description: locale === 'zh' ? "触感、留白、灰米棕、柔和" : locale === 'fr' ? "Toucher, Espace Vide, Gris Beige Brun, Douceur" : "Touch, Negative Space, Gray Beige Brown, Softness",
            image: "/images/projects/home-4.jpg"
        },
        {
            name: "Whispering Light",
            subtitle: locale === 'zh' ? "线条柔中带力，材质静中藏光" : locale === 'fr' ? "Lignes Douces avec Force, Matériaux Calmes avec Lumière" : "Lines Soft with Strength, Materials Quiet with Light",
            description: locale === 'zh' ? "木质、景观、呼吸、时光" : locale === 'fr' ? "Bois, Paysage, Respiration, Temps" : "Wood, Landscape, Breathing, Time",
            image: "/images/projects/home-5.jpg"
        }
    ];

    const collections = [
        {
            title: "33STUDIO Urban",
            mainSubtitle: t('projectSection.urbanSubtitle'),
            mainDescription: t('projectSection.urbanDescription'),
            link: "/urban",
            projects: urbanProjects
        },
        {
            title: "33STUDIO Home",
            mainSubtitle: t('projectSection.homeSubtitle'),
            mainDescription: t('projectSection.homeDescription'),
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
                        {t('projectSection.subtitle')}
                    </span>
                    <h2 
                        className={`section-heading__title heading-md text-sand ${locale !== 'zh' ? 'heading-md-en' : ''}`}
                        style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.875rem)' }}
                    >
                        {t('projectSection.title')}
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
                                        <h3 className="collection-card__title text-sand" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                                            {collection.title}
                                        </h3>
                                        <span className="collection-card__subtitle text-scorpion" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)' }}>
                                            {collection.mainSubtitle}
                                        </span>
                                        <p className="collection-card__description text-sand" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', lineHeight: '2.4' }}>
                                            {collection.mainDescription}
                                        </p>
                                        <div className="collection-card__project">
                                            <h4 className="collection-card__project-name text-sand" style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)' }}>
                                                {collection.projects[projectIndices[collectionIndex]].name}
                                            </h4>
                                            <p className="collection-card__project-subtitle text-scorpion" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)' }}>
                                                {collection.projects[projectIndices[collectionIndex]].subtitle}
                                            </p>
                                            <p className="collection-card__project-desc text-scorpion" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)' }}>
                                                {collection.projects[projectIndices[collectionIndex]].description}
                                            </p>
                                        </div>
                                        <span className="collection-card__link text-sand" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)' }}>
                                            {t('projectSection.exploreCollection')} <i className="fa-solid fa-arrow-right" />
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
