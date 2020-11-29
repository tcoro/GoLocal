import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToMany} from "typeorm";
import {User} from "./Supply";


@Entity()
export class Purchasetype {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stamp_created: Date;

    @UpdateDateColumn()
    stamp_updated: Date;

    @Column("varchar", { length: 100 })
    type: string;

    @OneToMany(() => Supply, supply => supply.purchasetype)
    supply: Supply[];

}
