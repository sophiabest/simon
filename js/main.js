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

function getColor() {
    return arr.push(colorsArray[Math.floor(Math.random() * colorsArray.length)])
};

function flashes(arr) {
    let i= 0;
    let interval = setInterval(function() {
    if (i >= arr.length) {
        clearInterval(interval);
        } 
    }, 1500);
};

function resetPlayerChoices () {
    playerChoices = [];
};

function newRounds () {
    rounds++
};

function reset() {
    rounds = 0;
    compPattern = [];
    resetPlayerChoices;
};

function playerChoices() {
    if (rounds === 15) {
        alert("You win!");
        resetGame;
    }

    updateRounds();

    for (var i = 0; i < playerChoices.length; i++) {
        if (JSON.stringify(compPattern) === JSON.stringify(playerChoices)) {
            resetPlayerChoices();
            playerChoices();
            break;
        }
        if (playerChoices[i] !== compPattern[i]) {
            if (
                playerChoices[i] !== compPattern[i]
            ) {
                alert("YOU LOSE");
                resetGame;
                break;
            }
        }
    }
};

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





