using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Interfaces
{
    public interface IBoardLogic
    {
        Board GetById(int id);
        IEnumerable<Board> GetAllBoard(int userId, int page, int rows);
        BoardList GetBoardData(int boardId);
        int Insert(Board board);
        bool Update(Board board);
        bool Delete(Board board);

    }
}
