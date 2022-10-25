import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoItem } from './todo-item.entity';

@Injectable()
export class AppService {
 
    constructor(@InjectRepository(TodoItem) private readonly repo: Repository<TodoItem>){

    }

    public async getAll(): Promise<TodoItem[]> {
      return await this.repo.find();
    }

    public async getById(id: string): Promise<TodoItem> {
      return await this.repo.findOne({where : {
        id: id
      }})
    }

    public async save(todoItem: TodoItem): Promise<TodoItem> {
      return await this.repo.save(todoItem);
    }

    public async update(id: string, todoItem: TodoItem): Promise<TodoItem> {
      try {
        const dbTodoItem = await this.getById(id);
        if(dbTodoItem) {
          todoItem.id = dbTodoItem.id;
          return await this.save(todoItem)
        }
      } catch(err) {
        throw err;
      }
    }

    public async delete(id: string) {
      await this.repo.delete({id: id})
    }
}
