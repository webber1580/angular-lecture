using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using backend.Models;

namespace backend
{
    public class CustomInmemoryDB
    {
        private const string _base64ImagePrefix = "data:image/png;base64,";

        public List<User> Users { get; set; }
        public List<Question> Questions { get; set; }

        public CustomInmemoryDB()
        {
            Users = GenerateUsers();
            Questions = GenerateQuestions();
        }

        private List<Question> GenerateQuestions()
        {
            var result = new List<Question>();
            var random = new Random();
            
            result.Add(new Question()
            {
                Theme = "Отношения",
                Data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                User = Users[random.Next(0, 3)],
                Rating = random.Next(-10, 10),
                Comments = GenerateComments(),
                Answers = GenerateAnswers("Отношения"),
                Tags = new string[] {"university", "love", "food"}
            });
            result.Add(new Question()
            {
                Theme = "Универ",
                Data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                User = Users[random.Next(0, 3)],
                Rating = random.Next(-10, 10),
                Comments = GenerateComments(),
                Answers = GenerateAnswers("Универ"),
                Tags = new string[] {"university", "love", "food"}
            });
            result.Add(new Question()
            {
                Theme = "Python mongoDb exception",
                Data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                User = Users[random.Next(0, 3)],
                Rating = random.Next(-10, 10),
                Comments = GenerateComments(),
                Answers = GenerateAnswers("Python mongoDb exception"),
                Tags = new string[] {"university", "love", "food"}
            });
            result.Add(new Question()
            {
                Theme = "Два условно бесконечных цикла вложенные друг в друга",
                Data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                User = Users[random.Next(0, 3)],
                Rating = random.Next(-10, 10),
                Comments = GenerateComments(),
                Answers = GenerateAnswers("Два условно бесконечных цикла вложенные друг в друга"),
                Tags = new string[] {"university", "love", "food"}
            });
            result.Add(new Question()
            {
                Theme = "Модный лук на выпускной",
                Data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                User = Users[random.Next(0, 3)],
                Rating = random.Next(-10, 10),
                Comments = GenerateComments(),
                Answers = GenerateAnswers("Модный лук на выпускной"),
                Tags = new string[] {"university", "love", "food"}
            });
            
            return result;
        }

        private List<Answer> GenerateAnswers(string theme)
        {
            var result = new List<Answer>();
            var random = new Random();

            result.Add(new Answer()
            {
                Theme = theme,
                Rating = random.Next(-1, 10),
                User = Users[random.Next(0, 3)],
                Comments = GenerateComments(),
                IsCorrect = false
            });
            
            return result;
        }

        private List<Comment> GenerateComments()
        {
            var result = new List<Comment>();
            var random = new Random();

            for (int i = 0; i < random.Next(0, 5); i++)
            {
                result.Add(new Comment()
                {
                    User = Users[random.Next(0, 3)],
                    Data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                });
            }

            return result;
        }

        private List<User> GenerateUsers()
        {
            var result = new List<User>();

            result.Add(new User()
            {
                Name = "Ivan",
                Surname = "Klimov",
                Nickname = "webber",
                Photo = _base64ImagePrefix + GetBase64StringForImage($"{Directory.GetCurrentDirectory()}\\assets\\1.jpg")
            });
            result.Add(new User()
            {
                Name = "Natalie",
                Surname = "Portman",
                Nickname = "portmane",
                Photo = _base64ImagePrefix + GetBase64StringForImage($"{Directory.GetCurrentDirectory()}\\assets\\2.jpg")
            });
            result.Add(new User()
            {
                Name = "John",
                Surname = "Travolte",
                Nickname = "trav",
                Photo = _base64ImagePrefix + GetBase64StringForImage($"{Directory.GetCurrentDirectory()}\\assets\\3.jpg")
            });
            return result;
        }
        
        private static string GetBase64StringForImage(string imgPath)  
        {  
            byte[] imageBytes = System.IO.File.ReadAllBytes(imgPath);  
            string base64String = Convert.ToBase64String(imageBytes);  
            return base64String;  
        }
    }
}