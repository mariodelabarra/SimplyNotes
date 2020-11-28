using SimplyNotes.Models;
using SimplyNotes.Models.Custom;
using System.Collections.Generic;

namespace SimplyNotes.Repositories
{
    public interface INoteRepository: IRepository<Note>
    {
        List<NoteCustom> GetNotesByBoard(int boardId);
        //Agrego metodos para poder ejecutar algun SP
    }
}
