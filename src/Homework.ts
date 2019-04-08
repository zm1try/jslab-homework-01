export class Homework {
    public theme: string;
    public task: string;
    public isCompleted: boolean;
    constructor(theme: string, task: string, isCompleted: boolean) {
        this.theme = theme;
        this.task = task;
        this.isCompleted = isCompleted;
    }
}
