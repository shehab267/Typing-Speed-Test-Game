/*
  Advices
  - Always Check The Console
  - Take Your Time To Name The Identifiers
  - DRY

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
  [04] Your Trainings To Add Features
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
  Medium: 3,
  Hard: 2,
};

// Default Level
let defaultLvName = "Easy"; // Make a selector for user at the End
let defaultLvSecound = lvls[defaultLvName];

// Catch Selectors
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
  input.focus();

  // Generate Word func.
  genWord();
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
  // startPlay();
}
