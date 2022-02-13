/* Задание 2 - таймер обратного отсчета
Выполняй это задание в файлах 02-timer.html и 02-timer.js. Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты. Такой таймер может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д. Посмотри демо видео работы таймера. 

<form>
   <p>Выберите дату: 
   <input type="date" name="calendar" value="2012-06-01"
    max="2012-06-04" min="2012-05-29">
   <input type="submit" value="Отправить"></p>
  </form>

  - увеличить размер шрифта цифр
  - поставить их над подписями
  - подписи в верхний регистр
  - формат даты с часами
  -

  /////

  // Otherwise, selectors are also supported
flatpickr("#myID", {});

// creates multiple instances
flatpickr(".anotherSelector");

*/

// add to .timer - display: flex;
//.field display: flex;

/////import
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
///////////////////PARS DOM
const body = document.querySelector('body');
const formTimer = document.querySelector('.timer');
const field = document.querySelectorAll('.field');
const input = document.querySelector('input#datetime-picker');
const button = document.querySelector('button');
//// STYLES
const styles = () => {
  body.style.marginLeft = '50px';
  formTimer.style.display = 'flex';
  formTimer.style.width = '220px';
  formTimer.style.marginTop = '10px';
  formTimer.style.justifyContent = 'space-between';
  field.forEach((el, i) => {
    field[i].style.display = 'flex';
    field[i].style.flexDirection = 'column';
    field[i].style.alignItems = 'center';
    field[i].firstElementChild.style.fontSize = '26px';
    field[i].lastElementChild.style.textTransform = 'uppercase';
    field[i].lastElementChild.style.fontSize = '12px';
  });
};
styles();
/////// SET DATEINPUT
flatpickr('input', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateInput = selectedDates[0];
    const currentDate = new Date();
    if (dateInput.getTime() <= currentDate.getTime()) {
      button.setAttribute('disabled', 'disabled');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      button.removeAttribute('disabled');
      let timerMilisec = dateInput.getTime() - currentDate.getTime();
      const eventButton = button.addEventListener('click', handleSubmint);
      function handleSubmint(event) {
        console.log('Start: ');
        setInterval(() => {
          timerMilisec -= 1000;
          const objDate = convertMs(timerMilisec);
          function addLeadingZero(value) {
            const { days, hours, minutes, seconds } = value;
            const newValue = Object.keys(value).map(key => {
              return String(value[key]).padStart(2, '0');
            });
            field[3].firstElementChild.textContent = `${newValue[3]}`;
            field[2].firstElementChild.textContent = `${newValue[2]}`;
            field[1].firstElementChild.textContent = `${newValue[1]}`;
            field[0].firstElementChild.textContent = `${newValue[0]}`;
          }
          addLeadingZero(objDate);
        }, 1000);
      }
    }
  },
});

/////////////
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
/////////////
