import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import {OneToMany} from "typeorm";
import {User} from "./User";

@Entity()
export class Usertype {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    stampCreated: Date;

    @UpdateDateColumn()
    stampUpdated: Date;

    @Column("varchar", { length: 100 })
    type: string;

    @OneToMany(() => User, user => user.usertype)
    user: User[];

}
