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
        <span>Farmer:</span>
            <table className="farmerTable">
                <tr>
                    <th>Name</th>
                    <th>ZIP-Code</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Housenumber</th>
                </tr>
                <tr>
                    <td> {farmerInfo.name}</td>
                    <td> {farmerInfo.zipCode} </td>
                    <td> {farmerInfo.city} </td>
                    <td> {farmerInfo.street} </td>
                    <td> {farmerInfo.housenumber}</td>
                </tr>

            </table>

            <span>Items:</span>
            <table className="itemTable">
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>MFG Date</th>
                    <th>Expire Date</th>
                    <th>Payment Method</th>
                    <th>Delivery Method</th>
                </tr>

                {
                    farmerItems.map((item) =>
                        <FarmerItem item={item} farmerName={farmerInfo.name} />
                    )
                }

            </table>

        </>
    )
}