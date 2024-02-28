using System.ComponentModel.DataAnnotations;

namespace CandidateManagement.Domain.Payload.Requests
{
	public class CreateNewCandidateRequest
	{
        [Required]
		public string FirstName { get; set; }

        [Required]
		public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Position { get; set; }

        public string Gender { get; set; }

    }
}
