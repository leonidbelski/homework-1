(function () {
  'use strict';
  
  let money = prompt('Ваш бюджет на месяц?', '1000'),
      time = prompt('Введите дату в формате YYYY-MM-DD', '2020-05-03'),
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

  for ( let i=0; i<2; i++) {
    let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', '500'),
        secondQuestion = prompt('Во сколько обойдется?', '100');
    
    appData.expenses[firstQuestion] = secondQuestion;
  }

  console.log(appData);
  alert('Бюджет на 1 день: ' + countMoneyDay);
}());
