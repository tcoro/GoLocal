import React from "react";
import { Button } from "../example/Button";
import { IItemCart } from '../../commons/interface/IItemCart';

type Props = {
    item: IItemCart
}

export const Item = function ({ item }: Props) {
    const { count, name, farmer, price } = item;

    return (

        <tr>
            <td>{count}</td>
            <td>{name}</td>
            <td>{farmer}</td>
            <td>{price}</td>
            <td><button>Delete</button></td>
        </tr>

    )

}