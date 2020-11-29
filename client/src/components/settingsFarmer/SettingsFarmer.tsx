import React, { useState } from "react";


export const SettingsFarmer = function () {

    const [farmerLID, setFarmerLID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [zipCode, setZipCode] = useState(-1);
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNr, setHouseNr] = useState(-1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function register() {
        setFarmerLID("")
        setFirstName("")
        setLastName("")
        setZipCode(-1)
        setCity("")
        setStreet("")
        setHouseNr(-1)
        setEmail("")
        setPassword("")
    }

    return (

        < div >
            <form className={"form"}>
                <label>
                    Farmer Licence ID<br />
                    <input type={"text"} value={farmerLID} onChange={(event) => setFarmerLID(event.target.value)} />
                </label>
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

                <label>
                    E-Mail<br />
                    <input type={"text"} value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>

                <label>
                    Password<br />
                    <input type={"text"} value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br />
                <button onClick={register}>CONFIRM
                    </button>
            </form>
        </div >

    )
}

