import {Requests} from "./client/src/commons/enums/Requests";
import {Responses} from "./client/src/commons/enums/Responses";
import {IFarmer} from "./client/src/commons/interface/IFarmer"
import { IItem } from "./client/src/commons/interface/IItem";
import { IItemCart } from "./client/src/commons/interface/IItemCart";
import { IFarmerInfo } from "./client/src/commons/interface/IFarmerInfo";

const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const moment = require("moment");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "/client/build")));

//##############################################################################
//static variables

//#############################
//Items:

let chicken: IItem = {
    name: "chicken",
    amount: 10,
    deliveryMethod: "pickup",
    expireDate: moment().calendar(),
    mfgDate: moment().calendar(),
    modeOfPayment: "Paypal",
    price: 10,
}

let potato: IItem = {
    name: "potato",
    amount: 200,
    deliveryMethod: "delivery",
    expireDate: moment().calendar(),
    mfgDate: moment().calendar(),
    modeOfPayment: "Paypal",
    price: 2,
}

let tomato: IItem = {
    name: "tomato",
    amount: 100,
    deliveryMethod: "delivery",
    expireDate: moment().calendar(),
    mfgDate: moment().calendar(),
    modeOfPayment: "Paypal",
    price: 1,
}

//#############################
//FarmerInfos:
let farmerInfo1: IFarmerInfo = {
    street: "homestreet",
    housenumber: 5,
    city: "Kiel",
    name: "Gustav",
    zipCode: 12534,
}

let farmerInfo2: IFarmerInfo = {
    street: "Rendsburger Landstraße",
    housenumber: 510,
    city: "Kiel",
    name: "Hof Wittschap",
    zipCode: 24111
}

//#############################
//Farmers:

let farmer1: IFarmer = {farmerInfo: farmerInfo1, items:[chicken],
}

let farmer2: IFarmer = {farmerInfo: farmerInfo2, items:[chicken, potato],
}

let farmerList: Array<IFarmer> = [farmer1, farmer2]

//##############################################################################
let cartList: Array<IItemCart> = [];

io.on("connection", (socket) => {

    socket.on(Requests.login, ({email: email, password: password}) => {
        console.log("Login request");
        let response = false;
        io.emit(Responses.login, {email:email, response:response})
    })

    socket.on(Requests.farmerlist, () => {
        console.log("famerlist request")
        io.emit(Responses.farmerlist, farmerList)
    })

    socket.on(Requests.cartlist, () => {
        console.log("cartlist request")
        io.emit(Responses.cartlist, cartList)
    })

    socket.on(Requests.addToCart, (item:IItemCart) => {
        cartList.push(item);
        io.emit(Responses.cartlist, cartList)
    })
})


const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));