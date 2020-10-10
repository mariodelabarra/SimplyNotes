using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Interfaces
{
    public interface IBoardLogic
    {
        Board GetById(int id);
        int Insert(Board board);
        bool Update(Board board);
        bool Delete(Board board);

    }
}
