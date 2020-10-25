import { Note } from "./note";

export class Board {
    id: number;
    name: string;
    description: string;
    dateCreate: Date;
    userCreate: number;
    notes: Note[];
}
