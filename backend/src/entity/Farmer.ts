import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToOne, OneToMany, JoinColumn} from "typeorm";
import {User} from "./User";
import {Location} from "./Location";
import {Item} from "./Item";

@Entity()
export class Farmer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    farmerLicence: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column({ type: "int" })
    userId: number;

    @Column({ type: "int" })
    locationId: number;

    @Column({ type: "int",  nullable: true, default: null })
    supplyId: number;

    //Realtions
    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @OneToOne(type => Location)
    @JoinColumn()
    location: Location;

    @OneToMany(() => Item, item => item.farmer)
    item: Item[];
}
