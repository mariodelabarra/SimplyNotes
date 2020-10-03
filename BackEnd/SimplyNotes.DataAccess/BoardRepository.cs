using SimplyNotes.Models;
using SimplyNotes.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.DataAccess
{
    public class BoardRepository: Repository<Board>, IBoardRepository
    {
        public BoardRepository(string connectionString): base(connectionString)
        {

        }
    }
}
