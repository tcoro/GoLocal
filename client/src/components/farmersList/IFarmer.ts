import { IFarmerInfo } from "./IFarmerInfo";
import { IItem } from "./IItem";

export interface IFarmer {
    items: Array<IItem>
    farmerInfo : IFarmerInfo
}