using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Implementations
{
    public class BoardLogic : IBoardLogic
    {
        private readonly IUnitOfWork _unitOfWork;
        public BoardLogic(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public bool Delete(Board board)
        {
            return _unitOfWork.Board.Delete(board);
        }

        public Board GetById(int id)
        {
            return _unitOfWork.Board.GetById(id);
        }

        public int Insert(Board board)
        {
            return _unitOfWork.Board.Insert(board);
        }

        public bool Update(Board board)
        {
            return _unitOfWork.Board.Update(board);
        }
    }
}
