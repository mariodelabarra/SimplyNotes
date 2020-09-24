using System;

namespace SimplyNotes.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public DateTime DateCreate { get; set; }
        public DateTime DoB { get; set; }
    }
}
