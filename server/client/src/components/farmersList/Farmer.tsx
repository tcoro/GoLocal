import React from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import { FarmerInfo } from './FarmerInfo';
import { FarmerItem } from './FarmerItem';
import { IFarmerInfo } from './IFarmerInfo';
import { IItem } from './IItem';


type Props = {
    farmerInfo: IFarmerInfo
    farmerItems: Array<IItem>
}

export const Farmer = function ({ farmerInfo, farmerItems }: Props) {
    return (
        <>
            {farmerInfo}
            {
                farmerItems.map((item) =>
                    <FarmerItem item={item} />
                )
            }
        </>
    )
}