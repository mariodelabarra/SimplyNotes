using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Interfaces
{
    public interface IUserLogic
    {
        User GetById(int id);
        int Insert(User user);
        int Update(User user);
        bool Delete(User user);
        User ValidateUser(string email, string password);
        User GetUserByEmail(string email);
    }
}
