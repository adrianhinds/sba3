let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoresDiv = document.querySelector(".scores");
const resultDiv = document.querySelector(".result > p");
const resetButton = document.getElementById("reset-button")

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const shootDiv = document.getElementById("shoot");
window.confirm("enjoy!");
window.prompt("confirm you are not a robot");
const heading = frag.appendChild(document.createElement("h3"));
heading.textContent = title;
heading.style.margin = "0px";
const div1 = frag.appendChild(document.createElement("div"));
let newEl = document.createElement('a');
body.appendChild(newEl);
const myDiv = document.querySelector("#myDiv");
const myDivChildNodes = myDiv.childNodes;
console.log(myDivChildNodes);
console.log(myDiv.nextElementSibling);
function createPost(title, content) {
const frag = document.createDocumentFragment();
const heading = frag.appendChild(document.createElement("a4"))
heading.textContent = title;
heading.style.margin = "0px";
div1.appendChild(document.createElement("p")).innerHTML = content

return frag;
}
/* const sponsor = document.querySelector('.result');
sponsor.innerHTML = '<h1>Sponsored by Sports Illustrated</h1>';
sponsor.setAttribute('style', 'color: green'); */



// Generating computer choice at random
const getComputerChoice = () => {
  const choiceList = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random()*3);
  return (choiceList[randomNumber]);
};


// Convert lowercase choice to uppercase
const convertToUp = (word) => {
  switch(word) {
    case "rock":
      return "Rock";
      break;
    case "paper":
      return "Paper";
      break;
    case "scissors":
      return "Scissors";
      break;
  }
};


// Output for user win
const win = (userChoice, computerChoice) => {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  const randomWin = ["Great", "Awesome", "All Right", "Cool"];
  const randomNumber = Math.floor(Math.random() * 4);
  const winEmojis = ["😁", "💃🏽", "👏🏽", "😅", "😎", "🙌🏽"]
  const randomNumberEmoji = Math.floor(Math.random() * 6);

  resultDiv.innerHTML = `${randomWin[randomNumber]}. You scored! ${winEmojis[randomNumberEmoji]}`;

  document.getElementById(userChoice).classList.add('win-border')
  setTimeout(() => document.getElementById(userChoice).classList.remove('win-border'), 600);
};

// Output for user lose / computer win
const lose = (userChoice, computerChoice) => {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  const randomWin = ["No", "Try Again", "Oh no", "Darn"];
  const randomNumber = Math.floor(Math.random() * 4);
  const loseEmojis = ["😩", "😾", "💩", "😭", "😡", "🤨", "🤦🏽"]
  const randomNumberEmoji = Math.floor(Math.random() * 7);
  resultDiv.innerHTML = `${randomWin(randomNumber)}. You missed! ${loseEmojis[randomNumberEmoji]}`;

  document.getElementById(userChoice).classList.add('lose-border');
  setTimeout(() => document.getElementById(userChoice).classList.remove('lose-border'), 600);

};

// Output for tie
const tie = (userChoice, computerChoice) => {
  const tieEmojis = ["🤯", "😱", "🙈", "🧐", "🙀", "🙃"];
  const randomNumberEmoji = Math.floor(Math.random() * 6);
  const randomWin = ["No", "Try Again", "Oh no", "Darn"];
  const randomNumber = Math.floor(Math.random() * 4);
  resultDiv.innerHTML = `${randomWin[randomNumber]}. You missed! ${tieEmojis[randomNumberEmoji]}`;

  document.getElementById(userChoice).classList.add('tie-border');
  setTimeout(() => document.getElementById(userChoice).classList.remove('tie-border'), 600);
};




// Comparing computerChoice and userChoice
const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;

    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      break;
  }

};


const resetScores = () => {
  computerScore = 0;
  computerScoreSpan.innerHTML = computerScore
  userScore = 0;
  userScoreSpan.innerHTML = userScore;
  if (userScore = 10) {
    console.log("You Won")
  }
  if (computerScore = 10) {
    console.log("You Lose")
  }
};

const main = () => {
  rockDiv.addEventListener('click', () => game("rock"));

  paperDiv.addEventListener('click', () => game("paper"));

  scissorsDiv.addEventListener('click', () => game("scissors"));

  shootDiv.addEventListener('click', () => game());

  resetButton.addEventListener('click', () => resetScores());
};


main();