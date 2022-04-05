/*----- constants -----*/
const colors = [1, 2, 3, 4];


/*----- app's state (variables) -----*/
let compPattern = []; //order of light 
let playerChoices = []; //player order of clicking lights 
let round; //keep up with what round we are on 
let flash;
let compTurn;
let intervals;
let win; 

//let matchPattern;

/*----- cached element references -----*/
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const startButton = document.querySelector('#start-button');
const roundCount = document.querySelector('#round');
/*----- event listeners -----*/
//document.querySelector('main').addEventListener('click', handleButton);
//document.querySelector('article').addEventListener('click', handleColorClick);
startButton.addEventListener('click', (event) => {
        init();
    
});
/*----- functions -----*/
function init() {
    win = false;
    compPattern = [];
    playerChoices = [];
    flash = 0;
    intervals = 0;
    round = 1;
    for (var i = 0; i < 15; i++) {
        compPattern.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;

    intervals = setInterval(gameTurn, 800)
}

function gameTurn() {
    if (flash === round) {
        clearInterval(intervals);
        compTurn = false;
        clearColor;
    }
    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (compPattern[flash] === 1) one();
            if (compPattern[flash] === 2) two();
            if (compPattern[flash] === 3) three();
            if (compPattern[flash] === 4) four();
            flash++;
        }, 400);
    }
}

function one() {
    red.style.backgroundColor = "tomato";
}
function two() {
    blue.style.backgroundColor = "lightskublue";
}
function three() {
    yellow.style.backgroundColor = "yellow";
}
function four() {
    green.style.backgroundColor = "lightgreen";
}

function clearColor() {
    red.style.backgroundColor = "darkred";
    blue.style.backgroundColor = "darkblue";
    yellow.style.backgroundColor = "goldenyellow";
    green.style.backgroundColor = "darkgreen";
}

red.addEventListener('click', (event) => {
    if(flash) {
        playerChoices.push(1);
        check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

blue.addEventListener('click', (event) => {
    if(flash) {
        playerChoices.push(2);
        check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

yellow.addEventListener('click', (event) => {
    if(flash) {
        playerChoices.push(3);
        check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

green.addEventListener('click', (event) => {
    if(flash) {
        playerChoices.push(4);
        check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
