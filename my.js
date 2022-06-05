'use strict';
let title  
let screens 
let screenPrice  
let adaptive 

let rollback = 15;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1 
let service2 

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title =  prompt('как называется ваш проект?');
    screens = prompt("Какие типы экранов нужно разработать?","Простые,Сложные,Интерактивные.");
    screenPrice = prompt("стоимость работы?","1000,2000 т.р?");
    while(!isNumber(screenPrice)) {
        screenPrice = prompt("стоимость работы?","1000,2000 т.р?");

    }
    adaptive = confirm("нужен адаптив?");
}

const getAllServicePrices = function() {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Дополнительный тип услуг?");
        } else if (i === 1) {
            service2 = prompt("Нужны еще услуги?");
        }
        sum += +prompt("Какая стоимость","1000");
    }
    return sum
    // return servicePrice1+ servicePrice2
}
const showTypeOf = function (variable) {
    console.log(variable,typeof variable);
}
const getFullPrice = function() {
    return screenPrice + allServicePrices
}
const getServisePercentPrice = function() {
    return fullPrice - (fullPrice * (rollback/100));
}
const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()  
}

const getRollbackMessage = function() {

if(fullPrice >= 30000) {
  return('Даем скидку 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    return('Даем скидку 5%');
} else if (fullPrice >= 0 && fullPrice < 15000) {
    return('Скидка не предусмотрена!');
} else if (fullPrice < 0) 
    return('чтото пошло не так!');
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();    
servicePercentPrice = getAllServicePrices(); 
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices",allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(servicePercentPrice);
console.log("Стоимость верстки экранов" + screenPrice + "Стоимость разработки сайта" + fullPrice + "Юани");