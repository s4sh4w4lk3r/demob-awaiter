"use client";
import useDateLocalStorage, { isStorageDateEmpty } from "@/useDateLocalStorage";
import { Button, Input, Text, VStack, useToast } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

export default function StartDatePicker() {
    const { date, setDate } = useDateLocalStorage();
    const toast = useToast();
    const [isInitial, setIsInitial] = useState<boolean>(isStorageDateEmpty());
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                const date = Object.fromEntries(new FormData(e.currentTarget).entries()).date;
                setDate(date);
                toast({ status: "success", title: "Дата сохранена!" });
                setIsInitial(false);
            }}
        >
            <VStack>
                <Text>Выбери дату, когда началась служба</Text>
                <Input
                    defaultValue={date.toISOString().split("T")[0]}
                    type="date"
                    name="date"
                    w={"full"}
                ></Input>
                <Button
                    type="submit"
                    w={"full"}
                    colorScheme="green"
                >
                    Сохранить
                </Button>

                <Link
                    href={"/"}
                    style={{ width: "100%" }}
                >
                    <Button
                        hidden={typeof window !== "undefined" ? isInitial : false}
                        w={"full"}
                        colorScheme="purple"
                        key={"da"}
                    >
                        Вернуться на главную
                    </Button>
                </Link>
            </VStack>
        </form>
    );
}

// TODO: сделать дейтпикер посередине, либо в виде диалогового окна
