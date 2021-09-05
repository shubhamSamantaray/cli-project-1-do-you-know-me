const chalk = require('chalk');
var getUserInput = require('readline-sync')

var score = 0

var highScore = [
  {
    name: "Shubham",
    score: 5
  }
  ,
  {
    name: "Google",
    score: 4
  }
]

var questions = [{
  question: 'Which city Shubham belongs to: ',
  answer: 'bhubaneswar'
},
{
  question: 'What he likes to eat: ',
  answer: 'Biriyani'
}, {
  question: 'What he likes to drink: ',
  answer: 'Coke'
},
{
  question: 'What he likes to do: ',
  answer: 'Code'
},
{
  question: 'his best friend: ',
  answer: 'His Bike'
}]

function letsStart() {
  var getUserName = getUserInput.question(chalk.blue('Please enter your name: '))

  console.log(chalk.blue('Hi ' + getUserName + ' lets play who knows Shubham'))

  return getUserName
}


function gameDemo(question, answer) {
  var getUserAnswer = getUserInput.question(chalk.blue(question))

  if (getUserAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green('Yes you are right'))
    score += 1
  } else {
    console.log(chalk.red('You are wrong, correct answer is :' + chalk.green(answer)))
  }

  console.log('your current score is: ' + score)
  console.log('---------')
}

function letsPlay() {
  for (i = 0; i < questions.length; i++) {
    gameDemo(questions[i].question, questions[i].answer)
  }
}

function checkScore() {
  console.log(chalk.cyan('Wow ' + getName + ' you scored :' + score))
  
  console.log(chalk.cyan('Checkout the high scores, do let me know you if you are a top scorer'))
  highScore.map(getValue=>console.log(getValue.name, ':', getValue.score))
}

var getName = letsStart()
letsPlay()
checkScore(getName)