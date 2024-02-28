using CandidateManagement.Domain.Entities;
using CandidateManagement.Domain.Repositories;

namespace CandidateManagement.Data
{
	public class StageRepository : BaseRepository<Stage>, IStageRepository
	{
        public StageRepository(IMongoDbContext mongoDbContext) : base(mongoDbContext)
		{
		}

    }
}
