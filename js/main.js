/*----- constants -----*/
const colors = [1, 2, 3, 4];


/*----- app's state (variables) -----*/
let compPattern = []; //order of light 
let playerPattern = []; //player order of clicking lights 
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
    playerPattern = [];
    flash = 0;
    intervals = 0;
    round = 1;
    newColor();
    // for (var i = 0; i < 15; i++) {
    
    //console.log(Math.floor(Math.random() * 4) + 1);
    // }
    let delay = 350;
    blue.style.backgroundColor = 'white';
    setTimeout(() => {
        blue.style.backgroundColor = 'blue';
    }, delay);
    delay += 350;
    red.style.backgroundColor = 'white';
    setTimeout(() => {
        red.style.backgroundColor = 'red';
    }, delay);
    delay += 350;
    yellow.style.backgroundColor = 'white';
    setTimeout(() => {
        yellow.style.backgroundColor = 'yellow';
    }, delay);
    delay += 350;
    green.style.backgroundColor = 'white';
    setTimeout(() => {
        green.style.backgroundColor = 'green';
    }, delay);

    compTurn = true;

    intervals = setInterval(playerTurn, 200)
    console.log()
}

function playerTurn() {
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
        }, 1500);
    }
}

function newColor() {
    compPattern.push(Math.floor(Math.random() * 4) + 1);
    console.log(compPattern);
} 

function one() {
    red.style.backgroundColor = "pink";
}
function two() {
    blue.style.backgroundColor = "aqua";
}
function three() {
    yellow.style.backgroundColor = "yellow";
}
function four() {
    green.style.backgroundColor = "limegreen";
}

function clearColor() {
    red.style.backgroundColor = "red";
    blue.style.backgroundColor = "blue";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "green";
}

red.addEventListener('click', (event) => {
    if(flash) {
        playerPattern.push(1);
        //check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 200);
        }
    }console.log(red);
})

blue.addEventListener('click', (event) => {
    if(flash) {
        playerPattern.push(2);
        //check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 200);
        }
    }console.log(blue);
})

yellow.addEventListener('click', (event) => {
    if(flash) {
        playerPattern.push(3);
        //check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 200);
        }
    }console.log(yellow);
})

green.addEventListener('click', (event) => {
    if(flash) {
        playerPattern.push(4);
        //check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 200);
        }
    }console.log(green);
})
