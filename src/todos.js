let id = 0;

export class Todo {
    constructor(text, isDone = false) {
        this.id = id++;
        this.text = text;
        this.isDone = isDone;
        this.date = new Date();
    }
}

export const todos = [
    new Todo("Помыть посуду", false),
    new Todo("Написать книгу", true),
    new Todo("Написать вторую книгу", true),
    new Todo("Посмотреть телевизор", true),
];
