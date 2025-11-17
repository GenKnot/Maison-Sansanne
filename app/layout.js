import "./globals.scss";
import { Space_Grotesk } from "next/font/google";
import Providers from "./providers";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--space-grotesk",
});

export const metadata = {
    title: "Maison Sansanne | Architecture & Interior Design",
    description: "光韵与气息之间 - Between Light and Breath. Maison Sansanne 融合东方克制、法式优雅与北美现代的建筑与室内设计工作室。",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable}`}>
            <body className="">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
