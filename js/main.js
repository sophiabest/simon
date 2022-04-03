/*----- constants -----*/
delay;

/*----- app's state (variables) -----*/
let compPattern;
let playerChoices;
let interval;
let lose;
/*----- cached element references -----*/

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleButton);
/*----- functions -----*/
init();

function init() {
    compPattern = {};
    playerChoices = {};
    interval = 0;
    lose = 'true';
    
}

function startGame() {
    if (playerRound < 1) {
        flashLights(500);
    }
    playerChoice = [];
    playerRound += 1;
    getRandom();
    setTimeout(() => compPattern(), 500);
    render();
}