import { Progress } from "@chakra-ui/react";

export default function ProgressBar({ percentage }: { percentage: number }) {
    return (
        <Progress
            value={percentage}
            h={"30px"}
            isAnimated
            hasStripe
            colorScheme="pink"
            w={"full"}
        />
    );
}
