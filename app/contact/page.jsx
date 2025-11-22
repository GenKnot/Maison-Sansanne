"use client";
import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";
import ContactArea from "@/components/pages/contact/contact-area";
import Banner from "@/components/ui/sections/banner";
import { useLanguage } from "@/lib/i18n/context";

export default function Contact() {
    const { t } = useLanguage();
    
    return (
        <>
            <Header3 />
            <Banner pathName={t('contact.title')} title={t('contact.title')} />
            <ContactArea />
            <Footer />
        </>
    );
}
