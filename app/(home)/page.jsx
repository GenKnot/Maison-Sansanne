import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";
import Hero from "@/components/pages/home-3/hero";
import About from "@/components/ui/sections/about";
import Culture from "@/components/pages/home-3/culture";
import Project from "@/components/pages/home-3/project";
import Cta from "@/components/pages/home-3/cta";

export default function Home() {
    return (
        <>
            <Header3 />
            <Hero />
            <About />
            <Culture />
            <Project />
            <Cta />
            <Footer />
        </>
    );
}
