using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SimplyNotes.BusinessLogic.Interfaces;
using SimplyNotes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplyNotes.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController: Controller
    {
        private readonly IUserLogic _logic;
        public UserController(IUserLogic logic)
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
        [Route("GetUserByEmail")]
        [Authorize]
        public IActionResult GetUserByEmail([FromBody] User user)
        {
            if(user != null)
                return Ok(_logic.GetUserByEmail(user.Email));

            return BadRequest();
        }

        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            if (!ModelState.IsValid) return BadRequest();
            return Ok(_logic.Insert(user));
        }

        [HttpPut]
        [Authorize]
        public IActionResult Put([FromBody] User user)
        {
            if (ModelState.IsValid && _logic.Update(user) >= 1)
            {
                return Ok(new { Message = "The Board is Updated" });
            }
            return BadRequest();
        }

        [HttpDelete]
        [Authorize]
        public IActionResult Delete([FromBody] User user)
        {
            if (user.Id > 0)
                return Ok(_logic.Delete(user));
            return BadRequest();
        }
    }
}
