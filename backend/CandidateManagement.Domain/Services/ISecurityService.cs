using System;

namespace CandidateManagement.Domain.Services
{
	public interface ISecurityService
	{
		string GetSha256Hash(string input);
		Guid CreateCryptographicallySecureGuid();
	}
}
