﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SimplyNotes.WebAPI.Controllers
{
    [Route("api/board")]
    [Authorize]
    public class TaskController: Controller
    {
        private readonly ITaskLogic _logic;
        public TaskController(ITaskLogic logic)
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
        [Route("GetTasksByNote/{noteId:int}")]
        public IActionResult GetTasksByNote(int noteId)
        {
            return Ok(_logic.GetTasksByNote(noteId));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Task task)
        {
            if (!ModelState.IsValid) return BadRequest();
            return Ok(_logic.Insert(task));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Task task)
        {
            if (ModelState.IsValid && _logic.Update(task))
            {
                return Ok(new { Message = "The Task is Updated" });
            }
            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] Task task)
        {
            if (task.Id > 0)
                return Ok(_logic.Delete(task));
            return BadRequest();
        }
    }
}