import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToOne, JoinColumn} from "typeorm";
import {User} from "./User";
import {Location} from "./Location";

@Entity()
export class Farmer {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column({ type: "int" })
    userId: number;

    @Column({ type: "int" })
    locationId: number;

    //Realtions
    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @OneToOne(type => Location)
    @JoinColumn()
    location: Location;
}
