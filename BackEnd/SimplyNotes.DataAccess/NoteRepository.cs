using Dapper;
using SimplyNotes.Models;
using SimplyNotes.Repositories;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SimplyNotes.DataAccess
{
    public class NoteRepository: Repository<Note>, INoteRepository
    {
        public NoteRepository(string connectionString): base(connectionString)
        {

        }

        public List<Note> GetNotesByBoard(int boardId)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@boardId", boardId);

            try
            {
                using(var connection = new SqlConnection(_connectionString))
                {
                    return connection.Query<Note>("dbo.GetNotesByBoard",
                                                   parameters,
                                                   commandType: System.Data.CommandType.StoredProcedure).ToList();
                }
            }catch(Exception ex)
            {
                throw ex;
            }
        }
        //Agrego metodos para poder ejecutar algun SP
    }
}
