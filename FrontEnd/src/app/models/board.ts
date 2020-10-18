import { User } from "./user";

export class Board {
    id: number;
    name: string;
    description: string;
    dateCreate: Date;
    userId: number;
    userList: User;
}
