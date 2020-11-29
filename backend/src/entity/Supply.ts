import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {ManyToOne} from "typeorm";
import {Purchasetype} from "./Purchasetype";
import {Item} from "./Item";

@Entity()
export class Supply {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column({ type: "int" })
    farmer_id: number;

    @Column({ type: "int" })
    itemId: number;

    @Column({ type: "int" })
    purchasetypeId: number;

    @Column({ type: "tinyint" })
    isVegan: number;

    @Column({ type: "tinyint" })
    isBio: number;

    @Column({ type: "tinyint" })
    isVegetarian: number;

    @Column()
    expiryDate: Date;

    @ManyToOne(() => Purchasetype, purchasetype => purchasetype.supply)
    purchasetype: Purchasetype;

    @OneToMany(() => Item, item => item.supply)
    item: Item[];
}
