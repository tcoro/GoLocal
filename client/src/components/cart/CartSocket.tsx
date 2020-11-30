import React, {useEffect, useState} from "react";
import {IFarmer} from "../../commons/interface/IFarmer";
import io from 'socket.io-client';
import {SERVER_LINK} from "../../commons/config";
import {Responses} from "../../commons/enums/Responses";
import {Requests} from "../../commons/enums/Requests";
import {Cart} from "./Cart";
import { IItemCart } from "../../commons/interface/IItemCart";

let socket: any

export const CartSocket = function () {
    const [cartList, setCartList] = useState(new Array<IItemCart>());

    useEffect(() => {
        socket = io(SERVER_LINK);

        initCartList();

        socket.on(Responses.cartlist, (cartList: Array<IItemCart>) => {
            console.log("getting cartlist", cartList);
            setCartList(cartList);
        })
    }, [])

    function emptyCart() {
        
    socket.emit(Requests.emptyCart);
    }
    function initCartList() {
        socket.emit(Requests.cartlist, "");
    }

    return (
        <>
            <Cart items={cartList} emptyCart={emptyCart}/>
        </>
    )
}