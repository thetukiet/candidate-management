using System.ComponentModel.DataAnnotations;

namespace CandidateManagement.Domain.Payload.Requests.Auth
{
	public class LoginRequest
	{
		[Required]
		public string UserName { get; set; }
		
		[Required]
		[MinLength(6)]
		public string Password { get; set; }
	}
}
