// /*----- constants -----*/
const colors = ['red', 'green', 'blue', 'yellow'];
const flashColors = ['pink', 'limegreen', 'aqua', 'gold'];


// /*----- app's state (variables) -----*/

let pattern = []; //comp order
//let playerPattern = []; // player order
let round;//keeps up with what turn we are on 
let compTurn; //true or false 
let intervals;
let results;
let delay;


// //let matchPattern;

// /*----- cached element references -----*/
// const red = document.querySelector("#red");
// const green = document.querySelector("#green");
// const blue = document.querySelector("#blue");
// const yellow = document.querySelector("#yellow");

// /*----- event listeners -----*/
document.querySelector('.container').addEventListener('click', handleClick);
document.querySelector('#start-button').addEventListener('click', (event) => {
    init();
});
message = document.querySelector("#message")
// /*----- functions -----*//

function init() {
    round = 0;
    delay = 500;
    compTurn = true;
    pattern = [];
    document.getElementById('message').style.display = "none";
    computerTurn();
}

function getRandomColor() {
    return Math.floor(Math.random() * 4);
}


function computerTurn() {
    round++;
    document.querySelector('#round').innerText = round;
    pattern.push(getRandomColor());
    renderPattern(0);
    compTurn = false;
    playerButtonCount = 0;
}

function renderPattern(i) {
    if(i < pattern.length) {
        blinkColor(pattern[i]);
        setTimeout(() => {
            i++;
            renderPattern(i);
        }, 350);
    }
}

function blinkColor(color) {
    let button = document.querySelector('#' + colors[color]);
    button.style.backgroundColor = flashColors[color];
    setTimeout(() => {
        button.style.backgroundColor = '';
    }, 350);
}

function handleClick(evt) {
    if(compTurn === false) {
        let buttonColor = evt.target.id;
        let colorIndex = colors.indexOf(buttonColor);
        if (wrongClick(colorIndex)) {
            document.getElementById('message').style.display = "block";
            message.innerText = message.textContent = 'Incorrect!';
            compTurn = true;
        } else {
            playerButtonCount++;
            if(playerButtonCount === round) {
                document.getElementById('message').style.display = "block";
                message.innerText = message.textContent = 'Correct! Keep Watching!';
                compTurn = true;
                computerTurn();
            }
        }
    }
}

function wrongClick(colorIndex) {
    if (colorIndex !== pattern[playerButtonCount]) {
      return true;
    } return false;
  }

function playAgain() {
    init();
};