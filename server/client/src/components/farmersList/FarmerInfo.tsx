import React from "react";
import "FarmerInfo.css";
import { IFarmerInfo } from "./IFarmerInfo";

type Props = {
    farmer: IFarmerInfo
}

export const FarmerInfo = function ({ farmer }: Props) {
    const { zipCode, city, address, name, imagePath } = farmer;

    return (
        <li>

            {zipCode}

            {city}

            {address}

            {name}

           <img src={imagePath} className="farmerInfoImage" />

        </li>

    )
}
