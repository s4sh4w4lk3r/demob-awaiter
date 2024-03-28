"use client";
import useDateLocalStorage from "@/useDateLocalStorage";
import { Button, Input, Text, VStack, useToast } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function StartDatePicker() {
    const { date, setDate } = useDateLocalStorage();
    const toast = useToast();
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                const date = Object.fromEntries(new FormData(e.currentTarget).entries()).date;
                setDate(date);
                toast({ status: "success", title: "Дата сохранена!" });
            }}
        >
            <VStack>
                <Text>Выбери дату, когда началсь служба</Text>
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
                        w={"full"}
                        colorScheme="purple"
                    >
                        Вернуться на главную
                    </Button>
                </Link>
            </VStack>
        </form>
    );
}
