import React from "react";
import { Farmer } from "./Farmer";
import { IFarmer } from "./IFarmer";

type Props = {
    farmers: Array<IFarmer>
}

export const FarmerList = function ({ farmers }: Props) {

    return (
        <>
            {
                farmers.map((farmer) =>
                    <Farmer farmerInfo={farmer.farmerInfo} farmerItems={farmer.items} />
                )
            }
        </>
    )
}