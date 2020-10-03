using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.BusinessLogic.Interfaces
{
    public interface IListLogic
    {
        IEnumerable<List> GetPaginatedList(int page, int rows);
        List GetById(int id);
        int Insert(List list);
        bool Update(List list);
        bool Delete(List list);
    }
}
