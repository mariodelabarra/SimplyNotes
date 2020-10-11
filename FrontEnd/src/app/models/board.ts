import { User } from "./user";

export class Board {
    Id: number;
    Name: string;
    Description: string;
    DateCreate: Date;
    UserId: number;
    UserList: User;
}
