using System.Threading.Tasks;
using CandidateManagement.Domain.Payload.Requests;
using CandidateManagement.Domain.Payload.Responses;
using CandidateManagement.Domain.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CandidateManagement.WebApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	[EnableCors("CorsPolicy")]
    [Authorize]
	public class CandidateController : ControllerBase
	{
		private readonly ICandidateService candidateService;

        public CandidateController(ICandidateService candidateService)
		{
			this.candidateService = candidateService;
        }

		[HttpGet]
		public async Task<BaseResponse> GetAll()
        {
            var result = await candidateService.GetAll();
            return new BaseResponse(result);
        }

        [HttpGet("{candidateId}")]
		public async Task<BaseResponse> Get(string candidateId)
        {
            var candidate = await candidateService.GetCandidateInfo(candidateId);
            return new BaseResponse(candidate);
        }

        [HttpPost]
        public async Task<BaseResponse> AddNewCandidate(CreateNewCandidateRequest request)
        {
            var newCandidate = await candidateService.AddNewCandidate(request);
            return new BaseResponse(newCandidate);
        }

        [HttpPost("{candidateId}")]
        public async Task<string> MoveCandidate(string candidateId, string newStageCode)
        {
            return await candidateService.MoveToStage(candidateId, newStageCode);
        }

        [HttpPut("{candidateId}")]
        public async Task<BaseResponse> UpdateCandidate(string candidateId, CreateNewCandidateRequest request)
        {
            var result = await candidateService.UpdateCandidate(candidateId, request);
            return new BaseResponse(result);
        }
    }
}
