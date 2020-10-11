using Dapper;
using SimplyNotes.Models;
using SimplyNotes.Repositories;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace SimplyNotes.DataAccess
{
    public class BoardRepository: Repository<Board>, IBoardRepository
    {
        public BoardRepository(string connectionString): base(connectionString)
        {

        }

        public IEnumerable<Board> GetAllBoard(int userId, int page, int rows)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@userId", userId);
            parameters.Add("@page", page);
            parameters.Add("@rows", rows);

            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    return connection.Query<BoardList>("dbo.GetAllBoard",
                                                    parameters,
                                                    commandType: System.Data.CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
