using System;
using System.Collections.Generic;
using System.Text;

namespace SimplyNotes.Models.Custom
{
    public partial class NoteCustom: Note
    {
        public List<Task> Tasks { get; set; }
    }
}
