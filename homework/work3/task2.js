/*
####Задача 2

Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
 */
console.log('####Задача 2');


 arr = [1,2,3];
console.log('before arr: ' + arr);

arr=filter(arr,function (value, index, array){
    return value>1;
});
/*
arr=arr.filter(function (value, index, array) {
    return value>1;
});
*/
console.log('after arr: ' + arr);

function filter(arr,func){

    if(!Array.isArray(arr)){
        throw new Error('arr, parameter type should be an array')
    }
    if(!func instanceof Function){
        throw new Error('func, parameter type should be an Function')
    }
    result = [];
    for (i=0;i<arr.length;++i) {
       if(func(arr[i],i,arr)){
           result.push(arr[i]);
       };
    }
    return result;
};

