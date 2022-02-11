/* Задание 1 - переключатель цветов

В HTML есть кнопки «Start» и «Stop».

<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

ВНИМАНИЕ
Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}*/

const body = document.querySelector('body');
const button = document.querySelectorAll('button');
const buttonStart = button[0];
const buttonStop = button[1];

buttonStart.addEventListener('click', () => {
  timeInterval = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  buttonStart.setAttribute('disabled', 'disabled');
  console.log(getRandomHexColor());
  console.log(123);
});
buttonStop.addEventListener('click', () => {
  clearInterval(timeInterval);
  buttonStart.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
