"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>;
}
