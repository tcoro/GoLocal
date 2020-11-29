import React from "react";
import "./SettingsFarmer.css";


export const SettingsFarmer = function () {
    return (

        <div className="wrapper">

            <div className="inputBox">
                <input type='text' />
                <span className="text">Farmer Licence ID</span>
            </div>

            <div className="inputBox">
                <input type='text' />
                <span className="text">First Name</span>
            </div>

            <div className="inputBox">
                <input type='text' />
                <span className="text">Last Name</span>
            </div>

            <div className="inputBox">
                <input type='number' />
                <span className="text">ZIP Code</span>
            </div>

            <div className="inputBox">
                <input type='text' />
                <span className="text">City</span>
            </div>

            <div className="inputBox">
                <input type='text' />
                <span className="text">Street</span>
                <span className="line"></span>
            </div>

            <div className="inputBox">
                <input type='number' />
                <span className="text">House Number</span>
            </div>

            <div className="inputBox">
                <input type='email' />
                <span className="text">E-Mail</span>
            </div>

            <div className="col">
                <div className="inputBox">
                    <input type='password' />
                    <span className="text">Password</span>
                </div>
            </div>

            <input type="submit" value="Send"></input>

        </div >


    )
}