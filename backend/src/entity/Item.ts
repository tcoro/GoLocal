import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToOne, ManyToOne, JoinColumn} from "typeorm";
import {Cart} from "./Cart";
import {Wishlist} from "./Wishlist";
import {Itemtype} from "./Itemtype";
import {Purchasetype} from "./Purchasetype";
import {Farmer} from "./Farmer";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column({ type: "int" })
    itemtypeId: number;

    @Column({ type: "int",  nullable: true, default: null })
    wishlistId: number;

    @Column({ type: "int" })
    farmerId: number;

    @Column({ type: "int" })
    purchasetypeId: number;

    @Column({ type: "int", nullable: true, default: null })
    cartId: number;

    @Column({ type: "float" })
    price: number;

    @Column("varchar", { length: 255 })
    name: string;

    @Column({ type: "tinyint", nullable: true, default: null })
    isVegan: number;

    @Column({ type: "tinyint", nullable: true, default: null })
    isBio: number;

    @Column({ type: "tinyint", nullable: true, default: null })
    isVegetarian: number;

    @Column()
    expiryDate: Date;

    // Relations
    @ManyToOne(() => Wishlist, wishlist => wishlist.item)
    wishlist: Wishlist;

    @ManyToOne(() => Cart, cart => cart.item)
    cart: Cart;

    @ManyToOne(() => Itemtype, itemtype => itemtype.item)
    itemtype: Itemtype;

    @ManyToOne(() => Farmer, farmer => farmer.item)
    farmer: Farmer;

    @ManyToOne(() => Purchasetype, purchasetype => purchasetype.item)
    purchasetype: Purchasetype;

}
