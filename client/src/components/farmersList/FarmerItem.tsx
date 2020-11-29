import React from "react";
import { IItem } from "./IItem";

type Props = {
    item: IItem
}

export const FarmerItem = function ({ item }: Props) {
    const { price, mfgDate, expireDate, modeOfPayment, deliveryMethod } = item;

    return(
        <li>
            {price}
            {mfgDate}
            {expireDate}
            {modeOfPayment}
            {deliveryMethod}
        </li>
    )
}