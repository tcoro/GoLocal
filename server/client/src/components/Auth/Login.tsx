import React, {useEffect, useState} from "react";
import "./login.css";
import io from 'socket.io-client';
import {ILogin} from "../../commons/interface/ILogin";
import {Responses} from "../../commons/enums/Responses";
import {Requests} from "../../commons/enums/Requests";
import {SERVER_LINK} from "../../commons/config";

let socket: any;

export const Login = function () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usedEmail, setUsedEmail] = useState("")


    useEffect(() => {
        socket = io(SERVER_LINK);

        socket.on(Responses.login, ({email, response}: ILogin) => {
            console.log("got event")
            if (email == usedEmail) {
            }
        })
    }, [])

    async function login(e: any) {
        e.preventDefault();
        let request: ILogin = {email: email, password: password}

        socket.emit(Requests.login, (request))

        setUsedEmail(email);
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
                <button onClick={(e) => login(e)}>LOGIN
                </button>
            </form>
        </div>
    )
}