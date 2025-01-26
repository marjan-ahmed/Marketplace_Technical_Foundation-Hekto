import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Poppins , Josefin_Sans, Lato} from "next/font/google"; 
import ReduxProvider from "./components/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";



const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const josefin = Josefin_Sans({
  style: "normal",
  subsets : ["latin"],
  variable: "--font-josefin" 
});

const lato = Lato({
  style: "normal",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Hekto Ecommerce Wesbite",
  description: "Hekto - Your one-stop destination for stylish, durable, and affordable furniture. Explore our premium collection for every room and elevate your home’s comfort and elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} ${lato.variable}`}
      >
        <ReduxProvider>
        <Header />
        {children}
        <Toaster/>
        <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
