/*
####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
 */

console.log('####Задача 4')


arr = [1,2,3];
console.log('arr: ' + arr);
/*
console.log('is some: ' + arr.some(function (item, i, arr){
    return item<1;
}))
*/
console.log('is some: ' + some(arr,function (item, i, arr){
    return item<1;
}))

function some(arr,func){

    if(!Array.isArray(arr)){
        throw new Error('arr, parameter type should be an array')
    }
    if(!func instanceof Function){
        throw new Error('func, parameter type should be an Function')
    }
    for (i=0;i<arr.length;++i) {
        if(func(arr[i],i,arr)){
            return true;
        };
    }
    return false;
};
