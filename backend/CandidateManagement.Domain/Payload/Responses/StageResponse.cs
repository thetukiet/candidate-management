using System.Collections.Generic;
using CandidateManagement.Domain.Entities;
using CandidateManagement.Domain.Entities.Base;

namespace CandidateManagement.Domain.Payload.Responses
{
	public class StageResponse : BaseEntity
	{
        public string Name { get; set; }

		public string Code { get; set; }

		public string Theme { get; set; }

		public int DisplayIndex { get; set; }

		public List<string> MovableStages { get; set; }

        public object SubInfo { set; get; }

        public List<CandidateResponse> Candidates { set; get; }

        public StageResponse(Stage stage, List<CandidateResponse> candidates)
        {
            Name = stage.Name;
            Code = stage.Code;
            Theme = stage.Theme;
            DisplayIndex = stage.DisplayIndex;
            MovableStages = stage.MovableStages;
            SubInfo = stage.SubInfo;
            Candidates = candidates;
        }
	}
}
