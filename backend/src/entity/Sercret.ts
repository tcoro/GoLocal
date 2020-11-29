import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";

@Entity()
export class Secret {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stamp_created: Date;

    @UpdateDateColumn()
    stamp_updated: Date;

    @Column("varchar", { length: 200 })
    sercret: string;

    @Column({ type: "tinyint" })
    reset_id: number;

}
