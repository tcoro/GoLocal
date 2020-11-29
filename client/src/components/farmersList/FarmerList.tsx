import React, {useEffect, useState} from "react";
import {Farmer} from "./Farmer";
import {IFarmer} from "../../commons/interface/IFarmer";
import io from 'socket.io-client';
import {SERVER_LINK} from "../../commons/config";
import {Responses} from "../../commons/enums/Responses";
import {Requests} from "../../commons/enums/Requests";

type Props = {
    farmers: Array<IFarmer>
}

export const FarmerList = function ({farmers}: Props) {

    return (
        <>
            {farmers.map((farmer) => {
                return (
                    <Farmer farmerInfo={farmer.farmerInfo} farmerItems={farmer.items}/>
                )
            })}
        </>
    )
}