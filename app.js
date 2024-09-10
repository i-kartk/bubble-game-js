const main = document.querySelector("main");
const page1= main.children[0];
const page2= main.children[1];
const page3 = main.children[2];
console.log(page3)


console.log(page3.children[0].children[0])
const startButton = page1.children[2];
const panel = page2.children[1];
const topPanel = panel.children[0];
const bottomPanel = panel.children[1];


let targetNum = 0;
let score = 0;
let time = 0;

startButton.addEventListener('click', function(){
    page2.classList.add("show");
    page1.style.display = "none";
    page3.style.display = "none";
    getTargetNumber()
    countDown()
    createBubbles()
    checkForTargetHit()
},false);


function updateTargetNum(number){
    topPanel.firstElementChild.children[1].textContent = number

}

function updateTime(counter){
    topPanel.children[1].children[1].textContent = counter
}

function updateScore(score) {
   topPanel.children[2].children[1].textContent = score
}

function randomNumber(){
    return  Math.floor(Math.random() * 10);
}

function getTargetNumber(){
    targetNum = randomNumber()
    updateTargetNum(targetNum) 
}

function createBubbles(){
    let bubble_cluster = " ";
    for(let i=0; i<133; i++){
        bubble_cluster += `<div class="bubble"> ${randomNumber()} </div>`;
    }
    bottomPanel.innerHTML = bubble_cluster
}
function countDown(){
    count= 5
    let timer = setInterval(function () {
        if(count >= 0){
            updateTime(count)
            count--;
        }else{
            clearInterval(timer)
            count=0;
            finalScore()
        }
    },1000)
}

function getScore(){
    score += 10
    updateScore(score)
}

function checkForTargetHit(){
    bottomPanel.addEventListener("click", hitCheck,false);   
}

let hitCheck = function (event){
    if( targetNum === Number(event.target.innerText)){
        getScore();
        getTargetNumber();
        createBubbles();
    }
}

function finalScore(){

    page1.style.display = "none"
    page2.style.filter = "blur(.7px)"
    page3.style.display = "flex"
    page3.style.zIndex = "999"
    page3.style.background ="rgba(255, 0, 0, 0.495)"
    let maxScore = topPanel.children[2].children[1].textContent;
    page3.children[0].children[0].textContent = maxScore;


    
}

