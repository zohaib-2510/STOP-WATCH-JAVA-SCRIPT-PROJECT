 let timeScreen = document.getElementById("time-screen");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let ms = 0;
let sec = 0;
let mins = 0;
let timerId = null;

startBtn.addEventListener("click",function(){
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId=setInterval(startTimer,10);
});
stopBtn.addEventListener("click",function(){
    clearInterval(timerId);
});
resetBtn.addEventListener("click",function(){
    clearInterval(timerId);
    timeScreen.innerHTML=`00 : 00 : 00`;
});

function startTimer(dets){
    ms++;
    if(ms==10){
        ms=0;
        sec++;
        if(sec==60){
            sec=0;
            mins++;
        }
    }
    let msString;
    if(ms<10){
        msString=`0${ms}`;
    }
    else{
        msString=ms;

    }
    let secString;
    if(sec<10){
        secString=`0${sec}`;
    }
    else{
        secString=sec;

    }
    let minsString;
    if(mins<10){
        minsString=`0${mins}`;
    }
    else{
        minsString=mins;

    }
timeScreen.innerHTML=`${minsString} : ${secString} : ${msString}`
timeScreen.style.color="white"
timeScreen.style.fontSize="25px"
timeScreen.style.fontWeight="900"
timeScreen.style.textAlign="center"
}
startTimer();


























