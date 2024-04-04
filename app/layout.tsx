import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/Providers";
import Image from "next/image";
import bg from "@/public/background.jpg";

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
            <body className={inter.className}>
                {
                    <Providers>
                        <Image
                            src={bg}
                            alt="us"
                            placeholder="blur"
                            fill
                            sizes="100vw 100vh"
                            style={{
                                objectFit: "cover",
                                zIndex: -1,
                                opacity: 0.6,
                            }}
                            priority={false}
                        ></Image>
                        {children}
                    </Providers>
                }
            </body>
        </html>
    );
}
