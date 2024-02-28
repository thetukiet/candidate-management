using System.Collections;

namespace CandidateManagement.Domain.Extensions;

public static class CollectionExtensions
{
    public static bool IsNotEmpty(this IList collection)
    {
        if (collection == null || collection.Count < 1)
        {
            return false;
        }

        return true;
    }
}