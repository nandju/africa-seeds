import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Loader from "@/components/loading/loader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
});

export const metadata: Metadata = {
  title: "AfricaSeeds - Renforcer le secteur semencier africain",
  description:
    "AfricaSeeds s’engage à renforcer le secteur des semences en Afrique, en soutenant la sécurité alimentaire, la transformation agricole et l’accès des agriculteurs à des semences de qualité.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        
        

        <div className="font-poppins max-w-screen-2xl mx-auto">
          {/* Loader */}  
        <Loader />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
