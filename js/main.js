/*----- constants -----*/
delay;

/*----- app's state (variables) -----*/
let compPattern;
let playerChoices;
let interval;
let lose;
let compTurn;
let playerTurn;

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
    }
    playerChoice = [];
    playerRound += 1;
    getRandom();
    setTimeout(() => compPattern(), 500);
    render();
}

function compTurn(){
    setTimeout(() => runCompPattern(), 500);
    playerTurn();
}

function playerTurn() {
    matchPattern();
}

function matchPattern() {
    if(compPattern.length === playerPattern.length) {
        for(let i=0;i<compPattern.length;i++) 
        if(compPattern[i]!=playerPattern[i]) {
            playerPattern = [];
            document.querySelector('#message').innerHTML = 'Wrong! Watch and try again'
            multiFlash(4, 200);
            const gameElement = document.querySelector('.game');
            setTimeout(() => flashes = 0, 1000);
            setTimeout(() => runCompPattern(), 1000);
        } else {
            document.querySelector('#message').innerHTML = `Correct! Start Round: ${playerRound + 1}`;
        }
        if (playerRound === totalRounds) {
            winGame = true;
            document.querySelector('#message').innerHTML = `You completed all ${playerRound} rounds!`;
            playerRound = 0;
            compPattern = [];
            interval = 500;
            winSequence();
        }
    } 
} 


function getRandom() {
    compPattern.push(Math.floor(Math.random()*4)+1);
}

function CompPattern() {
    delayFlash(compPattern);
}

async function delayFlash(array){
    for(let i=0; i<array.length; i++) {
        
    }
}
