"use client";
import { motion } from "framer-motion";

export default function Essence() {
    return (
        <section className="essence-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="essence-content"
                >
                    <div className="essence-text">
                        <p>
                            Maison Sansanne 相信，<br />
                            空间的本质，是文化、理性与情绪的平衡。
                        </p>
                        <p>
                            它在东方的克制中沉静，<br />
                            在法式的优雅中舒展，<br />
                            在北美的现代中生长。
                        </p>
                        <p>
                            我们用设计去描绘生活的节奏，<br />
                            让光有韵，气有息，<br />
                            让空间成为一种可被感知、可被记住的存在。
                        </p>
                        <p className="essence-closing">
                            光韵与气息之间，<br />
                            生活缓缓展开。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
