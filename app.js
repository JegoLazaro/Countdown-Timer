const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear =  new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);


function updateCountdown(){
    const currentTime = new Date();
    const TimeDiff = newYearTime - currentTime;

    const days = Math.floor(TimeDiff / 1000 / 60 / 60 / 24); //compute days
    const hours = Math.floor(TimeDiff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(TimeDiff / 1000 / 60) % 60;
    const seconds = Math.floor(TimeDiff / 1000) % 60;

    this.days.innerHTML = days;
    this.hours.innerHTML = hours < 10 ? '0' + hours : hours;
    this.minutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    this.seconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);
