import { Homework } from './Homework';

export class User {
    private id: number;
    public name: string;
    public surname: string;
    public list: Homework[];
    constructor(name: string, surname: string, list: Homework[]) {
        this.id = Math.random();
        this.name = name;
        this.surname = surname;
        this.list = list;
        // console.log(`New user - ${this.name} - with secret ID - ${this.id}`);
    }
}