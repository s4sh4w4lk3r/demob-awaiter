import { Box, HStack } from "@chakra-ui/react";

export default function ProgressBar({ percentage }: { percentage: number }) {
    const palki: JSX.Element[] = [];

    for (let i = 0; i < 99; i++) {
        if (i < percentage - 1) {
            palki.push(
                <Box
                    w={"1px"}
                    h={"30px"}
                    bgColor={"white"}
                    key={i}
                />
            );
        } else {
            palki.push(
                <Box
                    w={"1px"}
                    h={"30px"}
                    bgColor={"gray"}
                    key={i}
                />
            );
        }
    }

    return (
        <HStack
            gap={"4px"}
            wrap={"wrap"}
        >
            {palki}
        </HStack>
    );
}
