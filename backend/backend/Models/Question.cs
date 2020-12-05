using System.Collections.Generic;
using Newtonsoft.Json;

namespace backend.Models
{
    [JsonObject]
    public class Question : BaseEntity
    {
        [JsonProperty("answers")]
        public List<Answer> Answers { get; set; }

        [JsonProperty("tags")]
        public string[] Tags { get; set; }
    }
}