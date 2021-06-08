const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth();

document.querySelector('.current-year-month').textContent = 
  currentYear + '년 ' + (currentMonth + 1) + '월';

const prevLast = new Date(currentYear, currentMonth, 0);
const thisLast = new Date(currentYear, currentMonth + 1, 0);

const plDate = prevLast.getDate();
const plDay = prevLast.getDay();

const tlDate = thisLast.getDate();
const tlDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(tlDate + 1).keys()].slice(1);
const nextDates = [];

if (plDay !== 6) {
  for (let i = 0; i < plDay + 1; i++) {
    prevDates.unshift(plDate - i);
  }
}

for (let i = 1; i < 7 - tlDay; i++) {
  nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);

dates.forEach((date, i) => {
  dates[i] = '<div class="date">' + date + '</div>';
})

document.querySelector('.dates').innerHTML = dates.join('');