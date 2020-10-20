using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Interfaces
{
    public interface ITaskLogic
    {
        Task GetById(int id);
        int Insert(Task task);
        bool Update(Task task);
        bool Delete(Task task);
        IEnumerable<Task> GetTasksByNote(int noteId);
    }
}
