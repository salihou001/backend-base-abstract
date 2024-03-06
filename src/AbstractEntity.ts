/* eslint-disable prettier/prettier */
export class AbstractEntity<T> {
    constructor(
        private DefaultModel:any
    ){}
    
    async create(body:T):Promise<T>{
        return this.DefaultModel.create(body);
    }

    async findAll():Promise<T[]>{
        return await this.DefaultModel.find();
    }

    
}