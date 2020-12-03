using System.Collections.Generic;
using Newtonsoft.Json;

namespace backend.Models
{
    [JsonObject]
    public class Question : BaseEntity
    {
        [JsonProperty("answers")]
        public IEnumerable<Answer> Answers { get; set; }

        [JsonProperty("tags")]
        public IEnumerable<string> Tags { get; set; }
    }
}