import React from "react";
import { IItem } from "../../commons/interface/IItem";
import {SERVER_LINK} from "../../commons/config";
import {Responses} from "../../commons/enums/Responses";
import { Requests } from "../../commons/enums/Requests";
import { IItemCart } from "../../commons/interface/IItemCart";
import io from 'socket.io-client';

type Props = {
    item: IItem
    farmerName : string
}
let socket: any
function onItemClick(e:any, item : IItem, name:string) : any {
    e.preventDefault();
    socket = io(SERVER_LINK);
    var itemCart : IItemCart = {count:1, name: item.name, farmer:name, price: item.price}

    socket.emit(Requests.addToCart, itemCart);

}

export const FarmerItem = function ({ item, farmerName }: Props) {
    const { name, amount, price, mfgDate, expireDate, modeOfPayment, deliveryMethod } = item;

    return (
        <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{price}</td>
            <td>{mfgDate}</td>
            <td>{expireDate}</td>
            <td>{modeOfPayment}</td>
            <td>{deliveryMethod}</td>
            <button onClick={(e) => onItemClick(e, item, farmerName)}>Add To Cart</button>
        </tr>
    )
}