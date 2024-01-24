const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// declared candidate name as an empty string 

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = "";
// this is from part one, when originally only asking one question 


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = []
// defined variables and made candidateAnswers an empty array. 

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
const input = require('readline-sync');
  for (let i = 0; i < questions.length; i++) {
       let userAnswers = input.question(questions[i]);
        candidateAnswers.push(userAnswers);
  }
}
// i = 0 and i is less than 5. 
// part 1 candidateAnswer = input.question(question);

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // if (candidateAnswer == correctAnswer) {
  //   console.log("Correct!")
  // } else {
  //   console.log("Incorrect.")
  // }
// this is after using the input function for part one and "grading" the answer, telling user correct or incorrect

console.log(`Candidate name: ${candidateName}`); 
for (let i = 0; i < questions.length; i++) {
  console.log(`${questions[i]}`);
    console.log(`Your answer:  ${candidateAnswers[i]}`);
      console.log(`Correct answer:  ${correctAnswers[i]}\n`); 
}

//console.log(`Your responses: ${candidateAnswers} and correct answers: ${correctAnswers}.`);


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};