using CandidateManagement.Domain.Repositories;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using CandidateManagement.Domain.Entities.Base;
using MongoDB.Bson;

namespace CandidateManagement.Data
{
	public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
	{
		protected readonly IMongoCollection<T> collection;
		public BaseRepository(IMongoDbContext mongoDbContext)
		{
            // TODO: Add custom attribute to get flexible collection name
			collection = mongoDbContext.GetCollection<T>($"{typeof(T).Name}s");
		}

		public async Task<T> FindByIdAsync(string Id)
		{
			return await collection.Find(x => x.Id == Id).SingleOrDefaultAsync();
		}

        public async Task<T> UpdateAsync(T entity)
        {
            var filter = Builders<T>.Filter.Eq(u => u.Id, entity.Id);
            var result = await collection.ReplaceOneAsync(filter, entity, new ReplaceOptions { IsUpsert = false });

            if (result.MatchedCount == 0)
            {
                throw new KeyNotFoundException($"No user found with ID {entity.Id}");
            }

            return entity;
        }

        public async Task<List<T>> GetAllAsync()
		{
			return await collection.Find(new BsonDocument()).ToListAsync();
		}

		public async Task<bool> InsertOneAsync(T entity)
        {
            await collection.InsertOneAsync(entity);
            return true;
        }
	}
}
