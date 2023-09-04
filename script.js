let bubble = "" 
let pbtm = document.getElementById("pbtm")
let timerval = 60
const timer = document.getElementById('timer')
const hitval = document.getElementById('hitval')
const score = document.getElementById("score")
let currentScore = 0;
let hitrn = 0

let makeBubbles = (detail)=>{
    for(let i=1; i<=168; i++){
        let rn = Math.floor(Math.random()*10)
        bubble += `<div class="bubble">${rn}</div>`
    }
    console.log(detail)

    pbtm.innerHTML = bubble
}
makeBubbles()

const setTimer = ()=>{
    let timerinterval = setInterval(()=>{
        if(timerval > 0){
            timerval--
            timer.textContent = timerval
            
        } else {
            clearInterval(timerinterval)
            pbtm.innerHTML = `<h1>Game Over</h1>`
            
        }
    },1000)
}
setTimer()

const getNewHit = ()=>{
    hitrn = Math.floor(Math.random()*10)
    hitval.textContent = hitrn
}
getNewHit()


const increaseScore = ()=>{
    currentScore += 10
    score.textContent = currentScore
}

pbtm.addEventListener('click',(detail)=>{
    // alert("Event chal raha hai")
    // console.log(Number(detail.target.textContent))
    // console.log(detail)
    clickedNumber = Number(detail.target.textContent)
    if(clickedNumber == hitrn){
        increaseScore()
        getNewHit()
        makeBubbles()
    }
})