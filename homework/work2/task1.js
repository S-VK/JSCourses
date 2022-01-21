/*
####Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром.
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
 */

console.log("####Задача 1");

function f(a){
    if(typeof a==='number'){
        return a*a*a;
    }
    else{
        throw new Error('parameter type is not a Number');
    }
}

console.log("result, f(2)= " + f(2));
console.log("result, f(-4)= " + f(-4));
console.log("result, f('2')= " + f('2'));