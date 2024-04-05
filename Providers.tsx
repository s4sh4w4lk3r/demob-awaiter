"use client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { env } from "process";
import React, { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ChakraProvider>
            <>
                {env.NODE_ENV === "production" ?? (
                    <ColorModeScript
                        initialColorMode={"dark"}
                        key={"color-script"}
                    />
                )}

                {children}
            </>
        </ChakraProvider>
    );
}
