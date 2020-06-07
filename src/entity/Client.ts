import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from "typeorm";
import {Advisor} from './Advisor'
@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_title: string;

    @Column()
    number_of_portfolios: number;

    @Column()
    assets: string;

    @Column()
    change_in_assets: string;

    @ManyToOne(type => Advisor, advisor => advisor.clients)
    advisor: Advisor;

}
