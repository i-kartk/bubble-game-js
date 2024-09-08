const panel = document.querySelector(".panel-bottom");
let hitNumber;
let countdown;
let scoreVal = 0;

// DOM MODIFICATION FUNCTIONS

function updateHitVal(num){
    document.getElementById("hitVal").textContent = num
}

function updateScore(score){
    document.getElementById("scoreVal").textContent = score;
    console.log(score)
}

function updateTimer(time){
    document.getElementById("timerVal").textContent = time
}

//UTILITY FUNCTIONS

const showPanel = function (){
    document.getElementById("start-btn").addEventListener("click", function() {
        // Jab button pe click hoga to panel ko dikhana
        document.querySelector(".page-2").classList.add("show");
        console.log("hello");
    });
    
}()


const randomNumber = function(){
    return  Math.floor(Math.random() * 10);
}


// FEATURE FUNCTIONS

function createBubbles(){
    let bubble_cluster = " ";

    for(let i=0; i<133; i++){
        bubble_cluster += `<div class="bubble"> ${randomNumber()} </div>`;
    }
    panel.innerHTML = bubble_cluster
}

function targetValue(){
    hitNumber = randomNumber()
    updateHitVal(hitNumber);
}


function countDown(){
    countdown = 60

    let timer = setInterval(() => {
        if(countdown > 0){
            countdown--;
            updateTimer(countdown);
        }else{
            clearInterval(timer);
        }
    }, 1000);
}

function score(){
    scoreVal += 10
    updateScore(scoreVal)
}

function targetClick(){
   panel.addEventListener('click', clickCheck,false)
}

const clickCheck = function(event){
    if( hitNumber === Number(event.target.innerText)){
        score();
        createBubbles();
        targetValue();
    }
}

countDown();
targetValue();
createBubbles();
targetClick();