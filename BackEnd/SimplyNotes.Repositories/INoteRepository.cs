using SimplyNotes.Models;
using System.Collections.Generic;

namespace SimplyNotes.Repositories
{
    public interface INoteRepository: IRepository<Note>
    {
        List<Note> GetNotesByBoard(int boardId);
        //Agrego metodos para poder ejecutar algun SP
    }
}
