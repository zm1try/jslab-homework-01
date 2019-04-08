import { User } from './User';
import { firstList, secondList, thirdList } from './listsOfTasks';

export const listOfUsers: User[] = [
    new User('Ivan', 'Ivanov', firstList),
    new User('Petr', 'Petrov', secondList),
    new User('Alexey', 'Alexeev', thirdList)
];