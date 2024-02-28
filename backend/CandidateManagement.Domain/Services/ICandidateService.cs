using System.Collections.Generic;
using System.Threading.Tasks;
using CandidateManagement.Domain.Payload.Requests;
using CandidateManagement.Domain.Payload.Responses;

namespace CandidateManagement.Domain.Services
{
	public interface ICandidateService
	{
        Task<List<CandidateResponse>> GetAll();

        Task<CandidateResponse> GetCandidateInfo(string id);

        Task<string> MoveToStage(string candidateId, string stageCode);

        Task<CandidateResponse> AddNewCandidate(CreateNewCandidateRequest request);

        Task<CandidateResponse> UpdateCandidate(string id, CreateNewCandidateRequest request);

    }
}
