import { HStack, Text, VStack } from "@chakra-ui/react";

type Props = {
    time: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    digitColor: string;
    title: "Прошло" | "Осталось";
};
export default function DigitBlock({ time, digitColor, title }: Props) {
    const { days, hours, minutes, seconds } = time;
    return (
        <VStack
            borderWidth={"1px"}
            borderRadius={"md"}
            p={5}
            minW={"150px"}
        >
            <Text>{`${title.toUpperCase()}`}</Text>

            <HStack>
                <Text>Дней:</Text>
                <Text color={digitColor}>{days}</Text>
            </HStack>

            <HStack>
                <Text>Часов:</Text>
                <Text color={digitColor}>{hours}</Text>
            </HStack>

            <HStack>
                <Text>Минут:</Text>
                <Text color={digitColor}>{minutes}</Text>
            </HStack>

            <HStack>
                <Text>Секунд:</Text>
                <Text color={digitColor}>{seconds}</Text>
            </HStack>
        </VStack>
    );
}
