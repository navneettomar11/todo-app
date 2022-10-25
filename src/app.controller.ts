import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoItem } from './todo-item.entity';

@Controller('/todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodoList(): Promise<TodoItem[]> {
    return await this.appService.getAll();
  }

  @Get('/:id')
  async getTodoById(
    @Param('id') id: string
  ): Promise<TodoItem> {
    return this.appService.getById(id)
  }

  @Post()
  async createTodoItem(@Body() todoItem: TodoItem): Promise<TodoItem> {
    return this.appService.save(todoItem);
  }

  @Put('/:id')
  async updateTodoItem(@Param('id') id: string, @Body() todoItem: TodoItem): Promise<TodoItem> {
    return this.appService.update(id, todoItem);
  }

  @Delete('/:id')
  async deleteTodoItem(@Param('id')id: string) {
    return this.appService.delete(id);
  }
}
