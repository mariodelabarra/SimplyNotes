using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Implementations
{
    public class UserLogic : IUserLogic
    {
        private readonly IUnitOfWork _unitOfWork;
        public UserLogic(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public bool Delete(User user)
        {
            return _unitOfWork.User.Delete(user);
        }

        public User GetById(int id)
        {
            return _unitOfWork.User.GetById(id);
        }

        public User GetUserByEmail(string email)
        {
            return _unitOfWork.User.GetUserByEmail(email);
        }

        public int Insert(User user)
        {
            return _unitOfWork.User.CreateUser(user);
        }

        public int Update(User user)
        {
            return _unitOfWork.User.UpdateUser(user);
        }

        public User ValidateUser(string email, string password)
        {
            return _unitOfWork.User.ValidateUser(email, password);
        }
    }
}
