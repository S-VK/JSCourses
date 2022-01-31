/*
####Задача 9

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
 Первым параметром функция принимает значение, которым заполнять массив,
 а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
 */

console.log('####Задача 9')

function arrayFill(x,y){

    if(typeof(x) === 'undefined') {
        throw new Error('x, parameter is undefined')
    }
    if( !(typeof(x) === 'object')
        && !x instanceof String
        && !x instanceof Number
        && !Array.isArray(x) ){
        throw new Error('параметр x обязателен и может принимать только число, строку, объект, массив')
    }
    if(!y instanceof Number){
        throw new Error('y, parameter type should be a number')
    }
    var arr=[];
    for(var i=0;i<y;++i){
        arr.push(x);
    }
return arr;
}

console.log('arrayFill(\'x\',5): ' + arrayFill( 'x',5));