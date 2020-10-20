using SimplyNotes.Repositories;

namespace SimplyNotes.UnitOfWork
{
    public interface IUnitOfWork
    {
        INoteRepository Note { get; }
        IUserRepository User { get; }
        IBoardRepository Board { get; }
        ITaskRepository Task { get;  }
    }
}
