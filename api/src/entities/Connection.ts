import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

import { User } from "./User";


@Entity("connections")
export class Connection {
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    socket_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}