/*----- constants -----*/
const colors = [0, 1, 2, 3];

/*----- app's state (variables) -----*/
let compPattern;
let playerChoices;
let interval;
let lose;
let round;
//let matchPattern;

/*----- cached element references -----*/

/*----- event listeners -----*/
//document.querySelector('main').addEventListener('click', handleButton);

/*----- functions -----*/
init();

function init () {
    let round = 0;
    let compPattern = {};
    let playerChoices = {};
    let lose = true; 
}

function render() {
    createPattern(compPattern);
    blink(compPattern);
}

for (var i = 0; i < playerChoices.length; i++) {
    if (JSON.stringify(compPattern) == JSON.stringify(playerChoices)) {
        playerChoices = [];
        round++;
        roundCounter.innterHTML = round;
        render(); 
    } else if (playerChoices[i] !== compPattern[i]) {
        alert(`Game Over!`);
    }
 }

 function createPattern = (array) => {
     array.push(colors[Math.floor(Math.random() * colors.length)]);
 };

