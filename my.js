'use strict';

// const appData = {
//      title: '', 
//      screens:'',
//      screenPrice: 0, 
//      adaptive: true, 
    
//      rollback: 10,
//      allServicePrices: 0,
//      fullPrice: 0,
//      servicePercentPrice: 0,
//      service1:'', 
//      service2:'',
//      asking: function() {

//         appData.title =  prompt('как называется ваш проект?');
//         appData.screens = prompt("Какие типы экранов нужно разработать?","Простые,Сложные,Интерактивные.");
//         do{
//              appData.screenPrice = prompt("стоимость работы?","1000,2000 т.р?");
//          } while(!isNumber(appData.screenPrice)) {
           
//         }
//         appData.adaptive = confirm("нужен адаптив?");  
// }
// }
// const isNumber = function(num) {
//     return !isNaN(parseFloat(num)) && isFinite(num)
// }


// const getAllServicePrices = function() {
//     let sum = 0
//     for (let i = 0; i < 2; i++) {
//         let price = 0

//         if (i === 0) {
//             appData.service1 = prompt("Дополнительный тип услуг?");
//         } else if (i === 1) {
//             appData.service2 = prompt("Нужны еще услуги?");
//         }
//         do {
//             price = prompt("Сколько это будет стоить?")
//         } while (!isNumber(price))
//         sum += +price
//     }

//     return sum
// }
//     // return servicePrice1+ servicePrice2



// const getFullPrice = function() {
//     return appData.screenPrice + appData.allServicePrices
// }
// const getServisePercentPrice = function() {
//     return appData.fullPrice - (appData.fullPrice * (rollback/100));
// }
// const getTitle = function () {
//   return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()  
// }

// const getRollbackMessage = function() {

// if(fullPrice >= 30000) {
//   return('Даем скидку 10%');
// } else if (fullPrice >= 15000 && fullPrice < 30000) {
//     return('Даем скидку 5%');
// } else if (fullPrice >= 0 && fullPrice < 15000) {
//     return('Скидка не предусмотрена!');
// } else if (fullPrice < 0) 
//     return('чтото пошло не так!');
// }

// appData.asking();
// appData.allServicePrices = getAllServicePrices();
// appData.fullPrice = getFullPrice();    
// appData.servicePercentPrice = getAllServicePrices(); 
// appData.title = getTitle();



// console.log(appData.fullPrice);
// console.log(appData.servicePercentPrice);
