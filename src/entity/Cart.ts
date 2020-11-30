import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {ManyToOne, OneToOne, OneToMany, JoinColumn} from "typeorm";
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

    @Column({ type: "int", nullable: true, default: null})
    itemId: number;

    @Column({ type: "int", nullable: true, default: null})
    quantity: number;

    //Realtions

    @ManyToOne(() => Customer, customer => customer.cart)
    customer: Customer;

    @OneToMany(() => Item, item => item.cart)
    item: Item[];


}
