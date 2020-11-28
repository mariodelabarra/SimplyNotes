using SimplyNotes.Models.Custom;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.Models
{
    public class BoardList: Board
    {
        public int TotalRecords { get; set; }
        public List<NoteCustom> Notes { get; set; }
    }
}
