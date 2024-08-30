import { Entity } from "./Entity";

export interface User 
{
    id:number;
    nome:string;
    cognome:string;
    dob:Date;
    abbonamenti: any[];
    email:string;
    certificato:boolean;
}