using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DateCreate { get; set; }
        public bool Finished { get; set; }
        public int UserCreate { get; set; }
        public int NoteId { get; set; }
    }
}
