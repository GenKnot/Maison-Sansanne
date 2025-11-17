import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";
import ContactArea from "@/components/pages/contact/contact-area";
import Banner from "@/components/ui/sections/banner";

export default function Contact() {
    return (
        <>
            <Header3 />
            <Banner pathName="联系我们" title="Contact Us" />
            <ContactArea />
            <Footer />
        </>
    );
}
