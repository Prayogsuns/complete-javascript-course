// Lecture IIFE 

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

// In javascript, anything in parenthesis is not a STATEMENT, but an EXPRESSION

/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/

///////////////////////////////////////////////////////
// Lecture Bind, Call and Apply
/*
var John = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'freindly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }

    }
}

John.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

John.presentation.call(emily, 'freindly', 'afternoon');

// John.presentation.apply(emily, ['freindly', 'afternoon']);

var johnFreindly = John.presentation.bind(John, 'freindly');

johnFreindly('morning');

johnFreindly('night');

var emilyFormal = John.presentation.bind(emily, 'formal');

emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);

*/

////////////////////////////////////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function selectRandomQuestion() {

    var Question = function (question, answersArray, correctAnswer) {
        this.question = question;
        this.answers = answersArray;
        this.answer = correctAnswer;
    }

    var question_str_1 = "When did coronavirus started?";
    var question_str_1_answers_array = [
        "1. Coronavirus started in december 20",
        "2. Coronavirus started in my previous life",
        "3. Coronavirus started in my wife's previous life",
        "4. Coronavirus started not in my life"
    ]
    var question_str_1_answer = "1";

    var question_str_2 = "Coronavirus is mutating virus?";
    var question_str_2_answers_array = [
        "1. Coronavirus is not a virus",
        "2. Coronavirus is a computer virus",
        "3. Coronavirus is indeed a mutating virus",
        "4. Coronavirus is for global peace"
    ]
    var question_str_2_answer = "3";

    var question_str_3 = "Coronavirus does not feel love?";
    var question_str_3_answers_array = [
        "1. Coronavirus feels love like bollywood",
        "2. Coronavirus so full of love that it is very much attached to humans",
        "3. Coronavirus feels sadness not love",
        "4. Coronavirus is not human and has no emotions"
    ]
    var question_str_3_answer = "4";

    var question_str_4 = "Coronavirus is working to clean our environment?";
    var question_str_4_answers_array = [
        "1. Coronavirus has reduced human activties and produce, hence it is cleaning our environment",
        "2. Coronavirus is polically aligned to left politicians",
        "3. Coronavirus has signed agreement with janitors",
        "4. Coronavirus is just a virus and it has nothign to do with cleaning anything"
    ]
    var question_str_4_answer = "1";

    var question_str_5 = "Coronavirus epidemic has become a pandemic?";
    var question_str_5_answers_array = [
        "1. Coronavirus has been contained to only few places",
        "2. Coronavirus problem has actually become a pandemic",
        "3. Coronavirus effects only rich people",
        "4. Coronavirus effects those who go out of their home and leave their parents"
    ]
    var question_str_5_answer = "2";

    var question_1 = new Question(question_str_1, question_str_1_answers_array, question_str_1_answer);
    var question_2 = new Question(question_str_2, question_str_2_answers_array, question_str_2_answer);
    var question_3 = new Question(question_str_3, question_str_3_answers_array, question_str_3_answer);
    var question_4 = new Question(question_str_4, question_str_4_answers_array, question_str_4_answer);
    var question_5 = new Question(question_str_5, question_str_5_answers_array, question_str_5_answer);

    var questions = [
        question_1,
        question_2,
        question_3,
        question_4,
        question_5
    ]

    Question.prototype.askQuestion = function () {
        console.log(this.question)
        for (var q = 0; q < this.answers.length; q++) {
            console.log(this.answers[q]);
        }
    }


    Question.prototype.printTheAnswerOutcome = function (answer) {
        console.log("You entered the answer option number: " + answer);
        if (answer === this.question.answer) {
            console.log("You answer is correct.");
        } else {
            console.log("You entered the wrong answer.");
        }
    }


    // function selectRandomQuestion(questions) {
    var question_x = questions[Math.floor(Math.random() * questions.length)];
    question_x.askQuestion()

    var answer_x = prompt("Enter the number of correct answer option:");
    question_x.printTheAnswerOutcome(answer_x);
})();

// selectRandomQuestion(questions);
















