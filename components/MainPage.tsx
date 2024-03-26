"use client";
import { ComebackType, getComeback } from "@/date";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

export default function MainPage() {
    useEffect(() => {
        // const timer = setInterval(() => setComeback(getComeback({ startDate: new Date("2023-03-27 12:00") })), 1000);
        const timer = setInterval(() => setComeback(getComeback({ startDate: new Date("2023-06-26 12:00") })), 1000);
        return () => clearTimeout(timer);
    }, []);

    const [comeback, setComeback] = useState<ComebackType | null>(null);

    return (
        <>
            <Text>{JSON.stringify(comeback?.remained)}</Text>
            <Text>{JSON.stringify(comeback?.elapsed)}</Text>
            <ProgressBar percentage={Math.floor(comeback?.percentage ?? 0)} />
        </>
    );
}
