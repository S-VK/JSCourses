/*
####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
 */

console.log('####Задача 3')

arr = [1,2,3];
console.log('arr: ' + arr);
/*
console.log('is Every: ' + arr.every(function (item, i, arr){
    return item>2;
}))
*/
console.log('is Every: ' + every(arr,function (item, i, arr){
    return item<3;
}))

function every(arr,func){

    if(!Array.isArray(arr)){
        throw new Error('arr, parameter type should be an array')
    }
    if(!func instanceof Function){
        throw new Error('func, parameter type should be an Function')
    }
    for (i=0;i<arr.length;++i) {
        if(!func(arr[i],i,arr)){
           return false;
        };
    }
    return true;
};

