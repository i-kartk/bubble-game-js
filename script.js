const panel = document.querySelector(".panel-bottom");
const restartPanel = document.getElementById("restart-toggle")
let hitNumber;
let countdown;
let scoreVal = 0;


// DOM MODIFICATION FUNCTIONS

function updateHitVal(num){
    document.getElementById("hitVal").textContent = num
}

function updateScore(score){
    document.getElementById("scoreVal").textContent = score;
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

function restart(){

    panel.parentElement.style.display = "none";
    restartPanel.parentElement.children[0].style.display = "none";
    restartPanel.parentElement.children[1].style.display = "none";
    restartPanel.style.display = 'flex';
    restartPanel.style.zIndex = 999;
    document.getElementById("final-score").textContent = scoreVal;

    restartPanel.children[1].firstElementChild.addEventListener('click',function(e){
       
        
   
    },false)
    restartPanel.children[1].lastElementChild.addEventListener('click', function(){
        
    },false)
    
}





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
    countdown = 3

    let timer = setInterval(() => {
        if(countdown > 0){
            countdown--;
            updateTimer(countdown);
        }
        else{
            clearInterval(timer);
            restart();
        }
    }, 1000);
}

function increaseScore(){
    scoreVal += 10
    updateScore(scoreVal)
}

function targetClick(){
   panel.addEventListener('click', clickCheck,false)
}

const clickCheck = function(event){
    if( hitNumber === Number(event.target.innerText)){
        increaseScore();
        createBubbles();
        targetValue();
    }
}

countDown();
targetValue();
createBubbles();
targetClick();