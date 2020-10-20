using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Implementations
{
    public class TaskLogic: ITaskLogic
    {
        private readonly IUnitOfWork _unitOfWork;

        public TaskLogic(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public bool Delete(Task task)
        {
            return _unitOfWork.Task.Delete(task);
        }

        public Task GetById(int id)
        {
            return _unitOfWork.Task.GetById(id);
        }

        public IEnumerable<Task> GetTasksByNote(int noteId)
        {
            return _unitOfWork.Task.GetTasksByNote(noteId);
        }

        public int Insert(Task task)
        {
            return _unitOfWork.Task.Insert(task);
        }

        public bool Update(Task task)
        {
            return _unitOfWork.Task.Update(task);
        }
    }
}
