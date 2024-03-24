const days = document.getElementById('days')
const hours = document.getElementById('hours')
const min = document.getElementById('min')
const sec = document.getElementById('sec')


const currentYear = new Date().getFullYear()

const newYearTime = new Date(`January ${currentYear + 1} 00:00:00` )

function update(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    sec.style.color = color
    min.style.color = color
    hours.style.color = color
    days.style.color = color
    const showDays = Math.floor(diff / day);
    const showHours = Math.floor((diff % day) / hour);
    const showMinutes = Math.floor((diff % hour) / minute);
    const showSeconds = Math.floor((diff % minute) / second);


    

    days.innerHTML = showDays < 10 ? '0' + showDays:showDays;
    hours.innerHTML = showHours < 10 ? '0' + showHours:showHours;
    min.innerHTML = showMinutes < 10 ? '0' + showMinutes:showMinutes;
    sec.innerHTML = showSeconds < 10 ? '0' + showSeconds:showSeconds;
    
   
}
setInterval(update,1000);


