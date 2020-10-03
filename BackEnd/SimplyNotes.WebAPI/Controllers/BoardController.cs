using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplyNotes.WebAPI.Controllers
{
    [Route("api/board")]
    [Authorize]
    public class BoardController: Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public BoardController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetById(int id)
        {
            return Ok(_unitOfWork.Board.GetById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Board board)
        {
            if (!ModelState.IsValid) return BadRequest();
            return Ok(_unitOfWork.Board.Insert(board));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Board board)
        {
            if (ModelState.IsValid && _unitOfWork.Board.Update(board))
            {
                return Ok(new { Message = "The Board is Updated" });
            }
            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] Board board)
        {
            if (board.Id > 0)
                return Ok(_unitOfWork.Board.Delete(board));
            return BadRequest();
        }
    }
}
