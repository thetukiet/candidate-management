using System;
using System.Collections.Generic;
using CandidateManagement.Domain.Entities.Base;
using CandidateManagement.Domain.Models;
using CandidateManagement.Domain.Models.Auth;

namespace CandidateManagement.Domain.Entities.Auth
{
	public class User : BaseEntity
	{
		public User()
		{
			Roles = new HashSet<Role>();
			Tokens = new List<Token>();
		}

		public string UserName { get; set; }

		public string Password { get; set; }

		public string FirstName { get; set; }

		public string LastName { get; set; }

		public bool IsActive { get; set; }

		public DateTimeOffset? LastLoggedIn { get; set; }

		public string SerialNumber { get; set; }

		public ICollection<Role> Roles { get; set; }

        public List<Token> Tokens { get; set; }

        public string GetFullName()
        {
            var firstName = FirstName ?? string.Empty;
            var lastName = LastName ?? string.Empty;
            return firstName + " " + lastName;
        }
	}
}
