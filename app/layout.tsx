import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"], // Inclua o suporte para o alfabeto latino
  weight: ["400", "500", "700"], // Escolha os pesos desejados
});

const montserrat = Montserrat({
  subsets: ["latin"], // Inclua o suporte para o alfabeto latino
  weight: ["400", "500", "700"], // Escolha os pesos desejados
});

export const metadata: Metadata = {
  title: "CoreTeam",
  description: "Software de gerenciamento de equipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
