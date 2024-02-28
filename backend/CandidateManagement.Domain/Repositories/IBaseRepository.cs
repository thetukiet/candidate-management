using System.Collections.Generic;
using System.Threading.Tasks;

namespace CandidateManagement.Domain.Repositories
{
	public interface IBaseRepository<T> where T:class
	{
		Task<bool> InsertOneAsync(T entity);

		Task<T> FindByIdAsync(string Id);

		Task<T> UpdateAsync(T entity);

        Task<List<T>> GetAllAsync();
    }
}
