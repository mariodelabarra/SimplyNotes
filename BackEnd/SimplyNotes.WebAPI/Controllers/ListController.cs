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
    [Route("api/List")]
    public class ListController : Controller
    {
        private readonly IListLogic _logic;
        public ListController(IListLogic logic)
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
        [Route("GetPaginatedList/{page:int}/{rows:int}")]
        public IActionResult GetPaginatedList(int page, int rows)
        {
            return Ok(_logic.GetPaginatedList(page, rows));
        }

        [HttpPost]
        public IActionResult Post([FromBody] List list)
        {
            if (!ModelState.IsValid) return BadRequest();
            return Ok(_logic.Insert(list));
        }

        [HttpPut]
        public IActionResult Put([FromBody] List list)
        {
            if(ModelState.IsValid && _logic.Update(list))
            {
                return Ok(new { Message = "The List is Updated" });
            }
            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] List list)
        {
            if (list.Id > 0)
                return Ok(_logic.Delete(list));
            return BadRequest();
        }


    }
}
