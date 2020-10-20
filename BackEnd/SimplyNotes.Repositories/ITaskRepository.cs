using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.Repositories
{
    public interface ITaskRepository: IRepository<Task>
    {
        IEnumerable<Task> GetTasksByNote(int noteId);
    }
}
