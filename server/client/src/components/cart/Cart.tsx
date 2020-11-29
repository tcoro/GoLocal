import React, {useState} from 'react';
import { IItem } from './IItem';
import { Item } from './Item';
import "./cart.css"

type Props = {
    items: Array<IItem>
}

export const Cart = function ({ items }: Props) {

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

    items = Array({ count: 1, name: "lel", farmer: "lol", price: 45 }, { count: 2, name: "lel", farmer: "lol", price: 45 }, { count: 3, name: "lel", farmer: "lol", price: 45 })

    let count = 0;

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
                            items.forEach(item => count += item.count * item.price)}
                        {count}
                    </td>
                </tr>
            </table>

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

               
                <button onClick={register}>Buy
                    </button>
            </form>
        </div >
        </>
    )
}