import React from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import { FarmerInfo } from './FarmerInfo';
import { FarmerItem } from './FarmerItem';
import { IFarmerInfo } from '../../commons/interface/IFarmerInfo';
import { IItem } from '../../commons/interface/IItem';


type Props = {
    farmerInfo: IFarmerInfo
    farmerItems: Array<IItem>
}

export const Farmer = function ({ farmerInfo, farmerItems }: Props) {
    return (
        <>
            {farmerInfo.name} - {farmerInfo.zipCode} - {farmerInfo.city} - {farmerInfo.street} - {farmerInfo.name} - {farmerInfo.housenumber}
            {
                farmerItems.map((item) =>
                    <FarmerItem item={item} />
                )
            }
        </>
    )
}