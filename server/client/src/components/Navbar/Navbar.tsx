import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

export const Navbar = function () {
    return (
        <>
            <div className={"navBar"}>
                <Link to={"/"}>
                    <button>Home</button>
                </Link>
                <Link to={"/farmers"}>
                    <button>Farmers</button>
                </Link>
                <Link to={"/cart"}>
                    <button>Cart</button>
                </Link>
                <Link to={"/settings"}>
                    <button>Settings</button>
                </Link>
            </div>
        </>
    )
}