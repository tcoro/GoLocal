import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stamp_created: Date;

    @UpdateDateColumn()
    stamp_updated: Date;

    @Column({ type: "int" })
    user_id: number;

    @Column({ type: "int" })
    location_id: number;
}
