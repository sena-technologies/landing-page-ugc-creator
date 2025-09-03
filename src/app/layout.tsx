import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "UGC Creator | Criação de Conteúdo para Marcas de Beleza",
  description: "Criação de conteúdo autêntico e profissional para marcas de beleza. Especialista em UGC para maquiagem, skincare e produtos capilares.",
  keywords: "UGC, User Generated Content, criação de conteúdo, beleza, maquiagem, skincare, cabelo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
