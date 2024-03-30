import "client-only";
import { useState } from "react";
import { dateFromInput } from "./zodSchemas";
export default function useDateLocalStorage(): { date: Date; setDate: (date: any) => void } {
    const [date, setState] = useState<Date>(getFromLocalStorage() ?? new Date());

    const setDate = (date: any) => {
        const dateParsed = dateFromInput.parse(date);
        setState(dateParsed);
        saveToLocalStorage(dateParsed);
    };

    return { date: date, setDate: setDate };
}

function getFromLocalStorage(): Date {
    try {
        const str = localStorage.getItem("date");
        if (str !== null && str !== "") return new Date(str);
    } catch (error) {}
    return new Date();
}

function saveToLocalStorage(date: Date) {
    try {
        localStorage.setItem("date", date.toISOString());
    } catch {}
}

export function isStorageDateEmpty() {
    try {
        const value = localStorage.getItem("date");
        if (value && value !== "") return false;
    } catch {}
    return true;
}
