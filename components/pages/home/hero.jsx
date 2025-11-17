"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="hero-text"
                >
                    <h1 className="hero-title">Maison Sansanne</h1>
                    <p className="hero-subtitle">光韵与气息之间</p>
                    <p className="hero-subtitle-en">Between Light and Breath</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="scroll-indicator"
                >
                    <div className="scroll-line"></div>
                </motion.div>
            </div>
        </section>
    );
}
