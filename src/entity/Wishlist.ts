import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToOne, OneToMany, JoinColumn} from "typeorm";
import {Customer} from "./Customer";
import {Item} from "./Item";

@Entity()
export class Wishlist {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column({ type: "int" })
    customerId: number;

    //Relations
    @OneToOne(type => Customer)
    @JoinColumn()
    customer: Customer;

    @OneToMany(() => Item, item => item.wishlist)
    item: Item[];
}
