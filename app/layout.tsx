import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Providers from "@/Providers";
import Image from "next/image";
import bg from "@/public/background.jpg";
import { Center, VStack } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ДМБ Таймер",
    description: "Таймер до демобилизации для моей любимой",
};

export const viewport: Viewport = {
    themeColor: {
        color: "#EC7063",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <link
                    rel="icon"
                    href="/favicon.ico"
                    sizes="any"
                />

                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/png"
                    sizes="256x256"
                />

                <link
                    rel="apple-touch-icon"
                    href="/apple-icon.png"
                    type="image/png"
                    sizes="256x256"
                />
            </head>
            <body
                className={inter.className}
                style={{ height: "100vh" }}
            >
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
                        ></Image>

                        <Center
                            as={"main"}
                            h={"100vh"}
                        >
                            <VStack
                                justifyContent={"center"}
                                gap={4}
                                w={"500px"}
                            >
                                {children}
                            </VStack>
                        </Center>
                    </Providers>
                }
            </body>
        </html>
    );
}
