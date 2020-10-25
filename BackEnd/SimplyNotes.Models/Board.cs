using System;
using System.Collections.Generic;

namespace SimplyNotes.Models
{
    public class Board
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DateCreate { get; set; }
        public int UserCreate { get; set; }
        public List<Note> Notes { get; set; }
    }
}
