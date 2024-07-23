import { Entity } from "./Entity";

export interface User extends Entity
{
    // id:number;
    name:string;
    surname:string;
    gym:string;
    dob:Date;
    // email:string;
    // password:string;
}