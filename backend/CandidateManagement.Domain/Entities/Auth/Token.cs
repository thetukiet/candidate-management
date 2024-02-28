using System;

namespace CandidateManagement.Domain.Entities.Auth
{
    public class Token
    {
        public string AccessTokenHash { get; set; }

        public DateTimeOffset AccessTokenExpiresDateTime { get; set; }

        public string RefreshTokenIdHash { get; set; }

        public string RefreshTokenIdHashSource { get; set; }

        public DateTimeOffset RefreshTokenExpiresDateTime { get; set; }
    }
}