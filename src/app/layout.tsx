// RootLayout.tsx
import { Sidebar } from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServicesProvider } from "@/context/services.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entrega 02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <ServicesProvider>
          <main className="flex bg-black min-h-screen">
            <Sidebar />
            <article className="flex-1 h-screen overflow-y-auto overflow-x-hidden">
              {children}
            </article>
          </main>
        </ServicesProvider>
      </body>
    </html>
  );
}
