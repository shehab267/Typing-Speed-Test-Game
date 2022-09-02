/*
  Steps To Create The Project
  [01] Create HTML Markup 
  [02] Add Styling And Separate From Logic
  [03] Create The App Logic
  ---- [01] Add Levels
  ---- [02] Show Level And Seconds
  ---- [03] Add Array Of Words
  ---- [04] ِAdd Start Game Button
  ---- [05] Generate Upcoming Words
  ---- [06] Disable Copy Word And Paste Event + Focus On Input
  ---- [07] Start Play Function
  ---- [08] Start The Time And Count Score
  ---- [09] Add The Error And Success Messages
  [04] Additonal Feature 
  ---- [01] Save Score To Local Storage With Date
  ---- [02] Choose Levels From Select Box
  ---- [03] Break The Logic To More Functions
  ---- [04] Choose Array Of Words For Every Level
  ---- [05] Write Game Instruction With Dynamic Values
  ---- [06] Add 3 Seconds For The First Word
*/

// Array Of Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

// Setting Levels
const lvls = {
  Easy: 5,
  Medium: 4,
  Hard: 3,
};

let checkedValue = document.querySelector(".messageCheckbox:checked").value;

// Difficalty Level
let defaultLvName = checkedValue;
let defaultLvSecound = lvls[defaultLvName];

// Catch Selectors
let difLvl = document.querySelector(".dif-lvl");
let lvlSpan = document.querySelector(".lvl");
let secondsSpan = document.querySelector(".message .seconds");
let startBtn = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let repeatBtn = document.querySelector(".repeat");

// Setting Level, Seconds, Score
lvlSpan.innerHTML = defaultLvName;
secondsSpan.innerHTML = defaultLvSecound;
timeLeftSpan.innerHTML = defaultLvSecound;
scoreTotal.innerHTML = words.length;

// Disaple Paste Event
input.onpaste = () => {
  return false;
};

// Start Play Function
startBtn.onclick = function () {
  this.remove();
  difLvl.remove();
  input.focus();

  // Generate Word func.
  genWord();
};

// Repeatbtn on click
repeatBtn.onclick = function () {
  location.reload();
};

function genWord() {
  // Generate Word From the array
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // Get the index of the Word
  let wordIndex = words.indexOf(randomWord);
  // Remove the word from array using Splice
  words.splice(wordIndex, 1);
  // Show the RandomWord
  theWord.innerHTML = randomWord;
  // Empty the upcaming words
  upcomingWords.innerHTML = "";
  // Generate the upcoming Words
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    // Appending the words to the box
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }

  // Call Start Play Function
  startPlay();
}

// Start Play the Time and the Score

// Start Play Function
function startPlay() {
  // Reset the timeLeft
  timeLeftSpan.innerHTML = defaultLvSecound;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      // Stop the timer
      clearInterval(start);
      // Change the words to lowerCase
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Increase Score
        scoreGot.innerHTML++;
        // Empty Input Field
        input.value = "";
        // Cheaking if the array didn't Finish
        if (words.length > 0) {
          //  CallBack wordGen func.
          genWord();
        } else {
          // On Winnig Situation
          upcomingWords.remove();
          // printing Congratulation
          let span = document.createElement("span");
          let winningMsg = document.createTextNode("Congratulation, YOU WON");
          span.className = "good";

          span.appendChild(winningMsg);
          finishMessage.appendChild(span);
        }
      } else {
        // If the user input wrong Input
        let span = document.createElement("span");
        span.className = "bad";
        let gameOver = document.createTextNode("Game Over");
        span.appendChild(gameOver);
        // append the bad span to the finshMessege
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
