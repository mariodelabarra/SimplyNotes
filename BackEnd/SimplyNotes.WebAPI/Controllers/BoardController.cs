using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplyNotes.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class BoardController: Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IBoardLogic _logic;

        public BoardController(IUnitOfWork unitOfWork, IBoardLogic logic)
        {
            _unitOfWork = unitOfWork;
            _logic = logic;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetById(int id)
        {
            return Ok(_unitOfWork.Board.GetById(id));
        }

        [HttpGet]
        [Route("GetAllBoard/{userId:int}/{page:int}/{rows:int}")]
        public IActionResult GetAllBoard(int userId, int page, int rows)
        {
            return Ok(_unitOfWork.Board.GetAllBoard(userId, page, rows));
        }

        [HttpGet]
        [Route("GetBoardData/{boardId:int}")]
        public IActionResult GetBoardData(int boardId)
        {
            return Ok(_logic.GetBoardData(boardId));
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
