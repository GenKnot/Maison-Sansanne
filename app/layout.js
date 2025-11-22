import "./globals.scss";
import { Space_Grotesk } from "next/font/google";
import Providers from "./providers";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--space-grotesk",
});

export const metadata = {
    title: "33 Studio | Architecture & Interior Design",
    description: "Where cultures converge, and light defines the architecture within. 33 Studio blends Eastern restraint, French elegance, and North American modernity in architecture and interior design.",
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
