import { Homework } from "./Homework";
import { User } from "./User";

const firstList = [
    new Homework('AAA', 'aaa', true),
    new Homework('BBB', 'bbb', true),
    new Homework('BBB', 'ccc', true)
];
const secondList = [
    new Homework('AAA', 'aaa', false),
    new Homework('BBB', 'bbb', false),
    new Homework('BBB', 'ccc', false)
];
const thirdList = [
    new Homework('AAA', 'aaa', true),
    new Homework('BBB', 'bbb', true),
    new Homework('BBB', 'ccc', true)
];

const listOfUsers = [
    new User('Ivan', 'Ivanov', firstList),
    new User('Petr', 'Petrov', secondList),
    new User('Alexey', 'Alexeev', thirdList)
];

function foo(list: User[]): any {
    list.forEach(item => {
        console.log(item.name);
        item.list.forEach(elem => {
            console.log(`Theme is ${elem.theme} -  Task is ${elem.task} - Status is ${elem.status}`);
        });
    })
}

function countOfGoodBoys(list: User[]): number {
    const arrayOfGoodBoys: User[] = [];
    list.forEach(item => {
        if(item.list.filter(elem => elem.status).length === item.list.length)
            arrayOfGoodBoys.push(item);
    });
    return arrayOfGoodBoys.length;
}

foo(listOfUsers);
console.log(`Count of good boys - ${countOfGoodBoys(listOfUsers)}`);