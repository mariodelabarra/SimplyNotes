using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Implementations
{
    public class ListLogic : IListLogic
    {
        private readonly IUnitOfWork _unitOfWork;
        public ListLogic(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public bool Delete(List list)
        {
            return _unitOfWork.List.Delete(list);
        }

        public List GetById(int id)
        {
            return _unitOfWork.List.GetById(id);
        }

        public IEnumerable<List> GetPaginatedList(int page, int rows)
        {
            return _unitOfWork.List.GetPaginatedList(page, rows);
        }

        public int Insert(List list)
        {
            return _unitOfWork.List.Insert(list);
        }

        public bool Update(List list)
        {
            return _unitOfWork.List.Update(list);
        }
    }
}
