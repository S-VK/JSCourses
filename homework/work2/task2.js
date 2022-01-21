/*
####Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров.
 Количество параметров может быть любым. Данная функция должна обязательно содержать проверку входных параметров,
  потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
 */

console.log('####Задача 2');
function f(...a){
    sum=0;
    for( k of a) {
        if(typeof k==='number'){
            sum +=k;
        }
        else{
            throw new Error('all parameters type should be a Number');
        }
    }
    return sum;
}
console.log('f()='+f());
console.log('f(1,2,3)='+f(1,2,3));
console.log('f(1,1,1,1,1,1,1,1)='+f(1,1,1,1,1,1,1,1));
console.log('f(1,2,\'s\',4)='+f(1,2,'s',4));
