"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";

export default function Essence() {
    const { t } = useLanguage();
    
    const renderText = (text) => {
        return text.split('\n').map((line, i) => (
            <span key={i}>
                {line}
                {i < text.split('\n').length - 1 && <br />}
            </span>
        ));
    };
    
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
                        <p>{renderText(t('essence.p1'))}</p>
                        <p>{renderText(t('essence.p2'))}</p>
                        <p>{renderText(t('essence.p3'))}</p>
                        <p className="essence-closing">
                            {renderText(t('essence.closing'))}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
