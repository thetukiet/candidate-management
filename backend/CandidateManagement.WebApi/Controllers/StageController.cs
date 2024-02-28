using System.Collections.Generic;
using System.Threading.Tasks;
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
	public class StageController : ControllerBase
	{
		private readonly IStageService stageService;

        public StageController(IStageService stageService)
		{
			this.stageService = stageService;
        }

        [Authorize]
		[HttpGet]
		public async Task<List<StageResponse>> GetAll()
        {
            var stages = await stageService.GetAll();
            return stages;
        }

    }
}
