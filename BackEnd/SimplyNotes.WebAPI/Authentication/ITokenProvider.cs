using Microsoft.IdentityModel.Tokens;
using SimplyNotes.Models;
using System;

namespace SimplyNotes.WebAPI.Authentication
{
    public interface ITokenProvider
    {
        string CreateToken(User user, DateTime expiry);
        TokenValidationParameters GetValidationParameters();
    }
}
