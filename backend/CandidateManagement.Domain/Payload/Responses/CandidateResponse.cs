using CandidateManagement.Domain.Entities;
using CandidateManagement.Domain.Entities.Base;
using CandidateManagement.Domain.Models;

namespace CandidateManagement.Domain.Payload.Responses
{
	public class CandidateResponse : BaseEntity
	{
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Gender { get; set; }

        public string Email { get; set; }

		public string PhoneNumber { get; set; }

        public string CurrentStage { get; set; }

        public string Position { get; set; }

        public ProcessData SubInfo { set; get; }

        // TODO: Apply AutoMapper
        public CandidateResponse(Candidate candidate)
        {
            Id = candidate.Id;
            FirstName = candidate.FirstName;
            LastName = candidate.LastName;
            Gender = candidate.Gender;
            Email = candidate.Email;
            PhoneNumber = candidate.PhoneNumber;
            CurrentStage = candidate.CurrentStage;
            Position = candidate.Position;
            SubInfo = candidate.SubInfo;
        }
	}
}
