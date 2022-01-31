/*
####Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра,
а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
 */

console.log('####Задача 10')


function reverse(arr){
    if(!Array.isArray(arr) ){
        throw new Error('параметр обязателен и может принимать только массив')
    }
    if(arr.length<1){
        throw new Error('пустой массив')
    }
    var res=[];
    for(i=arr.length-1;i>=0;i--){
        res.push(arr[i]);
    }
    return res;
}
arr = [3,2,1];
console.log('arr: ' + arr)
console.log('reverse(arr): ' + reverse(arr))