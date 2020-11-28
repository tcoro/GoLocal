import React, {useState} from 'react';
import {Button} from "./Button";
import {Link} from "react-router-dom"
import {Result} from "./Result";

export const Form = function () {
    const [count, setCount] = useState(0);

    function incCount(count:number){
        setCount(count)
    }

    return (
        <>
            <Link to="/">Home</Link><br/>
            <Button funcIncCount={incCount} count={count}/><br/>
            <Result count={count}/>
        </>
    )
}