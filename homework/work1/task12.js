/*
#### Задача 12

Дан массив с числами: `[1,2,3,-5,-2,1,-4]`

Найдите сумму положительных элементов массива. В результате вы должны получить число `7`

**Внимание**!

- Не разрашается использовать специальные методы массивов.
 */
console.log('#### Задача 12');
arr = [1,2,3,-5,-2,1,-4];
var sum = 0;
for(k of arr){
    sum += k>0 ? k : 0;
}
console.log('result: ' + sum);