let numToHit;
let score=0;;
let timer = 0;

    function hitNumGenerator(){
        numToHit = Math.floor(Math.random() *10)
        document.querySelector("#hitVal").textContent = numToHit
    }

function createBubbles(){
    const bubble_area = document.querySelector(".panel-bottom");

    let bubbleCluster = " ";

    for (let i= 1; i<=160; i++){
        let randomNumber = Math.floor(Math.random() * 10)
        bubbleCluster += `<div class="bubble"> ${randomNumber} </div>`
    }
    bubble_area.innerHTML = bubbleCluster

}

function runTimer() {
    let countDown = 60;
    let timer = setInterval( function () {
        if (countDown > 0){
            countDown--;
            document.querySelector("#timerVal").textContent = countDown;
        }else{
            clearInterval(timer)
            document.querySelector('.panel-bottom').textContent = `
            Times up Start a new Game`
        }
        
    },1000)
}

function increaseScore(){
    score += 10;
    console.log(score)
    document.querySelector("#scoreVal").textContent = score;
    
}

function click(){
    document.querySelector(".panel-bottom").addEventListener("click", function (event){
       console.log()
       if(numToHit  === Number(event.target.innerText)){
        increaseScore()
        hitNumGenerator()
       }

    },false)
}
createBubbles()
runTimer()
hitNumGenerator()
click()
