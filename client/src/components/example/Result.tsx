import React, {useEffect, useState} from 'react';
import {DisplayWhen} from "../util/DisplayWhen";

type Props = {
    count: number;
}

export const Result = function ({count}: Props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (count % 2 == 0) {
            setVisible(true);
        } else {
            setVisible(false)
        }
    }, [count])

    return (
        <>
            <DisplayWhen visible={visible}>
                Count : {count}
            </DisplayWhen>

        </>
    )
}