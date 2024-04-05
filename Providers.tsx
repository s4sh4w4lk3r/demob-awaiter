"use client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { env } from "process";
import React, { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ChakraProvider>
            <>
                <ColorModeScript
                    initialColorMode={"dark"}
                    key={"color-script"}
                />

                {children}
            </>
        </ChakraProvider>
    );
}
