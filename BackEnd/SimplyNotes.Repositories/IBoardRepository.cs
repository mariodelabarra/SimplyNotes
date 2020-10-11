using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.Repositories
{
    public interface IBoardRepository: IRepository<Board>
    {
        IEnumerable<Board> GetAllBoard(int userId, int page, int rows);
    }
}
