"use client";
import { motion } from "framer-motion";

export default function Manifesto() {
    return (
        <section className="manifesto-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="manifesto-content"
                >
                    <h2 className="section-title">品牌宣言</h2>
                    <div className="manifesto-text">
                        <p className="lead-text">
                            空间不止是容器，<br />
                            而是一种光韵与气息的共鸣。
                        </p>
                        <p>
                            空间是一种情绪的回响，<br />
                            一种文化在心灵深处缓缓发酵的味道。
                        </p>
                        <p>
                            Maison Sansanne 的设计语言，<br />
                            诞生于三种文化之间的自然交融。
                        </p>
                        <p>
                            我出生在中国，成长于蒙特利尔——<br />
                            那是一座同时散发着法式浪漫与北美现代理性的城市。<br />
                            这样的成长背景，让我始终生活在多重美学的交汇处，<br />
                            也让我理解：真正的设计，不在于风格的叠加，而在于气质的平衡。
                        </p>
                        <p>
                            在东方文化的滋养下，<br />
                            我学会了克制、含蓄、让空间留有呼吸；<br />
                            在法式美学的影响中，<br />
                            我追求比例的优雅、细节的温度、光影的诗意；<br />
                            而在北美的当代精神中，<br />
                            我吸收了自由、逻辑与结构的清晰感。
                        </p>
                        <p>
                            这三种文化在 Maison Sansanne 的作品中彼此渗透：<br />
                            东方的秩序赋予空间宁静的呼吸；<br />
                            法式的优雅让光线有了情感；<br />
                            北美的现代让结构更纯粹、更自由。
                        </p>
                        <p>
                            我用东方的心境理解空间的安静，<br />
                            用法式的感性表达生活的诗意，<br />
                            再以北美的理性梳理它们的节奏与秩序。
                        </p>
                        <p>
                            于是，空间不再是形式的结果，<br />
                            而是情绪、文化与生活方式的平衡体。<br />
                            既有温度，也有理性；<br />
                            既有诗意的柔光，也有建筑的清晰。
                        </p>
                        <p className="closing-text">
                            这便是 Maison Sansanne 的设计语言——<br />
                            一种源于文化共生的温柔力量，<br />
                            一种能让空间"呼吸"的当代美学。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
