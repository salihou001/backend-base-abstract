/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleSchema } from 'src/schemas/article.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleController } from './article.controller';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'Article', schema: ArticleSchema}])
  ],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
