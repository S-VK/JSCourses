/*
####Задача 1

Перепишите код, заменив оператор `if` на тернарный оператор `?`

```js
var result;
if (a + b < 4) {
result = true;
} else {
result = false;
}
```
 */
console.log('####Задача 1');
a=2;
b=1;
var result;
if (a + b < 4) {
    result = true;
} else {
    result = false;
}

console.log('IF result: ' + result);

//==========================
result=(a+b<4)?true:false;
console.log('?: result: ' + result);