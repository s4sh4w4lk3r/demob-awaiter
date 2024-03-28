import { HStack, Text, VStack } from "@chakra-ui/react";

type Props = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    digitColor: string;
};
export default function DigitBlock({ days, hours, minutes, seconds, digitColor }: Props) {
    return (
        <VStack w={"full"}>
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
