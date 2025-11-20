"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";

export default function Manifesto() {
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
        <section className="manifesto-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="manifesto-content"
                >
                    <h2 className="section-title">{t('manifesto.title')}</h2>
                    <div className="manifesto-text">
                        <p className="lead-text">
                            {renderText(t('manifesto.lead'))}
                        </p>
                        <p>{renderText(t('manifesto.p1'))}</p>
                        <p>{renderText(t('manifesto.p2'))}</p>
                        <p>{renderText(t('manifesto.p3'))}</p>
                        <p>{renderText(t('manifesto.p4'))}</p>
                        <p>{renderText(t('manifesto.p5'))}</p>
                        <p>{renderText(t('manifesto.p6'))}</p>
                        <p>{renderText(t('manifesto.p7'))}</p>
                        <p className="closing-text">
                            {renderText(t('manifesto.closing'))}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
