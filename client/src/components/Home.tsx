import React from 'react';
import './home.css'

export const Home = function () {
    return (
        <>
            <div className={"home"}>
                <div><h1>GO LOCAL</h1></div>
                <img src={"./logo_big.png"} style={{width:"10em", height:"10em"}}/>
                <div><h4> your local farmer shop</h4></div>
            </div>
        </>
    )
}