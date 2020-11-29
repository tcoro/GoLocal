import React from "react";
import { IItem } from "../../commons/interface/IItem";

type Props = {
    item: IItem
}

export const FarmerItem = function ({ item }: Props) {
    const {name, amount, price, mfgDate, expireDate, modeOfPayment, deliveryMethod } = item;

    return(
        <li>
            {name}
            {amount}
            {price}
            {mfgDate}
            {expireDate}
            {modeOfPayment}
            {deliveryMethod}
        </li>
    )
}