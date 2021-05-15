const displayClock = document.querySelector('.digital-clock');
const displayDate = document.querySelector('.display-date');

const formatUnit = unit => String(unit).length === 1 ? `0${unit}` : unit;

const clockHTML = (hours, minutes, seconds) => `
    <span>${formatUnit(hours)}</span> :
    <span>${formatUnit(minutes)}</span> :
    <span>${formatUnit(seconds)}</span>
`;

const dateHTML = (day, month, year) => `
    <span>${formatUnit(day)}</span> /
    <span>${formatUnit(month)}</span> /
    <span>${formatUnit(year)}</span>
`;

const clockTime = () => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    displayClock.innerHTML = clockHTML(hours, minutes, seconds);

    displayDate.innerHTML = dateHTML(day, month, year);

}

setInterval(clockTime, 1000);