let countdownEl = document.getElementById('countdown');
let countdownEl1 = document.getElementById('countdown1');
let costEl = document.getElementById('cost');
let timeLeft = 60;
function setCountdown(){
    if(timeLeft){
        let minutes = Math.floor(timeLeft/60);
        let seconds = timeLeft % 60;
        if(seconds < 10){
            seconds = '0' + seconds;
        }
        countdownEl.innerHTML = `${minutes}:${seconds}`;
        countdownEl1.innerHTML = `${minutes}:${seconds}`;
        timeLeft -= 1;
    } else {
        costEl.innerHTML = "1 000 000$";
        countdownEl.innerHTML = "Время вышло!";
        countdownEl.classList.toggle('red-text');
        countdownEl1.innerHTML = "Время вышло!";
        countdownEl1.classList.toggle('red-text');
    }
}
setInterval(setCountdown, 1000);
