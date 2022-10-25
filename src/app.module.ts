import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config-service';
import { TodoItem } from './todo-item.entity';
import { IndexController } from './index/index.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([TodoItem])
  ],
  controllers: [AppController, IndexController],
  providers: [AppService],
})
export class AppModule {}
