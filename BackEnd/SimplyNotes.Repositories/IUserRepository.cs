﻿using SimplyNotes.Models;

namespace SimplyNotes.Repositories
{
    public interface IUserRepository: IRepository<User>
    {
        User ValidateUser(string email, string password);
        User GetUserByEmail(string email);
        int UpdateUser(User user);
        int CreateUser(User user);
    }
}
