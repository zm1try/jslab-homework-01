import { User } from './User'
import { listOfUsers } from './listOfUsers';

function foo(list: User[]): any {
    list.forEach(item => {
        console.log(item.name);
        item.list.forEach(elem => {
            let complited: string = elem.isCompleted ? 'Complited' : 'Not complited';
            console.log(`Theme is ${elem.theme} -  Task is ${elem.task} - ${complited}`);
        });
    })
}

function countOfGoodBoys(list: User[]): number {
    const arrayOfGoodBoys: User[] = [];
    list.forEach(item => {
        if(item.list.filter(elem => elem.isCompleted).length === item.list.length)
            arrayOfGoodBoys.push(item);
    });
    return arrayOfGoodBoys.length;
}

foo(listOfUsers);
console.log(`Count of good boys - ${countOfGoodBoys(listOfUsers)}`);