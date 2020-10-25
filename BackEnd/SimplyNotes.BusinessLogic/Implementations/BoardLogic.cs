using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public IEnumerable<Board> GetAllBoard(int userId, int page, int rows)
        {
            return _unitOfWork.Board.GetAllBoard(userId, page, rows);
        }

        public BoardList GetBoardData(int boardId)
        {
            Board boardAux = _unitOfWork.Board.GetById(boardId);
            BoardList boardData = new BoardList
            {
                Id = boardAux.Id,
                Name = boardAux.Name,
                Description = boardAux.Description,
                DateCreate = boardAux.DateCreate,
                UserCreate = boardAux.UserCreate
            };
            List<Note> notes = _unitOfWork.Note.GetNotesByBoard(boardId);
            List<Task> tasks = new List<Task>();
            if (notes.Count > 0)
            {
                boardData.Notes = notes;

                //Recorro las notas para buscar las tareas de cada una
                for(int i=0; i < notes.Count; i++)
                {
                    tasks = _unitOfWork.Task.GetTasksByNote(notes[i].Id).ToList();
                    if(tasks.Count > 0)
                    {
                        boardData.Notes[i].Tasks = tasks;
                    }
                }
            }

            return boardData;

        }
    }
}
