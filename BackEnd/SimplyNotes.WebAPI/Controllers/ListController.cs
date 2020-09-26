﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplyNotes.WebAPI.Controllers
{
    [Route("api/list")]
    [Authorize]
    public class ListController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public ListController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetById(int id)
        {
            return Ok(_unitOfWork.List.GetById(id));
        }

        [HttpGet]
        [Route("GetPaginatedList/{page:int}/{rows:int}")]
        public IActionResult GetPaginatedList(int page, int rows)
        {
            return Ok(_unitOfWork.List.GetPaginatedList(page, rows));
        }

        [HttpPost]
        public IActionResult Post([FromBody] List list)
        {
            if (!ModelState.IsValid) return BadRequest();
            return Ok(_unitOfWork.List.Insert(list));
        }

        [HttpPut]
        public IActionResult Put([FromBody] List list)
        {
            if(ModelState.IsValid && _unitOfWork.List.Update(list))
            {
                return Ok(new { Message = "The List is Updated" });
            }
            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] List list)
        {
            if (list.Id > 0)
                return Ok(_unitOfWork.List.Delete(list));
            return BadRequest();
        }


    }
}
