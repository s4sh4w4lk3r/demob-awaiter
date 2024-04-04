import { Progress } from "@chakra-ui/react";

export default function ProgressBar({ percentage, w = "full" }: { percentage: number; w?: string }) {
    return (
        <Progress
            value={percentage}
            h={"30px"}
            isAnimated
            hasStripe
            colorScheme="pink"
            w={w}
        />
    );
}
