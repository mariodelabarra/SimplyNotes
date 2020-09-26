using Microsoft.AspNetCore.Mvc;
using SimplyNotes.Models;
using SimplyNotes.UnitOfWork;
using SimplyNotes.WebAPI.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplyNotes.WebAPI.Controllers
{
    [Route("api/token")]
    public class TokenController: Controller
    {
        private IUnitOfWork _unitOfWork;
        private ITokenProvider _tokenProvider;

        public TokenController(ITokenProvider tokenProvider, IUnitOfWork unitOfWork)
        {
            _tokenProvider = tokenProvider;
            _unitOfWork = unitOfWork;
        }

        [HttpPost]
        public JsonWebToken Post([FromBody]User userLogin)
        {
            var user = _unitOfWork.User.ValidateUser(userLogin.Email, userLogin.Password);
            if(user == null)
            {
                throw new UnauthorizedAccessException();
            }

            var token = new JsonWebToken
            {
                Access_Token = _tokenProvider.CreateToken(user, DateTime.UtcNow.AddHours(8)), //Create the Token and it will expire in 8 hours
                Expires_in = 480 // 8 hours express in minutes
            };
            return token;
        }


    }
}
