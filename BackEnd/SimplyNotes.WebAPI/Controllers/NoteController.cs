using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;

namespace SimplyNotes.WebAPI.Controllers
{
    [Route("api/Note")]
    [Authorize]
    public class NoteController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public NoteController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetById(int id)
        {
            return Ok(_unitOfWork.Note.GetById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Note note)
        {
            if (!ModelState.IsValid) return BadRequest();
            return Ok(_unitOfWork.Note.Insert(note));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Note note)
        {
            if(ModelState.IsValid && _unitOfWork.Note.Update(note))
            {
                return Ok(new { Message = "The Note is Updated" });
            }
            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] Note note)
        {
            if (note.Id > 0)
                return Ok(_unitOfWork.Note.Delete(note));
            return BadRequest();
        }

    }
}
