import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ДМБ Таймер",
    description: "Таймер до демобилизации для моей любимой",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={inter.className}>{<Providers>{children}</Providers>}</body>
        </html>
    );
}
