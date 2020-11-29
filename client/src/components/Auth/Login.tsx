import React, {useState} from "react";
import "./login.css"

export const Login = function () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <form className={"form"}>
                <label>
                    E-Mail<br/>
                    <input type={"text"} value={email} onChange={(event) => setEmail(event.target.value)}/>
                </label>

                <label>
                    Password<br/>
                    <input type={"text"} value={password} onChange={(event) => setPassword(event.target.value)}/>
                </label>
                <br/>
                <button onClick={login}>LOGIN
                </button>
            </form>
        </div>

    )
}