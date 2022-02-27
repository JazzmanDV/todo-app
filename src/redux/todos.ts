export interface ITodo {
    id: string;
    text: string;
    isDone: boolean;
}

export class Todo implements ITodo {
    id: string;
    text: string;
    isDone: boolean;

    constructor(text: string, isDone = false) {
        this.id = Date.now().toString() + text + isDone.toString();
        this.text = text;
        this.isDone = isDone;
    }
}