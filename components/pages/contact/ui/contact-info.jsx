"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

export default function ContactInfo() {
    const { t } = useLanguage();
    
    return (
        <div className="contact-text-block__wrapper">
            <div className="contact-text-block">
                <div className="contact-content__heading ">
                    <span className="subtitle">{t('contact.subtitle')}</span>
                    <h2 className="content-title heading-md" style={{ 
                        fontSize: '1.5rem', 
                        lineHeight: '2', 
                        fontWeight: '300',
                        letterSpacing: '0.05em',
                        opacity: '0.95'
                    }}>
                        {t('contact.message.line1')}<br />
                        {t('contact.message.line2')}<br /><br />
                        {t('contact.message.line3')}<br />
                        {t('contact.message.line4')}
                    </h2>
                </div>
            </div>
            <div className="contact-widgets-02">
                <div className="contact-widget-02">
                    <div className="contact-widget-02__icon">
                        <Image
                            height={22}
                            width={22}
                            src="/image/common/mail.svg"
                            alt="icon"
                        />
                    </div>
                    <span className="contact-widget-02__text">
                        info@33studio.ca
                    </span>
                </div>
            </div>
        </div>
    );
}
