using SimplyNotes.Models;
using SimplyNotes.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.DataAccess
{
    public class NoteRepository: Repository<Note>, INoteRepository
    {
        public NoteRepository(string connectionString): base(connectionString)
        {

        }

        //Agrego metodos para poder ejecutar algun SP
    }
}
