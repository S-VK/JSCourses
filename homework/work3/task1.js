/*
####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
 */

console.log('####Задача 1');


 arr = [1,2,3];
/*
arr.forEach(function (value, index, array) {
    console.log('i: '+index+', val: '+value +', arr: '+array)
});
;
*/
function forEach(arr,func){
    if(!Array.isArray(arr)){
        throw new Error('arr, parameter type should be an array')
    }
    if(!func instanceof Function){
        throw new Error('func, parameter type should be an Function')
    }
    for (i=0;i<arr.length;++i) {
        func(arr[i],i,arr);
    }
};

forEach(arr,function (val,ind,arr){
    console.log('i: '+ind+', val: '+val +', arr: '+arr);
})