using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0,100)]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public float GroupProjects { get; set; }

        [Required]
        [Range(0, 100)]
        public float Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public float MidtermExam { get; set; }

        [Required]
        [Range(0, 100)]
        public float FinalExam { get; set; }

        [Required]
        [Range(0, 100)]
        public float Intex { get; set; }

    }
}
