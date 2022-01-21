/*
####Задача 3

Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье.
 Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```
 */

console.log('####Задача 3');
function f(a,b,c){
    if(typeof a==='number' && typeof b==='number' && typeof c==='number'){
        if(c==0){
            throw new Error('division by zero');
        }
       return (a-b)/c;
    }
    else{
        throw new Error('all parameters type should be a Number');
    }
}

console.log('f(9,3,2)='+f(9,3,2));
console.log('f(\'s\',9,3)='+f('s',9,3));
console.log('f(4,3,0)='+f(4,3,0));