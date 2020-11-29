import React from "react";
import { Button } from "../example/Button";
import { IItem } from "./IItem"

type Props = {
    item: IItem
}

export const Item = function ({ item }: Props) {
    const { count, name, farmer, price } = item;

    return (
        <>
            <span>{count}</span>
            <span>{name}</span>
            <span>{farmer}</span>
            <span>{price}</span>
            <button>Delete</button>
        </>
    )

}