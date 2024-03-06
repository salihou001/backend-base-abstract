/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { AbstractEntity } from 'src/AbstractEntity';
import { Article } from 'src/schemas/article.schema';

@Injectable()
export class ArticleService extends AbstractEntity<Article>{
    constructor(
        @InjectModel(Article.name)
        private articleModel: mongoose.Model<Article>
    ){
        super(articleModel);
    }
}
