using CandidateManagement.Domain.Entities;
using CandidateManagement.Domain.Repositories;

namespace CandidateManagement.Data
{
	public class CandidateRepository : BaseRepository<Candidate>, ICandidateRepository
	{
        public CandidateRepository(IMongoDbContext mongoDbContext) : base(mongoDbContext)
		{
		}
    }
}
