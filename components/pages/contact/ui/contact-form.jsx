"use client";
import { useLanguage } from "@/lib/i18n/context";

export default function ContactForm() {
    const { t } = useLanguage();
    
    return (
        <div className="contact-form-box">
            <h3 className="contact-form__title">{t('contact.subtitle')}</h3>
            <form action="/">
                <div className="row gutter-y-default justify-content-center">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            placeholder={t('contact.form.namePlaceholder')}
                            className="form-control"
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            type="text"
                            placeholder={t('contact.form.phonePlaceholder')}
                            className="form-control"
                        />
                    </div>
                    <div className="col-lg-12">
                        <input
                            type="email"
                            placeholder={t('contact.form.emailPlaceholder')}
                            className="form-control"
                        />
                    </div>
                    <div className="col-lg-12">
                        <textarea
                            name="message"
                            placeholder={t('contact.form.messagePlaceholder')}
                            className="form-control"
                            defaultValue={""}
                        />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary hvr-fill-black">
                            {t('contact.form.submit')}
                            <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
