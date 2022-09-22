const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;

    hours.textContent = hr;
    minutes.textContent = min;

})

