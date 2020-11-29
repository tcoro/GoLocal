import { Moment } from "moment"

export interface IItem {
    name: string,
    amount: number,
    price: number,
    mfgDate: string,
    expireDate: string,
    modeOfPayment: string,
    deliveryMethod: string
}