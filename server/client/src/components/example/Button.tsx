import React from 'react';
import "./Button.css"

type Props = {
    funcIncCount: (count:number) => void;
    count: number
}

export const Button = function ({funcIncCount, count}:Props) {

    return (
        <>
            <button onClick={() => funcIncCount(count++)} className={"myButton"}>IncreaceCount</button>
        </>
    )
}