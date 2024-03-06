/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { AbstractEntity } from 'src/AbstractEntity';
import { Book } from 'src/schemas/book.schema';

@Injectable()
export class BookService extends AbstractEntity<Book> {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ){
        super(bookModel)
    }
}
