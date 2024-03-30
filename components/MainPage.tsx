"use client";
import { getComeback } from "@/date";
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import DigitBlock from "./DigitBlock";
import { HStack, Text } from "@chakra-ui/react";
import useDateLocalStorage from "@/useDateLocalStorage";

type ComebackType = ReturnType<typeof getComeback>;
export default function MainPage() {
    const { date } = useDateLocalStorage();
    const [comeback, setComeback] = useState<ComebackType>(initial);

    useEffect(() => {
        setComeback(getComeback({ startDate: date }));
        const timer = setInterval(() => setComeback(getComeback({ startDate: date })), 1000);
        return () => clearTimeout(timer);
    }, [date]);

    return (
        <>
            <ProgressBar percentage={Math.floor(comeback?.percentage ?? 0)} />
            <HStack>
                <Text>Прошло:</Text>
                <DigitBlock
                    {...comeback.elapsed}
                    digitColor="cyan.300"
                />

                <Text>Осталось:</Text>
                <DigitBlock
                    {...comeback.remained}
                    digitColor="green.300"
                />
            </HStack>
        </>
    );
}

const initial: ComebackType = {
    elapsed: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    remained: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    percentage: 0,
};
