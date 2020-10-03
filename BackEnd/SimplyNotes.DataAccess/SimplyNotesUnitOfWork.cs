using SimplyNotes.Repositories;
using SimplyNotes.UnitOfWork;

namespace SimplyNotes.DataAccess
{
    public class SimplyNotesUnitOfWork : IUnitOfWork
    {
        public SimplyNotesUnitOfWork(string connectionString)
        {
            Note = new NoteRepository(connectionString);
            List = new ListRepository(connectionString);
            Board = new BoardRepository(connectionString);
        }
        public INoteRepository Note { get; private set; }
        public IListRepository List { get; private set; }
        public IBoardRepository Board { get; private set; }
    }
}
