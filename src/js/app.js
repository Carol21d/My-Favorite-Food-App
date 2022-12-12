function relojFormat(num) {
    return num < 10 ? "0" + num : num;
    
}

function startTime(duration, element) {
    let timeRemaining = duration;
    let minutes = 0;
    let seconds = 0;
    
    let countTime = setInterval(function() {
        minutes = parseInt(timeRemaining / 60);
        seconds = parseInt(timeRemaining % 60);

        element.textContent = `${relojFormat(minutes)}:${relojFormat(seconds)}`;
        timeRemaining = timeRemaining - 1;
        if (timeRemaining < 0) {
            clearInterval(countTime);
            
        };


        
    },1000);
}

function play() {
    let timeminutes = 45;
    let timeseconds = 00;

    let duration = timeminutes * 60 + timeseconds;
    element = document.querySelector("#preparation-time");
    element.textContent = `${relojFormat(timeminutes )}:${relojFormat(timeseconds)}`;
    startTime(--duration,element);
    
}

