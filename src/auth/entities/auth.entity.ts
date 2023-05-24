import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs'


@Entity()
export class Auth {

    @PrimaryGeneratedColumn()

    id: number;

    @Column()
    email: string;

    @Column()
    password: string


    @BeforeInsert()
    async hashPassword(){

        this.password = await bcrypt.hash(this.password, 10)
    }

    async validatePassword(password: string): Promise<boolean>{
        return  bcrypt.compare(password, this.password)
    }
}