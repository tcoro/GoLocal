import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToOne, ManyToOne, JoinColumn} from "typeorm";
import {Secret} from "./Secret";
import {Usertype} from "./Usertype";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column({ type: "int" })
    typeId: number;

    @Column({ type: "int" })
    secretId: number;

    @Column("varchar", { length: 255 })
    email: string;

    @Column("varchar", { length: 255 })
    firstName: string;

    @Column("varchar", { length: 255 })
    lastName: string;

    // Relations
    @OneToOne(type => Secret)
    @JoinColumn()
    secret: Secret;

    @ManyToOne(() => Usertype, usertype => usertype.user)
    usertype: Usertype;

}
