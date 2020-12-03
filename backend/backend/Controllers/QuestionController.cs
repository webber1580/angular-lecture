using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionController : Controller
    {
        private readonly CustomInmemoryDB _ctx;
        public QuestionController(CustomInmemoryDB ctx)
        {
            _ctx = ctx;
        }
        
        [HttpGet]
        public IActionResult GetQuestions()
        {
            return Ok(_ctx.Questions);;

        }
        
        [HttpGet("id")]
        public IActionResult GetQuestion(int id)
        {
            return Ok(_ctx.Questions[id]);
        }
        
        [HttpPost]
        public IActionResult CreateQuestion([FromBody] Question question)
        {
            _ctx.Questions.Add(question);
            return Ok();
        }
        
        [HttpPut("id")]
        public IActionResult UpdateQuestion(int id, [FromBody] Question question)
        {
            _ctx.Questions[id] = question;
            return Ok();
        }
        
        [HttpDelete("id")]
        public IActionResult DeleteQuestion(int id)
        {
            _ctx.Questions.RemoveAt(id);
            return Ok();
        }
    }
}