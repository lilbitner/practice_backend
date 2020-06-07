import {Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, Column} from "typeorm";
import {Client} from './Client'
@Entity()
export class Advisor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password_digest: string;

    @Column()
    business_title: string;

    @Column()
    total_assets: string;

    @Column()
    ytd_return: string;

    @Column()
    lifetime_return: string;

    @Column()
    average_exposure: number;

    @OneToMany(type => Client, client => client.advisor) 
    clients: Client[];

}
