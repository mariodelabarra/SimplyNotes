using Dapper;
using SimplyNotes.Models;
using SimplyNotes.Repositories;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace SimplyNotes.DataAccess
{
    public class TaskRepository: Repository<Task>, ITaskRepository
    {
        public TaskRepository(string connectionString): base(connectionString)
        {

        }

        public IEnumerable<Task> GetTasksByNote(int noteId)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@noteId", noteId);

            try
            {
                using(var connection = new SqlConnection(_connectionString))
                {
                    return connection.Query<Task>("dbo.GetTasksByNote",
                                                    parameters, commandType: System.Data.CommandType.StoredProcedure);
                }

            }catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
