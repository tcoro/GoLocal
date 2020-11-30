import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToOne, OneToMany, JoinColumn} from "typeorm";
import {Customer} from "./Customer";
import {Item} from "./Item";



@Entity()
export class Cart {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column({ type: "int" })
    customerId: number;

    @Column({ type: "int" })
    itemId: number;

    @Column({ type: "int" })
    quantity: number;

    //Realtions
    @OneToOne(type => Customer)
    @JoinColumn()
    customer: Customer;

    @OneToMany(() => Item, item => item.cart)
    item: Item[];


}
