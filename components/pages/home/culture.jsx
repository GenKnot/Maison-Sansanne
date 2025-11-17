"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Culture() {
    const cultures = [
        {
            image: "/sansanne网站/主页about/A1 代表东方的秩序.jpg",
            title: "东方的秩序",
            titleEn: "Eastern Order",
            description: "在东方文化的滋养下，我学会了克制、含蓄、让空间留有呼吸"
        },
        {
            image: "/sansanne网站/主页about/A2 代表法式的优雅.jpg",
            title: "法式的优雅",
            titleEn: "French Elegance",
            description: "在法式美学的影响中，我追求比例的优雅、细节的温度、光影的诗意"
        },
        {
            image: "/sansanne网站/主页about/A3 代表北美的现代.jpg",
            title: "北美的现代",
            titleEn: "North American Modern",
            description: "在北美的当代精神中，我吸收了自由、逻辑与结构的清晰感"
        }
    ];

    return (
        <section className="culture-section">
            <div className="culture-grid">
                {cultures.map((culture, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="culture-item"
                    >
                        <div className="culture-image">
                            <Image
                                src={culture.image}
                                alt={culture.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="culture-content">
                            <h3 className="culture-title">{culture.title}</h3>
                            <p className="culture-title-en">{culture.titleEn}</p>
                            <p className="culture-description">{culture.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
