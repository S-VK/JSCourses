/*
####Задача 8

Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив.
 Возвращает данная функция сумму всех элементов на всех уровнях.

Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не
было найдено ни одного числа.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив

```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
```
 */

console.log('####Задача 8')

function f(arr) {
    if (Number.isFinite(arr) ) {
        return arr;
    } else if (Array.isArray(arr)) {
        var acc = 0;
       return arr.reduce(function (acc, item, i, arr) {
            return acc + f(item);
        }, acc);
    } else {
        console.log(' fail arr: ' + arr)
        throw new Error('parameter type should be an array or number')
    }

}
    const arr0 = [1,2,3,4];
    console.log('[1,2,3,4]-10: '+f(arr0)); // 10
    const arr1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
    console.log('[[[1, 2], [1, 2]], [[2, 1], [1, 2]]]-12: '+f(arr1)); // 12
    const arr2 = [[[[[1,2]]]]];
    console.log('[[[[[1,2]]]]]-3: ',f(arr2)); // 3
    const arr3 = [[[[[1,2]]],2],1];
    console.log('[[[[[1,2]]],2],1]-6: ',f(arr3)); // 6
    const arr4 = [[[[[]]]]];
    console.log('[[[[[]]]]]-0: ',f(arr4)); // 0
    const arr5 = [[[[[],3]]]];
    console.log('[[[[[],3]]]]-3: ',f(arr5)); // 3
