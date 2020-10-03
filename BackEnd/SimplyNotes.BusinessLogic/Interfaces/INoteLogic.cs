using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Interfaces
{
    public interface INoteLogic
    {
        Note GetById(int id);
        int Insert(Note note);
        bool Update(Note note);
        bool Delete(Note note);
    }
}
