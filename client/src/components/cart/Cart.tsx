import React, { useState } from 'react';
import { Item } from './Item';
import "./cart.css"
import { IItemCart } from '../../commons/interface/IItemCart';
import { SERVER_LINK } from '../../commons/config';
import { Requests } from '../../commons/enums/Requests';
import io from 'socket.io-client';


type Props = {
    items: Array<IItemCart>
    emptyCart: () => void;
}

export const Cart = function ({ items, emptyCart }: Props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [zipCode, setZipCode] = useState(-1);
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNr, setHouseNr] = useState(-1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function register() {
        setFirstName("")
        setLastName("")
        setZipCode(-1)
        setCity("")
        setStreet("")
        setHouseNr(-1)
        setEmail("")
        setPassword("")
    }


    let countPrice = 0;
    let countItems = 0;

    return (
        <>
            <table className="cartTable">
                <tr>
                    <th>Count</th>
                    <th>Name</th>
                    <th>Farmer</th>
                    <th>Price</th>
                </tr>
                {
                    items.map((item) =>
                        <Item item={item} />
                    )
                }
                <tr>
                    <td className="totalCost">
                        Total Cost: {
                            items.forEach(item => countPrice += item.count * item.price)}
                        {countPrice}
                        <br></br>
                        Total Items:  {
                            items.forEach(item => countItems += item.count)}
                        {countItems}

                    </td>
                </tr>
            </table>

            <button onClick={emptyCart}>Empty Cart</button>

            < div >
                <form className={"form"}>
                    <div className={"flex"}>
                        <label>
                            First Name<br />
                            <input type={"text"} value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                        </label>
                        <label>
                            Last Name<br />
                            <input type={"text"} value={lastName}
                                onChange={(event) => setLastName(event.target.value)} />
                        </label>
                    </div>
                    <div className={"flex"}>
                        <label>
                            ZIP Code<br />
                            <input type={"text"} value={zipCode}
                                onChange={(event) => setZipCode(parseInt(event.target.value))} />
                        </label>
                        <label>
                            City<br />
                            <input type={"text"} value={city} onChange={(event) => setCity(event.target.value)} />
                        </label>
                    </div>
                    <div className={"flex"}>
                        <label>
                            Street<br />
                            <input type={"text"} value={street} onChange={(event) => setStreet(event.target.value)} />
                        </label>
                        <label>
                            Number<br />
                            <input type={"text"} value={houseNr}
                                onChange={(event) => setHouseNr(parseInt(event.target.value))} />
                        </label>
                    </div>


                    <button>Buy</button>
                </form>
            </div >
        </>
    )
}

export default Cart