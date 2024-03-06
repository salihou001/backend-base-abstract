/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/schemas/book.schema';

@Controller('books')
export class BookController {
    constructor(
        private bookService: BookService
    ){}
    // get book
    @Get()
    async getAll():Promise<Book[]>{
        return await this.bookService.findAll();
    }
    //create book
    @Post()
    async createBook(
        @Body() book
    ){
        return await this.bookService.create(book);
    }
}
