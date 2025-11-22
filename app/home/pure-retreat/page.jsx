import Header3 from "@/components/header/header-3";
import Footer from "@/components/footer/footer";
import PureRetreat from "@/components/pages/home/pure-retreat";

export const metadata = {
    title: "Pure Retreat - 33 Studio",
    description: "Bathroom Series - Where water and light create pure serenity"
};

export default function PureRetreatPage() {
    return (
        <>
            <Header3 />
            <PureRetreat />
            <Footer />
        </>
    );
}
