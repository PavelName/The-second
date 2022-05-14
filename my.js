'use strict';
 
// const arr = [0,1,33,4,6,7,3,17,8,2,5,9,-2,22,10];
// let count =-2;
// function selectionSort(array) {
//     for(let i = 0; i < array.length; i++) {
//         let indexMin = i
//         for(let j = i + 1; j < array.length; j++) {
//             if(array[i] < array[indexMin]) {
//                 indexMin = j
//             }
//             count +=1
//         }
//         let tmp = array[i];
//         array[i] = array[indexMin];
//         array[indexMin] = tmp;
//     }
//     return array;
// }
// console.log(selectionSort(arr));
// console.log(arr.length);
// console.log('count =', count);

// let num = (!!('hello 22'));
// console.log( typeof num);

// const bool = new Boolean(false);
// if (bool) console.log(bool);
// if (bool != false) console.log(bool);

let answer = confirm('Сколько тебе лет?');
if (answer == true) {
    alert('Проходи');
} else if (answer == false) {
    alert('Доступ закрыт');
}
console.log(answer);