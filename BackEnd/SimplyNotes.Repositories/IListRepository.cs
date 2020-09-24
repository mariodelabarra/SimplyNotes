using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.Repositories
{
    public interface IListRepository: IRepository<List>
    {
        IEnumerable<List> GetPaginatedList(int page, int rows);
    }
}
