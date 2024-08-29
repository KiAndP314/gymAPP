import { Entity } from "./Entity";

export interface User 
{
    id:number;
    nome:string;
    cognome:string;
    dob:Date;
    courses: string[];
    email:string;
    password:string;
}