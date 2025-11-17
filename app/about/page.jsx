import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";
import Banner from "@/components/ui/sections/banner";
import About from "@/components/ui/sections/about";
import Culture from "@/components/pages/home-3/culture";
import Philosophy from "@/components/ui/sections/philosophy";
import Cta from "@/components/pages/home-3/cta";

export default function AboutUs() {
    return (
        <>
            <Header3 />
            <Banner title="关于我们" pathName="About" />
            <About />
            <Culture />
            <Philosophy style="about" />
            <Cta />
            <Footer />
        </>
    );
}
