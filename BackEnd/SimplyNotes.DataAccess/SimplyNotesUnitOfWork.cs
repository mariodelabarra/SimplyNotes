using SimplyNotes.Repositories;
using SimplyNotes.UnitOfWork;

namespace SimplyNotes.DataAccess
{
    public class SimplyNotesUnitOfWork : IUnitOfWork
    {
        public SimplyNotesUnitOfWork(string connectionString)
        {
            Note = new NoteRepository(connectionString);
            User = new UserRepository(connectionString);
            Board = new BoardRepository(connectionString);
            Task = new TaskRepository(connectionString);
        }
        
        public IUserRepository User { get; private set; }
        public IBoardRepository Board { get; set; }
        public INoteRepository Note { get; private set; }
        public ITaskRepository Task { get; set; }
    }
}
