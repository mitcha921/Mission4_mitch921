$("#calculateGrade").click(function () {
    var assignmentsGrade = parseFloat($("#assignments").val())
    var groupProjectsGrade = parseFloat($("#groupProjects").val())
    var quizzesGrade = parseFloat($("#quizzes").val())
    var midtermExamGrade = parseFloat($("#midtermExam").val())
    var finalExamGrade = parseFloat($("#finalExam").val())
    var intexGrade = parseFloat($("#intex").val())

    //weight each inputted grade percentage
    var assignmentsWeight = (assignmentsGrade * .5)
    var groupProjectsWeight = (groupProjectsGrade * .1)
    var quizzesWeight = (quizzesGrade * .1)
    var midtermExamWeight = (midtermExamGrade * .1)
    var finalExamWeight = (finalExamGrade * .1)
    var intexWeight = (intexGrade * .1)

    //calculate final grade percentage
    var finalGradeNumber = (assignmentsWeight + groupProjectsWeight + quizzesWeight + midtermExamWeight +
        finalExamWeight + intexWeight)

    //initialize and determine letter grade
    var finalGradeLetter
    if (finalGradeNumber >= 94) {
        finalGradeLetter = "A"
    }
    else if (finalGradeNumber >= 90) {
        finalGradeLetter = "A-"
    }
    else if (finalGradeNumber >= 87) {
        finalGradeLetter = "B+"
    }
    else if (finalGradeNumber >= 84) {
        finalGradeLetter = "B"
    }
    else if (finalGradeNumber >= 80) {
        finalGradeLetter = "B-"
    }
    else if (finalGradeNumber >= 77) {
        finalGradeLetter = "C+"
    }
    else if (finalGradeNumber >= 74) {
        finalGradeLetter = "C"
    }
    else if (finalGradeNumber >= 70) {
        finalGradeLetter = "C-"
    }
    else if (finalGradeNumber >= 67) {
        finalGradeLetter = "D+"
    }
    else if (finalGradeNumber >= 64) {
        finalGradeLetter = "D"
    }
    else if (finalGradeNumber >= 60) {
        finalGradeLetter = "D-"
    }
    else {finalGradeLetter = "E" }

    //output letter grade into form

    alert("Your final grade is: " + finalGradeLetter)

});