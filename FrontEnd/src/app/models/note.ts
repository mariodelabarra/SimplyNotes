import { Task } from './task';

export class Note {
    id: number;
    title: string;
    description: string;
    dateCreate: Date;
    userId: number;
    boardId: number;
    tasks: Task[];
}
