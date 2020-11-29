import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";

@Entity()
export class Supply {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stamp_created: Date;

    @UpdateDateColumn()
    stamp_updated: Date;

    @Column({ type: "int" })
    farmer_id: number;

    @Column({ type: "int" })
    item_id: number;

    @Column({ type: "int" })
    purchase_type_id: number;

    @Column()
    expiry_date: Date;

}
