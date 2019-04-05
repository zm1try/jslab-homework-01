export class Homework {
    public theme: string;
    public task: string;
    public status: boolean;
    constructor(theme: string, task: string, status: boolean) {
        this.theme = theme;
        this.task = task;
        this.status = status;
    }
}
