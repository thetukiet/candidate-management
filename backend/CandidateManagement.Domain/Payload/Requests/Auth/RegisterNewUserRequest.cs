using System.ComponentModel.DataAnnotations;

namespace CandidateManagement.Domain.Payload.Requests.Auth
{
	public class RegisterNewUserRequest
	{
		[Required]
		public string UserName { get; set; }
		
		[Required]
		[MinLength(6)]
		public string Password { get; set; }
		
		[Required]
		public string FirstName { get; set; }

        [Required]
		public string LastName { get; set; }
	}
}
