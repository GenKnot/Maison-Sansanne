"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DualLine() {
    return (
        <section className="dual-line-section">
            <div className="dual-line-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="dual-line-item urban"
                >
                    <div className="dual-line-bg">
                        <Image
                            src="/sansanne网站/商业设计/Maison Sansanne Urban｜Civic Syntax 当节奏成为建筑。/V1.jpg"
                            alt="Maison Sansanne Urban"
                            fill
                            sizes="50vw"
                            style={{ objectFit: "cover" }}
                        />
                        <div className="dual-line-overlay"></div>
                    </div>
                    <div className="dual-line-content">
                        <h2 className="dual-line-title">Maison Sansanne Urban</h2>
                        <p className="dual-line-subtitle">Architecture of Emotion</p>
                        <p className="dual-line-tagline">理性的秩序 · 柔性的情感</p>
                        <p className="dual-line-description">
                            城市空间是流动的舞台，<br />
                            它既要承载人群的节奏，也要留下温度。
                        </p>
                        <Link href="/urban" className="dual-line-cta">
                            探索商业设计 →
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="dual-line-item home"
                >
                    <div className="dual-line-bg">
                        <Image
                            src="/sansanne网站/室内设计/Maison Sansanne Home｜Quiet Elevation 在城市的高度中，找到光与比例的平衡与宁静/X风格1.jpg"
                            alt="Maison Sansanne Home"
                            fill
                            sizes="50vw"
                            style={{ objectFit: "cover" }}
                        />
                        <div className="dual-line-overlay"></div>
                    </div>
                    <div className="dual-line-content">
                        <h2 className="dual-line-title">Maison Sansanne Home</h2>
                        <p className="dual-line-subtitle">Where Light Becomes Home</p>
                        <p className="dual-line-tagline">光的诗学 · 生活的温度</p>
                        <p className="dual-line-description">
                            家，是情绪的容器。<br />
                            在这里，空间的意义不止是功能。
                        </p>
                        <Link href="/home" className="dual-line-cta">
                            探索住宅设计 →
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
