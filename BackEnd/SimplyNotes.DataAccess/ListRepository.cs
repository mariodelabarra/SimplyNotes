using Dapper;
using SimplyNotes.Models;
using SimplyNotes.Repositories;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace SimplyNotes.DataAccess
{
    public class ListRepository: Repository<List>, IListRepository
    {
        public ListRepository(string connectionString): base(connectionString)
        {

        }

        public IEnumerable<List> GetPaginatedList(int page, int rows)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@page", page);
            parameters.Add("@rows", rows);

            try
            {
                using(var connection = new SqlConnection(_connectionString))
                {
                    return connection.Query<ListSP>("dbo.ListsPagedList",
                                                    parameters,
                                                    commandType: System.Data.CommandType.StoredProcedure);
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
