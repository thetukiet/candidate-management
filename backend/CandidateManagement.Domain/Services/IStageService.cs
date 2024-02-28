using System.Collections.Generic;
using System.Threading.Tasks;
using CandidateManagement.Domain.Payload.Responses;

namespace CandidateManagement.Domain.Services
{
	public interface IStageService
	{
        Task<List<StageResponse>> GetAll();
    }
}
