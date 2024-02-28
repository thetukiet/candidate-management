﻿using CandidateManagement.Domain.Repositories;
using CandidateManagement.Domain.Services;
using MongoDB.Driver;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using CandidateManagement.Domain.Entities.Auth;

namespace CandidateManagement.Data
{
	public class UserRepository : BaseRepository<User>, IUserRepository
	{
		private readonly ISecurityService securityService;

		public UserRepository(IMongoDbContext mongoDbContext, ISecurityService securityService) : base(mongoDbContext)
		{
			this.securityService = securityService;
		}

		public async Task<User> FindUserByUsernameAndPasswordAsync(Expression<Func<User,bool>> filter)
		{
			try
			{
				return await collection.Find(filter).SingleOrDefaultAsync();
			}
			catch
			{
				throw;
			}
		}

		public async Task<bool> DeleteUserTokensByUserIdAsync(string userId)
		{
			try
			{
				FilterDefinition<User> filter = new FilterDefinitionBuilder<User>().Eq(x => x.Id, userId);
				UpdateDefinition<User> update = new UpdateDefinitionBuilder<User>().Unset(x => x.Tokens);

				await collection.FindOneAndUpdateAsync(filter, update);

				return true;
			}
			catch
			{
				throw;
			}
		}

		public async Task<bool> AddUserTokenByUserIdAsync(string userId, Token token)
		{
			try
			{
				FilterDefinition<User> filter = new FilterDefinitionBuilder<User>().Eq(x => x.Id, userId);
				UpdateDefinition<User> update = new UpdateDefinitionBuilder<User>().AddToSet(x => x.Tokens, token);

				await collection.UpdateOneAsync(filter, update);

				return true;
			}
			catch
			{
				throw;
			}
		}

		public async Task<Token> FindTokenByUserIdAndAccessTokenAsync(string userId, string accessTokenHash)
		{
			try
			{
				FilterDefinition<User> filter = new FilterDefinitionBuilder<User>().Eq($"{nameof(User.Tokens)}.{nameof(Token.AccessTokenHash)}", accessTokenHash);

				User user = await collection.Find(filter).FirstOrDefaultAsync();

				return user.Tokens.Where(x => x.AccessTokenHash == accessTokenHash).FirstOrDefault();
			}
			catch
			{
				throw;
			}
		}

		public async Task<bool> UpdateUserLastActivityDateAsync(User user)
		{
			try
			{
				var currentUtc = DateTimeOffset.UtcNow;
				if (user.LastLoggedIn != null)
				{
					var updateLastActivityDate = TimeSpan.FromMinutes(2);
					var timeElapsed = currentUtc.Subtract(user.LastLoggedIn.Value);
					if (timeElapsed < updateLastActivityDate)
					{
						return true;
					}
				}

				FilterDefinition<User> filter = new FilterDefinitionBuilder<User>().Eq(x => x.Id, user.Id);
				UpdateDefinition<User> update = new UpdateDefinitionBuilder<User>().Set(x => x.LastLoggedIn, currentUtc);

				await collection.UpdateOneAsync(filter, update);
				return true;
			}
			catch
			{

				throw;
			}
		}

		public async Task<bool> DeleteExpiredTokensAsync(string userId)
		{
			try
			{
				FilterDefinition<User> filter = new FilterDefinitionBuilder<User>().Eq(x => x.Id, userId);

				UpdateDefinition<User> update = new UpdateDefinitionBuilder<User>().PullFilter(x => x.Tokens, i => i.RefreshTokenExpiresDateTime < DateTimeOffset.UtcNow);

				await collection.UpdateManyAsync(filter, update);

				return true;
			}
			catch
			{
				throw;
			}
		}

		public async Task<bool> DeleteTokensWithSameRefreshTokenSourceAsync(string refreshTokenIdHashSource, string userId)
		{
			if (string.IsNullOrWhiteSpace(refreshTokenIdHashSource))
			{
				return true;
			}

			try
			{
				FilterDefinition<User> filter = new FilterDefinitionBuilder<User>().Eq(x => x.Id, userId);

				UpdateDefinition<User> update = new UpdateDefinitionBuilder<User>().PullFilter(x => x.Tokens, i => i.RefreshTokenIdHashSource == refreshTokenIdHashSource || (i.RefreshTokenIdHash == refreshTokenIdHashSource && i.RefreshTokenIdHashSource == null));

				await collection.UpdateManyAsync(filter, update);

				return true;
			}
			catch
			{
				throw;
			}
		}

		public async Task<(Token token, User user)> FindUserAndTokenByRefreshTokenAsync(string refreshToken)
		{
			try
			{
				string refreshTokenHash = securityService.GetSha256Hash(refreshToken);
				FilterDefinition<User> filter = new FilterDefinitionBuilder<User>().Eq($"{nameof(User.Tokens)}.{nameof(Token.RefreshTokenIdHash)}", refreshTokenHash);

				User user = await collection.Find(filter).FirstOrDefaultAsync();
				if (user == null)
				{
					throw new Exception("Invalid refresh token");
				}
				return (user.Tokens.Where(x => x.RefreshTokenIdHash == refreshTokenHash).FirstOrDefault(), user);
			}
			catch
			{
				throw;
			}
		}

		public async Task<User> FindUserByUsernameAsync(string username)
		{
			try
			{
				var s = await collection.Find(s => s.UserName == username).SingleOrDefaultAsync();
				return s;
			}
			catch
			{
				throw;
			}
		}

		public async Task<bool> ChangePassword(string userId, string newPasswordHash, string newSerialNumber)
		{
			UpdateDefinition<User> update = new UpdateDefinitionBuilder<User>().Set(i => i.Password, newPasswordHash).Set(x => x.SerialNumber, newSerialNumber);

			try
			{
				await collection.UpdateOneAsync(i => i.Id == userId, update);
				return true;
			}
			catch
			{

				throw;
			}

		}
	}
}
