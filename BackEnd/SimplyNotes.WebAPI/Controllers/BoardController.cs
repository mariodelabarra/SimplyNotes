﻿using Microsoft.AspNetCore.Authorization;
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
    [Route("api/board")]
    [Authorize]
    public class BoardController: Controller
    {
        private readonly IBoardLogic _logic;

        public BoardController(IBoardLogic logic)
        {
            _logic = logic;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetById(int id)
        {
            return Ok(_logic.GetById(id));
        }

        [HttpGet]
        [Route("GetAllBoard/{userId:int}/{page:int}/{rows:int}")]
        public IActionResult GetAllBoard(int userId, int page, int rows)
        {
            return Ok(_logic.GetAllBoard(userId, page, rows));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Board board)
        {
            if (!ModelState.IsValid) return BadRequest();
            return Ok(_logic.Insert(board));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Board board)
        {
            if (ModelState.IsValid && _logic.Update(board))
            {
                return Ok(new { Message = "The Board is Updated" });
            }
            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] Board board)
        {
            if (board.Id > 0)
                return Ok(_logic.Delete(board));
            return BadRequest();
        }
    }
}
