using System;
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
        
        [HttpGet("{id}")]
        public IActionResult GetQuestion(int id)
        {
            return Ok(_ctx.Questions[id]);
        }
        
        [HttpPost]
        public IActionResult CreateQuestion([FromBody] Question question)
        {
            var random = new Random();
            question.Id = _ctx.Questions.Count;
            question.User = _ctx.Users[random.Next(0, 3)];
            _ctx.Questions.Add(question);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateQuestion(int id, [FromBody] Question question)
        {
            _ctx.Questions[id] = question;
            return Ok();
        }
        
        [HttpPut("QuestionAnswer/{id}")]
        public IActionResult AddQuestionAnswer(int id, [FromBody] Answer answer)
        {
            var random = new Random();
            answer.Id = _ctx.Questions[id].Answers.Count;
            answer.User = _ctx.Users[random.Next(0, 3)];
            _ctx.Questions[id].Answers.Add(answer);
            return Ok();
        }
        
        [HttpPut("QuestionComment/{id}")]
        public IActionResult AddQuestionComment(int id, [FromBody] Comment comment)
        {
            var random = new Random();
            comment.Id = _ctx.Questions[id].Comments.Count;
            comment.User = _ctx.Users[random.Next(0, 3)];
            _ctx.Questions[id].Comments.Add(comment);
            return Ok(_ctx.Questions[id]);
        }
        
        [HttpPut("AnswerComment/{questionId}/{answerId}")]
        public IActionResult AddAnswerComment(int questionId, int answerId, [FromBody] Comment comment)
        {
            var random = new Random();
            comment.Id = _ctx.Questions[questionId].Answers[answerId].Comments.Count;
            comment.User = _ctx.Users[random.Next(0, 3)];
            _ctx.Questions[questionId].Answers[answerId].Comments.Add(comment);
            return Ok(_ctx.Questions[questionId].Answers[answerId]);
        }
        
        [HttpPut("Answer/{questionId}/{answerId}")]
        public IActionResult UpdateAnswer(int questionId, int answerId, [FromBody] Answer answer)
        {
            _ctx.Questions[questionId].Answers[answerId] = answer;
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public IActionResult DeleteQuestion(int id)
        {
            _ctx.Questions.RemoveAt(id);
            return Ok();
        }
    }
}