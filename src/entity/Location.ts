import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";

@Entity()
export class Location {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column({ type: "int" })
    zip: number;

    @Column("varchar", { length: 100 })
    city: string;

    @Column("varchar", { length: 150 })
    street: string;

    @Column("varchar", { length: 20 })
    housenr: string;

}
