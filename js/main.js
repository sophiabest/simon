/*----- constants -----*/
//delay;

/*----- app's state (variables) -----*/
let compPattern;
let playerChoices;
let interval;
let lose;
let compTurn;
let playerTurn;
let playerRound;
let getRandom;
//let matchPattern;

/*----- cached element references -----*/
const msgEl = document.querySelector('h2');
const startBtn = document.getElementById('startBtn');

/*----- event listeners -----*/
//document.querySelector('main').addEventListener('click', handleButton);

/*----- functions -----*/
init();

function init() {
    if (playerRound < 1) {
    }
    playerChoice = [];
    playerRound += 1;
    //getRandom();
    //render();
}


function matchPattern() {
    if(compPattern.length === playerPattern.length) {
        for(let i=0;i<compPattern.length;i++) 
        if(compPattern[i]!=playerPattern[i]) {
            playerPattern = [];
            const gameElement = document.querySelector('.game');
        } else {
            
        }
        if (playerRound === totalRounds) {
            lose = false;
            
            playerRound = 0;
            compPattern = [];
            interval = 500;
        }
    } 
} 


//function getRandom() {
    //compPattern.push(Math.floor(Math.random()*4)+1);
//}

function CompPattern() {
    delayFlash(compPattern);
}

async function delayFlash(array){
    for(let i=0; i<array.length; i++) {
        
    }
}

//function flashColor(i) {
   // if (i === 1) redFlash();
  //  if (i === 2) blueFlash();
  //  if (i === 3) yellowFlash();
  //  if (i === 4) greenFlash();
//}