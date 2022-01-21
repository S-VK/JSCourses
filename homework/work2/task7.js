/*
####Задача 7

Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей
 (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 Данная функция должна обязательно содержать проверку входного параметра, потому
 что принимать она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
```
 */

console.log('####Задача 7');

function getDivisors(a){
   var res = [];
    if(typeof a==='number'){
        if(a<=0){
            throw new Error('parameter can\'t be a <=0');
        }
        for(let k=1;k<=a;++k){
            if(a%k==0){
                res.push(k);
            }
        }
        return res;
    }
    else{
        throw new Error('parameter type is not a Number');
    }
}
console.log('getDivisors(12): ' + getDivisors(12));
try {console.log('getDivisors(\'Content\'): ' + getDivisors('Content'));
}
catch (e){console.log(e.toString());
}
try {console.log('getDivisors(0): ' + getDivisors(0));
}
catch (e){console.log(e.toString());
}
