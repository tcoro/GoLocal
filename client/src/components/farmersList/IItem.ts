import { Moment } from "moment"

export interface IItem {
    price: number
    mfgDate: Moment
    expireDate: Moment
    modeOfPayment: string
    deliveryMethod: string
}