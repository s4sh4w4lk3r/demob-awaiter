"use client";
import { ComebackType, getComeback } from "@/date";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function ProgressBar() {
    useEffect(() => {
        const timer = setInterval(() => setComeback(getComeback(new Date("2024-03-20"))), 1000);
        return () => clearTimeout(timer);
    }, []);

    const [comeback, setComeback] = useState<ComebackType | null>(null);

    return <Text>{JSON.stringify(comeback)}</Text>;
}
