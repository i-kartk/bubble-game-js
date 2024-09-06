function hit(){
    var randomNumber = Math.floor(Math.random() * 10 )
    document.querySelector("#hitVal").textContent = randomNumber

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
        }
        
    },1000)
}

function increaseScore(){
    let score = 4
    score += 10;
    document.querySelector("#scoreVal").textContent = score
}
createBubbles()
runTimer()
hit()
increaseScore()