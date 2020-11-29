import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToOne, JoinColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stamp_created: Date;

    @UpdateDateColumn()
    stamp_updated: Date;

    @Column("varchar", { length: 255 })
    email: string;

    @Column({ type: "int" })
    type_id: number;

    @Column({ type: "int" })
    secret_id: number;

    @Column("varchar", { length: 255 })
    first_name: string;

    @Column("varchar", { length: 255 })
    last_name: string;

    @OneToOne(() => Secret)
    @JoinColumn()
    secret: Secret;

}
