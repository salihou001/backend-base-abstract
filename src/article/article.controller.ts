/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from 'src/schemas/article.schema';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService:ArticleService
    ){}
    @Get()
    async getAll():Promise<Article[]>{
        return this.articleService.findAll();
    }

    @Post()
    create(
        @Body() body
    ):Promise<Article>{
        return this.articleService.create(body);
    }
}
