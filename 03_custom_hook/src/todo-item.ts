export default class TodoItem {
    public done: boolean = false;

    constructor(public id: number, public text: string) {
    }
}