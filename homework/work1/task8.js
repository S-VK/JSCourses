/*
####Задача 8

Написать код который посчитает сумму всех четных элементов в массиве, в суммировании уча́ствуют только элементы больше 3.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
 */

console.log('####Задача 8');
var arr = [1,2,3,4];
var sum = 0;
for(k of arr){
    sum += k%2==0 && k>3 ? k : 0;
}
console.log('result: ' + sum);