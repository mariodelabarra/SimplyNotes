using SimplyNotes.Repositories;

namespace SimplyNotes.UnitOfWork
{
    public interface IUnitOfWork
    {
        INoteRepository Note { get; }
        IListRepository List { get; }
        IUserRepository User { get; }
    }
}
