import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToOne, ManyToOne, JoinColumn} from "typeorm";
import {Cart} from "./Cart";
import {Wishlist} from "./Wishlist";
import {Itemtype} from "./Itemtype";
import {Supply} from "./Supply";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column({ type: "int" })
    typeId: number;

    @Column({ type: "int" })
    price: number;

    @Column("varchar", { length: 255 })
    name: string;

    // Relations
    @ManyToOne(() => Wishlist, wishlist => wishlist.item)
    wishlist: Wishlist;

    @ManyToOne(() => Cart, cart => cart.item)
    cart: Cart;

    @ManyToOne(() => Itemtype, itemtype => itemtype.item)
    itemtype: Itemtype;

    @ManyToOne(() => Supply, supply => supply.item)
    supply: Supply;

}
