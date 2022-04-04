/*----- constants -----*/
const colors = [0, 1, 2, 3];


/*----- app's state (variables) -----*/
let compPattern;
let playerChoices;
let round;
let flash;
let interval;

//let matchPattern;

/*----- cached element references -----*/
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const startButton = document.querySelector('.start-button');

/*----- event listeners -----*/
//document.querySelector('main').addEventListener('click', handleButton);
//document.querySelector('article').addEventListener('click', handleColorClick);
/*----- functions -----*/
init();

function init() {
    win = false;
    compPattern = [];
    playerChoices = [];
    flash = 0;
    round = 0;
    gameTurn = 0;
    compTurn = true;
    interval = setInterval(gameTurn, 800);
 }

function getRandom() {
    for (var i = 0; i < 15; i++) {
        compPattern.push(Math.floor(Math.random() * 4) + 1);
    } 
}

 startButton.addEventListener('click', (event) => {
    if (startButton.click == true) {
        on = true;
    } else {
        on = false;
        clearInterval();
    }
});

startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});
    
function gameTurn() {
   on = false; //play will not be able to click anything
   if (flash == turn) {
       clearInterval(interval);
       compTurn = false;
       clearColor();
       on = true; //play will now be able to click colors
   }
}





