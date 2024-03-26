import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/ru";

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale("ru");

export function getComeback({ startDate }: { startDate: Date }): ComebackType {
    const now = dayjs();
    const start = dayjs(startDate);
    const end = start.add(1, "y");

    const daysTotal = end.diff(start, "d");
    const daysRemains = end.diff(now, "d");

    const elapsed = now.diff(start);
    const remained = end.diff(now);
    const elapsedTimespan = dayjs.duration(elapsed);
    const remainedTimespan = dayjs.duration(remained);

    return {
        elapsed: {
            days: daysTotal - daysRemains,
            hours: elapsedTimespan.hours(),
            minutes: elapsedTimespan.minutes(),
            seconds: elapsedTimespan.seconds(),
        },
        remained: {
            days: daysRemains,
            hours: remainedTimespan.hours(),
            minutes: remainedTimespan.minutes(),
            seconds: remainedTimespan.seconds(),
        },
        percentage: Number.parseFloat((100 - (daysRemains / daysTotal) * 100).toFixed(2)),
    };
}

export type ComebackType = {
    elapsed: { days: number; hours: number; minutes: number; seconds: number };
    remained: { days: number; hours: number; minutes: number; seconds: number };
    percentage: number;
};
