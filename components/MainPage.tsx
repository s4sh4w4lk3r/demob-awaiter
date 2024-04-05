"use client";
import { getComeback } from "@/date";
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import DigitBlock from "./DigitBlock";
import { Button, HStack, Text } from "@chakra-ui/react";
import useDateLocalStorage, { isStorageDateEmpty } from "@/useDateLocalStorage";
import { useRouter } from "next/navigation";
import { SettingsIcon } from "@chakra-ui/icons";

type ComebackType = ReturnType<typeof getComeback>;
export default function MainPage() {
    const { date } = useDateLocalStorage();
    const [comeback, setComeback] = useState<ComebackType>(initial);
    const router = useRouter();

    useEffect(() => {
        setComeback(getComeback({ startDate: date }));
        const timer = setInterval(() => setComeback(getComeback({ startDate: date })), 1000);
        return () => clearTimeout(timer);
    }, [date]);

    useEffect(() => {
        isStorageDateEmpty() ? router.push("/options") : null;
    });

    return (
        <>
            <ProgressBar
                percentage={Math.floor(comeback?.percentage ?? 0)}
                w="80%"
            />
            <Text>{`Прошло: ${comeback?.percentage ?? 0}%`}</Text>
            <HStack
                justifyContent={"center"}
                gap={4}
            >
                <DigitBlock
                    time={{ ...comeback.elapsed }}
                    digitColor="cyan.300"
                    title="Прошло"
                />

                <DigitBlock
                    time={{ ...comeback.remained }}
                    digitColor="green.300"
                    title="Осталось"
                />
            </HStack>
            <Button
                leftIcon={<SettingsIcon />}
                w={"80%"}
                onClick={() => router.push("/options")}
            >
                Настройки
            </Button>
        </>
    );
}

const initial: ComebackType = {
    elapsed: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    remained: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    percentage: 0,
};
