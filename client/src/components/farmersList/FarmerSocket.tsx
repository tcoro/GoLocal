import React, {useEffect, useState} from "react";
import {Farmer} from "./Farmer";
import {IFarmer} from "../../commons/interface/IFarmer";
import io from 'socket.io-client';
import {SERVER_LINK} from "../../commons/config";
import {Responses} from "../../commons/enums/Responses";
import {Requests} from "../../commons/enums/Requests";
import {FarmerList} from "./FarmerList";

let socket: any

export const FarmerSocket = function () {
    const [farmerList, setFarmerList] = useState(new Array<IFarmer>());

    useEffect(() => {
        socket = io(SERVER_LINK);

        initFarmerList();

        socket.on(Responses.farmerlist, (farmerList: Array<IFarmer>) => {
            console.log("getting farmerlist", farmerList);
            setFarmerList(farmerList);
        })
    }, [])

    function initFarmerList() {
        socket.emit(Requests.farmerlist, "");
    }

    return (
        <>
            <FarmerList farmers={farmerList}/>
        </>
    )
}