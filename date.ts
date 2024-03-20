import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/ru";

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale("ru");

export function getComeback(startDate: Date): ComebackType {
    const now = dayjs();
    const start = dayjs(startDate);
    const end = start.add(1, "y");

    const monthsRemains = end.diff(now, "month");
    const daysRemains = end.diff(now, "days");
    const minutesRemains = end.diff(now, "minutes");
    const secondsRemains = end.diff(now, "seconds");
    const daysTotal = end.diff(start, "days");

    return {
        months: monthsRemains,
        days: daysRemains,
        minutes: minutesRemains,
        seconds: secondsRemains,
        percentage: (100 - (daysRemains / daysTotal) * 100).toFixed(2),
    };
}

export type ComebackType = {
    months: number;
    days: number;
    minutes: number;
    seconds: number;
    percentage: string;
};
