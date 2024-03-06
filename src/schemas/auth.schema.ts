/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";



@Schema({
    timestamps: true
})

export class User{

    @Prop()
    @IsString()
    firstName:string;

    @Prop()
    @IsString()
    lastName:string;

    @Prop()
    @IsString()
    phone:string;

    @Prop({unique: [true,'Duplicated email entered']})
    @IsString()
    email:string;

    @Prop()
    @IsString()
    password:string;
}

export const userSchema = SchemaFactory.createForClass(User);