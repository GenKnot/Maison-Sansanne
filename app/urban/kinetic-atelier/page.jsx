"use client";
import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";
import KineticAtelierContent from "@/components/pages/urban/kinetic-atelier";
import "./kinetic-atelier.scss";

export default function KineticAtelierPage() {
    return (
        <>
            <Header3 />
            <KineticAtelierContent />
            <Footer />
        </>
    );
}
