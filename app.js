const main = document.querySelector("main");
const page1= main.children[0];
const page2= main.children[1];
const page3 = main.children[2];
const HomeButton = page3.lastElementChild.children[0]
const restartButton = page3.lastElementChild.children[1]
const startButton = page1.children[2];
const panel = page2.children[1];
const topPanel = panel.children[0];
const bottomPanel = panel.children[1];
let score = 0;

// Event listeners defined once at the start


HomeButton.addEventListener("click", function(){
    console.log(window.location.href = "index.html")

    // page1.style.display = "flex";  // Show the start screen
    // page2.style.display = "none";  // Hide the game screen
    // page3.style.display = "none";  // Hide the result screen
    resetGame();  
}, false);

restartButton.addEventListener('click', function(){
    page1.style.display = "none";  // Hide the start screen
    page2.style.display = "flex";  // Show the game screen
    page3.style.display = "none";  // Hide the result screen
    resetGame();                   // Reset the game and start it again
    startGame();                   // Function to restart the game
}, false);


// Rest of your game logic remains the same

startButton.addEventListener('click', function(){
    page2.classList.add("show");
    page1.style.display = "none";
    page3.style.display = "none";
    startGame()
}, false);

function resetGame(){
    score = 0;               // Reset score
    time = 30;                // Reset countdown time
    targetNum = 0;           // Reset target number
    updateTargetNum(targetNum); // Update UI with reset values
    updateScore(score);         // Reset score in UI
    updateTime(time);           // Reset time in UI
    bottomPanel.innerHTML = ""; // Clear all bubbles
}

function startGame(){
    getTargetNumber();   // Get a new target number
    countDown();         // Start countdown again
    createBubbles();     // Create bubbles again
    checkForTargetHit(); // Start checking for hits again
}

function updateTargetNum(number){
    topPanel.firstElementChild.children[1].textContent = number;
}

function updateTime(counter){
    topPanel.children[1].children[1].textContent = counter;
}

function updateScore(score) {
    topPanel.children[2].children[1].textContent = score;
}

function randomNumber(){
    return  Math.floor(Math.random() * 10);
}

function getTargetNumber(){
    targetNum = randomNumber();
    updateTargetNum(targetNum); 
}

function createBubbles(){
    let bubble_cluster = " ";
    for(let i=0; i<133; i++){
        bubble_cluster += `<div class="bubble"> ${randomNumber()} </div>`;
    }
    bottomPanel.innerHTML = bubble_cluster;
}

function countDown(){
    let count = 30; // Avoid using global variable
    let timer = setInterval(function () {
        if(count >= 0){
            updateTime(count);
            count--;
        }else{
            clearInterval(timer);
            finalScore();
        }
    }, 1000);
}

function getScore(){
    score += 10;
    updateScore(score);
}

function checkForTargetHit(){
    bottomPanel.addEventListener("click", hitCheck, false);   
}

let hitCheck = function (event){
    if(targetNum === Number(event.target.innerText)){
        event.target.classList.add("hit-animation");
        getScore();
        getTargetNumber();
        createBubbles();
    }
}

function finalScore(){
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "flex";
    page3.style.zIndex = "999";
    page3.style.background = "rgba(255, 0, 0, 0.495)";
    let maxScore = topPanel.children[2].children[1].textContent;
    page3.children[0].children[0].textContent = maxScore;
}


