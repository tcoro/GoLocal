import React from "react";
import "FarmerInfo.css";
import { IFarmerInfo } from "../../commons/interface/IFarmerInfo";

type Props = {
    farmer: IFarmerInfo
}

export const FarmerInfo = function ({ farmer }: Props) {
    const { zipCode, city, street, housenumber, name, imagePath } = farmer;

    return (
        <>

            {name}

            {zipCode}

            {city}

            {street}

            {housenumber}

            <img src={imagePath} className="farmerInfoImage" />

        </>

    )
}
