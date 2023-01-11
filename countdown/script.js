let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let endDate = '01/20/2023 17:00:00'; //date format mm/dd/yyyy hh:mm:ss

let x = setInterval( () => {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // Time calculation for days, hours, minutes and seconds.
    let d = Math.floor(distance / ( 1000 * 60 * 60 * 24));
    let h = Math.floor((distance % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let m = Math.floor((distance % ((1000 * 60 * 60)) / (1000 * 60)));
    let s = Math.floor((distance % ((1000 * 60)) / (1000)));
    
    // output the results in elements with id
    days.innerHTML = d + "<br><span>dias</span>";
    hours.innerHTML = h + "<br><span>horas</span>";
    minutes.innerHTML = m + "<br><span>min</span>";
    seconds.innerHTML = s + "<br><span>seg</span>";

    // animate stroke
    dd.style.strokeDashoffset = 440 - (( 440 * d ) / 10);
    hh.style.strokeDashoffset = 440 - (( 440 * h ) / 24);
    mm.style.strokeDashoffset = 440 - (( 440 * m ) / 60);
    ss.style.strokeDashoffset = 440 - (( 440 * s ) / 60);

    // if the countdown is over, write some text
    if ( distance < 0 ){
        clearInterval(x);
        document.getElementById('time').style.display = 'none';
        document.querySelector('.happyBirthday').style.display = 'block';
    }
});