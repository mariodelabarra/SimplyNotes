using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Implementations
{
    public class NoteLogic : INoteLogic
    {
        private readonly IUnitOfWork _unitOfWork;
        public NoteLogic(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public bool Delete(Note note)
        {
            return _unitOfWork.Note.Delete(note);
        }

        public Note GetById(int id)
        {
            return _unitOfWork.Note.GetById(id);
        }

        public int Insert(Note note)
        {
            return _unitOfWork.Note.Insert(note);
        }

        public bool Update(Note note)
        {
            return _unitOfWork.Note.Update(note);
        }
    }
}
