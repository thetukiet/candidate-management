using CandidateManagement.Domain.Entities.Base;
using CandidateManagement.Domain.Models;
using MongoDB.Bson.Serialization.Attributes;

namespace CandidateManagement.Domain.Entities
{
	public class Candidate : BaseEntity
	{
        [BsonElement("firstName")]
        public string FirstName { get; set; }

        [BsonElement("lastName")]
        public string LastName { get; set; }

        [BsonElement("gender")]
        public string Gender { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("phoneNumber")]
		public string PhoneNumber { get; set; }

        [BsonElement("currentStage")]
        public string CurrentStage { get; set; }

        [BsonElement("position")]
        public string Position { get; set; }

        [BsonElement("subInfo")]
        public ProcessData SubInfo { set; get; }
	}
}
