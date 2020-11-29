import React, {useEffect, useState} from "react";
import { Farmer } from "./Farmer";
import { IFarmer } from "../../commons/interface/IFarmer";
import io from 'socket.io-client';
import {SERVER_LINK} from "../../commons/config";
import {Responses} from "../../commons/enums/Responses";
import {Requests} from "../../commons/enums/Requests";

type Props = {
    farmers: Array<IFarmer>
}

let socket:any

export const FarmerList = function ({ farmers }: Props) {
    const [farmerList, setFarmerList] = useState(new Array<IFarmer>());

    useEffect(() => {
        socket = io(SERVER_LINK);

        initFarmerList();

        socket.on(Responses.farmerlist, (farmerList:Array<IFarmer>) => {
            console.log("getting farmerlist", farmerList);
           setFarmerList(farmerList); 
        })
    }, [])

    function initFarmerList(){
        socket.emit(Requests.farmerlist, "");
    }

    return (
        <>
            {
                farmerList.map((farmer) =>
                    <Farmer farmerInfo={farmer.farmerInfo} farmerItems={farmer.items} />
                )
            }
        </>
    )
}