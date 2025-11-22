import Header3 from "@/components/header/header-3";
import Footer from "@/components/footer/footer";
import TheStudySeries from "@/components/pages/home/the-study-series";

export const metadata = {
    title: "The Study Series - 33 Studio",
    description: "Explorations in Texture & Light - Design as continuous inquiry"
};

export default function TheStudySeriesPage() {
    return (
        <>
            <Header3 />
            <TheStudySeries />
            <Footer />
        </>
    );
}
