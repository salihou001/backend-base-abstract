import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Todo } from './todo.model';

@Controller('second')
export class SecondController {
    listTodo:Array<Todo> = [];
    @Get()
    getTodos(){
        return this.listTodo;
    }

    @Post()
    addTodos(
        @Body() newTodo
    ){
        if(this.listTodo.length){
            newTodo.id = this.listTodo[this.listTodo.length-1].id + 1;
        }else{
            newTodo.id = 1;
        }
        this.listTodo.push(newTodo)
        return newTodo;
    }

    @Delete()
    deleteTodos(){
        console.log("Supprimer une Todo");
        return "Supprimer une Todo";
    }

    @Put()
    modifierTodos(){
        console.log("Mettre à jour une Todo");
        return "Mettre à jour une Todo";
    }
}
