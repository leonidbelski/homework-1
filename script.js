(function () {
  'use strict';
  
  const money = prompt('Ваш бюджет на месяц?', 100);
  const time = prompt('Введите дату в формате YYYY-MM-DD', '2020-05-03');
  const firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', '100');
  const secondQuestion = prompt('Во сколько обойдется?', '100');
  const countDaysMonth = 30;
  const appData = {
    money: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
  };
  let countMoneyDay = appData.money/countDaysMonth;

  appData.expenses[firstQuestion] = secondQuestion;


  console.log(appData);
  alert('Бюджет на 1 день: ' + countMoneyDay);
}());
