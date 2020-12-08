using Dapper;
using SimplyNotes.Models;
using SimplyNotes.Repositories;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace SimplyNotes.DataAccess
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(string connectionString): base(connectionString)
        {

        }
        public User ValidateUser(string email, string password)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@email", email);
            parameters.Add("@password", password);

            using(var connection = new SqlConnection(_connectionString))
            {
                return connection.QueryFirstOrDefault<User>(
                    "dbo.ValidateUser", parameters,
                    commandType: System.Data.CommandType.StoredProcedure);
            }
        }

        public User GetUserByEmail(string email)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@email", email);

            using(var connection = new SqlConnection(_connectionString))
            {
                return connection.QueryFirstOrDefault<User>("dbo.GetUserByEmail",
                                               parameters,
                                               commandType: System.Data.CommandType.StoredProcedure);
            }
        }

        public int UpdateUser(User user)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@UserId", user.Id);
            parameters.Add("@Username", user.Username);
            parameters.Add("@FirstName", user.FirstName);
            parameters.Add("@LastName", user.LastName);
            parameters.Add("@Email", user.Email);
            parameters.Add("@Password", user.Password);
            parameters.Add("@Role", user.Role);
            parameters.Add("@BirthDay", user.BirthDay);

            using (var connection = new SqlConnection(_connectionString))
            {
                return connection.Execute("dbo.UpdateUser", parameters, commandType: System.Data.CommandType.StoredProcedure);
            }

        }

        public int CreateUser(User user)
        {
            try
            {
                var parameters = new DynamicParameters();
                parameters.Add("@Username", user.Username);
                parameters.Add("@FirstName", user.FirstName);
                parameters.Add("@LastName", user.LastName);
                parameters.Add("@Email", user.Email);
                parameters.Add("@Password", user.Password);
                parameters.Add("@Role", user.Role);
                parameters.Add("@DateCreate", user.DateCreate);
                parameters.Add("@BirthDay", user.BirthDay);

                using(var connection = new SqlConnection(_connectionString))
                {
                    return connection.Execute("dbo.CreateUser", parameters, commandType: System.Data.CommandType.StoredProcedure);
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
