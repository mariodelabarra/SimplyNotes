using System;
using System.Collections.Generic;

namespace SimplyNotes.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateCreate { get; set; }
        public int UserId { get; set; }
        public int BoardId { get; set; }
        
    }
}
