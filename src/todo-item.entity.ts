import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'todo'})
export class TodoItem {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'boolean', default: false })
    isComplete: boolean;

    @Column({ type: 'varchar', length: 300 })
    name: string;
}