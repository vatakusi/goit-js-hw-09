/* В HTML есть разметка формы, в поля которой пользователь будет вводить:

- первую задержку в миллисекундах (First delay), 
- шаг увеличения задержки для каждого промиса после первого (Delay step) и 
- количество промисов которое необходимо создать. (Amount) 

Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

*/

import Notiflix from 'notiflix';
//////imports

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmint);

function handleSubmint(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  const dataForm = {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  };
  console.log(dataForm);
  console.log('amount', dataForm.amount);

  for (let i = 1; i <= dataForm.amount; i += 1) {
    createPromise(i, dataForm.delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success('Resolve promise ' + position + ' in: ' + delay + 'ms');
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure('Reject promise ' + position + ' in: ' + delay + 'ms');
      });
    dataForm.delay += dataForm.step;
  }

  return dataForm;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        console.log(position, delay, ': err');
        reject({ position, delay });
      }
    }, delay);
  });
}
