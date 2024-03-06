/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";



@Schema({
    timestamps: true
})

export class Article{

    @Prop()
    @IsString()
    image:string;

    @Prop()
    @IsString()
    description:string;

    @Prop()
    @IsString()
    marque:string;

    @Prop()
    @IsString()
    second_price:number;
    
    @Prop()
    @IsString()
    first_price:number;
    
    @Prop()
    @IsString()
    evaluation:number;
    
    @Prop()
    @IsString()
    taux_reduction:number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);