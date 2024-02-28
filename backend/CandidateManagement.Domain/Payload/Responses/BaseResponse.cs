namespace CandidateManagement.Domain.Payload.Responses;

public class BaseResponse
{
    public object Data { get; set; }

    public BaseResponse(object data)
    {
        Data = data;
    }
}