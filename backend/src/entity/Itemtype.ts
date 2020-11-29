import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToMany} from "typeorm";
import {Item} from "./Item";

@Entity()
export class Itemtype {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column("varchar", { length: 100 })
    type: string;

    @OneToMany(() => Item, item => item.itemtype)
    item: Item[];

}
