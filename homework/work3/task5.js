/*
####Задача 5

Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```
 */

console.log('####Задача 5')

arr = [1,2,3];
acc = 0;
console.log('arr: ', arr);
/*
console.log('reduce: ' + arr.reduce(function (acc,item, i, arr){
    return acc+(item*2);
},acc))*/
console.log('reduce: ' + reduce(arr,function (acc,item, i, arr){
    return acc+(item*2);
},acc))


function reduce(arr, func, acc){
    if(!Array.isArray(arr)){
        throw new Error('arr, parameter type should be an array')
    }
    if(!func instanceof Function){
        throw new Error('func, parameter type should be an Function')
    }
    if(!acc instanceof Number || !acc instanceof String){
        throw new Error('acc, parameter type should be an Number or String')
    }
    for (i=0;i<arr.length;++i) {
       acc= func(acc, arr[i], i, arr);
    }
    return acc;
}