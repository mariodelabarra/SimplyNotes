using Microsoft.AspNetCore.Mvc;
using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;

namespace SimplyNotes.WebAPI.Controllers
{
    [Route("api/Note")]
    public class NoteController : Controller
    {
        private readonly INoteLogic _logic;
        public NoteController(INoteLogic logic)
        {
            _logic = logic;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetById(int id)
        {
            return Ok(_logic.GetById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Note note)
        {
            if (!ModelState.IsValid) return BadRequest();
            return Ok(_logic.Insert(note));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Note note)
        {
            if(ModelState.IsValid && _logic.Update(note))
            {
                return Ok(new { Message = "The Note is Updated" });
            }
            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] Note note)
        {
            if (note.Id > 0)
                return Ok(_logic.Delete(note));
            return BadRequest();
        }

    }
}
