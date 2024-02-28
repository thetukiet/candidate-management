using CandidateManagement.Domain.Entities.Auth;
using CandidateManagement.Domain.Models.Auth;

namespace CandidateManagement.Domain.Payload.Responses;

public class JwtDataResponse
{
    public string AccessToken { get; }

    public string RefreshToken { get; }

    public string Username { get; }

    public string FullName { get; }

    public JwtDataResponse(User user, JwtTokensData jwtTokensData)
    {
        AccessToken = jwtTokensData.AccessToken;
        RefreshToken = jwtTokensData.RefreshToken;
        Username = user.UserName;
        FullName = user.GetFullName();
    }
}