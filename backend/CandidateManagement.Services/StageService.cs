using System.Collections.Generic;
using System.Linq;
using CandidateManagement.Domain.Repositories;
using CandidateManagement.Domain.Services;
using System.Threading.Tasks;
using CandidateManagement.Domain.Extensions;
using CandidateManagement.Domain.Payload.Responses;

namespace CandidateManagement.Services
{
	public class StageService : IStageService
	{
		private readonly IStageRepository stageRepository;
		private readonly ICandidateRepository candidateRepository;

		public StageService(IStageRepository stageRepository, ICandidateRepository candidateRepository)
        {
            this.stageRepository = stageRepository;
            this.candidateRepository = candidateRepository;
        }

        public async Task<List<StageResponse>> GetAll()
        {
            var allStages = await stageRepository.GetAllAsync();
            var allCandidates = await candidateRepository.GetAllAsync();
            Dictionary<string, List<CandidateResponse>> candidateDict = allCandidates
                .GroupBy(candidate => candidate.CurrentStage)
                .ToDictionary(
                    group => group.Key,
                    group => group.Select(candidate => new CandidateResponse(candidate)).ToList()
                );

            if (allCandidates.IsNotEmpty())
            {
                var sortedStages = allStages.OrderBy(stage => stage.DisplayIndex).ToList();
                var responseData = new List<StageResponse>();
                foreach (var stage in sortedStages)
                {
                    var candidates = new List<CandidateResponse>();
                    if (candidateDict.ContainsKey(stage.Code))
                    {
                        candidates = candidateDict[stage.Code];
                    }

                    responseData.Add(new StageResponse(stage, candidates));
                }

                return responseData;
            }

            return new List<StageResponse>();
        }
    }
}
