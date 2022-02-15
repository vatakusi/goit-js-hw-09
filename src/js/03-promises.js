/* В HTML есть разметка формы, в поля которой пользователь будет вводить:

- первую задержку в миллисекундах (First delay), 
- шаг увеличения задержки для каждого промиса после первого (Delay step) и 
- количество промисов которое необходимо создать. (Amount) 

Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

*/

import Notiflix from 'notiflix';
//////imports
//         res(Notiflix.Notify.success('Sol lucet omnibus'));
//         rej(Notiflix.Notify.failure('Please choose a date in the future'));

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmint);

function handleSubmint(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  const dataForm = { delay: delay.value, step: step.value, amount: amount.value };
  console.log(dataForm);

  const arrAmount = n => [...Array(n).keys()];
  arrAmount(Number(dataForm.amount)).forEach(
    num => createPromise(num, Number(dataForm.delay)),
    // console.log(num),
  );
  // createPromise(1, 1000);

  console.log(dataForm.amount);
  return dataForm;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
        console.log(resolve({ position, delay }));
      } else {
        // Reject
        reject({ position, delay });
        console.log('ko');
      }
    }, delay);
  });
}
