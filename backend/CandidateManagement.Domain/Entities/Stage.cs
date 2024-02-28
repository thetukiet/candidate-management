using System.Collections.Generic;
using CandidateManagement.Domain.Entities.Base;
using MongoDB.Bson.Serialization.Attributes;

namespace CandidateManagement.Domain.Entities
{
	public class Stage : BaseEntity
	{
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("code")]
		public string Code { get; set; }

        [BsonElement("theme")]
		public string Theme { get; set; }

        [BsonElement("displayIndex")]
		public int DisplayIndex { get; set; }

        [BsonElement("movableStages")]
		public List<string> MovableStages { get; set; }

        [BsonElement("subInfo")]
        public object SubInfo { set; get; }
	}
}
