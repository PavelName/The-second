'use strict';
let title = prompt('как называется ваш проект?');
let screens = prompt("Какие типы экранов нужно разработать?","Простые,Сложные,Интерактивные.");
let screenPrice = +prompt("стоимость работы?","1000,2000 т.р?");
let rollback = 50;
let adaptive = confirm("нужен адаптив?");

let service1 = prompt("Дополнительный тип услуг?");
let servicePrice1 = +prompt("Какая стоимость","1000");
let service2 = prompt("Нужны еще услуги?");
let servicePrice2 = +prompt("Сколько доплатить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;


let servicePercentPrice = fullPrice - (fullPrice*(rollback/100));

if(fullPrice >= 30000) {
    alert('Даем скидку 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    alert('Даем скидку 5%');
} else if (fullPrice > 0 && fullPrice < 15000) {
    alert('Скидка не предусмотрена!');
} else if (fullPrice < 0) 
    alert('чтото пошло не так!');


console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.toLowerCase());
console.log(fullPrice*(rollback/100));
console.log(screens.length);
console.log(screenPrice);
console.log(Math.ceil(servicePercentPrice));