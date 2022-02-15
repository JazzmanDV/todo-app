export class Todo {
    constructor(text, isDone = false) {
        this.id = Date.now().toString() + text + isDone.toString();
        this.text = text;
        this.isDone = isDone;
    }
}

export const todosSamples = [
    new Todo("Помыть посуду", false),
    new Todo("Написать книгу", true),
    new Todo("Написать вторую книгу", false),
    new Todo("Посмотреть телевизор", true),
];
