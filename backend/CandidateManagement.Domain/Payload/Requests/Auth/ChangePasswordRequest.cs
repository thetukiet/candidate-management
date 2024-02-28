using System.ComponentModel.DataAnnotations;

namespace CandidateManagement.Domain.Payload.Requests.Auth
{
	public class ChangePasswordRequest
	{
		[Required]
		public string OldPassword { get; set; }

		[Required]
		[MinLength(6)]
		public string NewPassword { get; set; }

		[Required]
		[Compare(nameof(NewPassword))]
		public string ConfirmNewPassword { get; set; }
	}
}
