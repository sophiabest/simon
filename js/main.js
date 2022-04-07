/*----- constants -----*/



/*----- app's state (variables) -----*/
let compPattern = []; //order of light 
let playerPattern = []; //player order of clicking lights 
let round; //keep up with what round we are on 
let flash;
let compTurn;
let intervals;
let win;
let numClick; 
let colors = ["red", "green", "blue", "yellow"];
//let matchPattern;

/*----- cached element references -----*/
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const startButton = document.querySelector('#start-button');
const roundCount = document.querySelector('#round');
const message = document.getElementById("message");

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
    // numClick = -1;
    round = 0;
    newColor();
    render();
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
    //console.log()
}

function newColor() {
    compPattern.push(Math.floor(Math.random() * 4) + 1);
    console.log(compPattern);
    // let rand = Math.floor(Math.random() * 4);
    // let color = colors[rand];
    // compPattern.push(color);
    // console.log(compPattern);
    // playerTurn();
}

function playerTurn() {
    if (flash === round) {
        clearInterval(intervals);
        compTurn = false;
        clearColor();
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

function one() {
    red.style.backgroundColor = "pink";
    setTimeout(() => {
       red.style.backgroundColor = "red";
    }, 350);
}
function two() {
    blue.style.backgroundColor = "aqua";
    setTimeout(() => {
        blue.style.backgroundColor = "blue";
    }, 350);
}
function three() {
    yellow.style.backgroundColor = "gold";
    setTimeout(() => {
        yellow.style.backgroundColor = "yellow";
    }, 350);
}
function four() {
    green.style.backgroundColor = "limegreen";
    setTimeout(() => {
        green.style.backgroundColor = "green";
    }, 350);
}

function clearColor() {
    red.style.backgroundColor = "red";
    blue.style.backgroundColor = "blue";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "green";
}

red.addEventListener('click', (event) => {
    if (flash) {
        playerPattern.push(1);
        runCheck();
        one();
    } console.log('red');
})

blue.addEventListener('click', (event) => {
    if (flash) {
        playerPattern.push(2);
        runCheck();
        two();
    } console.log('blue');
})

yellow.addEventListener('click', (event) => {
    if (flash) {
        playerPattern.push(3);
        runCheck();
        three();
    } console.log('yellow');
})

green.addEventListener('click', (event) => {
    if (flash) {
        playerPattern.push(4);
        runCheck();
        four();
    } console.log('green');
})

function runCheck() {
    if (JSON.stringify(compPattern) === JSON.stringify(playerPattern)) {
        message.innerText = message.textContent = 'Correct!';
        playerPattern = [];
        compTurn = true;
        addColors();
        interval = setInterval(gameTurn, 500);
    }
    if (JSON.stringify(compPattern) !== JSON.stringify(playerPattern)) {
        message.innerText = message.textContent = 'Incorrect!';
        round = 1;
        playerPattern = [];
        compPattern = [];
    }
    }
    console.log(runCheck);




function addColors() {
        newColor();
        //console.log(compPattern);
        playerPattern = [];
        let delay = 800;
        for (let color of compPattern)
            if (color === 1) {
                setTimeout(() => {
                    red.style.backgroundColor = "pink";
                }, delay);
                delay += 500;
            } else if (color === 2) {
                setTimeout(() => {
                    blue.style.backgroundColor = "aqua";
                }, delay);
                delay += 500;
            } else if (color === 3) {
                setTimeout(() => {
                    yellow.style.backgroundColor = "gold";
                }, delay);
                delay += 500;
            } else if (color === 4) {
                setTimeout(() => {
                    green.style.backgroundColor = "limegreen";
                }, delay);
                delay += 500;
            }

    
}


function render() {
    addColors();
}

// function runCheck() {
//     playerPattern.push(color);
//     if (color === compPattern[numClick]) {
//         if(playerPattern.length === compPattern.length) {
//             setTimeout(function() {
//                 playerPattern = [];
//                 numClick = -1;
//                 addColors;
//             }, 1000)
//         } 
//     } else {
//         message.innerText = message.textContent = 'Game over!';
//         playerPattern = [];
//         compPattern = [];
//         round = 0;
//         numClick = -1;
//     }
// }