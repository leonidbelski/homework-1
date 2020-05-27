(function () {
  'use strict';
  
  let money = prompt('Ваш бюджет на месяц?', 100),
      time = prompt('Введите дату в формате YYYY-MM-DD', '2020-05-03'),
      firstQuestion1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
      secondQuestion1 = prompt('Во сколько обойдется?', ''),
      firstQuestion2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
      secondQuestion2 = prompt('Во сколько обойдется?', ''),
      countDaysMonth = 30,
      appData = {
        money: money,
        time: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
      },
      countMoneyDay = appData.money/countDaysMonth;

  appData.expenses[firstQuestion1] = secondQuestion1;
  appData.expenses[firstQuestion2] = secondQuestion2;

  console.log(appData);
  alert('Бюджет на 1 день: ' + countMoneyDay);
}());
