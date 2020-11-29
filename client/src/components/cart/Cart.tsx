import React from 'react';
import { IItem } from './IItem';
import { Item } from './Item';

type Props = {
    items: Array<IItem>
}

export const Cart = function ({ items }: Props) {
    return (
        <>
            {
                items.map((item) =>
                    <Item item={item} />
                )
            }
        </>

    )
}