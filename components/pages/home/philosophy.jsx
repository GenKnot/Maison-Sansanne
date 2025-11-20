"use client";
import { motion } from "framer-motion";

export default function Philosophy() {
    return (
        <section className="philosophy-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="philosophy-content"
                >
                    <h2 className="section-title">设计理念</h2>
                    <p className="section-subtitle">Design Philosophy</p>
                    <div className="philosophy-text">
                        <p className="lead-text">
                            光，是时间的节奏；<br />
                            气息，是情绪的温度。
                        </p>
                        <p>
                            33STUDIO 以光为线索、以材质为语言、以生活为核心，<br />
                            在理性结构与情感体验之间寻找平衡。
                        </p>
                        <p>
                            我们相信，美并非装饰的叠加，<br />
                            而是结构、比例与情绪之间的秩序。<br />
                            真正的设计，不是取悦眼睛，<br />
                            而是让人安静下来，感受生活的流动与温度。
                        </p>
                        <p>
                            设计对我而言，是一种"慢"的表达——<br />
                            光影的转折、时间的沉淀、情绪的回声。<br />
                            它不追求惊艳，而追求一种被理解的宁静。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
