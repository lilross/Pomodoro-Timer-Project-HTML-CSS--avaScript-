const SSButton = document.querySelector('.SSButton')
const ResetButton = document.querySelector('.ResetButton')
const TimeElement = document.querySelector('.Time');
const NumberElement = document.querySelector('.CountNumber');
let work=60*25
let Break=60*5
let time=work;
let isworking=true;
let Timer= null;
SSButton.addEventListener('click', () => {
    if (Timer ===null){
     Timer = setInterval(() => {
        if (time>0){
        time--;
        let minute = Math.trunc(time/60);
        let second = time%60;
        TimeElement.textContent = `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
    }
        if (time===0){
            clearInterval(Timer);
            SSButton.textContent = "Start";
            Timer = null;
            if (isworking===true){
                time=Break;
                let minute = Math.trunc(time/60);
                let second = time%60;
                TimeElement.textContent = `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
                NumberElement.textContent = parseInt(NumberElement.textContent)+1;
                isworking=false;
            }else {
                time=work;
                let minute = Math.trunc(time/60);
                let second = time%60;
                TimeElement.textContent = `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
                isworking=true;
            }
            alert("Time's up! Take a break.");
        }
    },1000);
        SSButton.textContent = "Stop";
    }else {
            clearInterval(Timer);
            Timer = null;
            SSButton.textContent = "Start";
        }
});

ResetButton.addEventListener('click', () => {
    clearInterval(Timer);
    Timer= null;
    if (isworking===true){
        time=work;
        let minute = Math.trunc(time/60);
        let second = time%60;
        TimeElement.textContent = `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`

    }else{
        time=Break;
        let minute = Math.trunc(time/60);
        let second = time%60;
        TimeElement.textContent = `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
    }
});
