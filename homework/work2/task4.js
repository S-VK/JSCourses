/*
####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке.
Данная функция должна обязательно содержать проверку входного параметра,
потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
 */

console.log('####Задача 4');

function f(a){
    if(typeof a==='number'){
        if(Number.isInteger(a) && a>=1 && a<=7){

            switch (a) {
                case 1:
                   return 'Неділя';
                case 2:
                    return 'Понеділок';
                case 3:
                    return 'Вівторок';
                case 4:
                    return 'Середа';
                case 5:
                    return 'Четверг';
                case 6:
                    return 'Пятниця';
                case 7:
                    return 'Субота';
                default:

            }
        }
        else{
            throw new Error('parameter should be in the range of 1 to 7');
        }
    }
    else{
        throw new Error('all parameters type should be a Number');
    }
}

console.log('f(1): '+f(1));
console.log('f(2): '+f(2));
try { console.log('f(8): '+f(8));
}
catch (e){console.log(e.toString());
}
try {console.log('f(\'1\'): '+f('1'));
}
catch (e){console.log(e.toString());
}
try {console.log('f(2.2): '+f(2.2));
}
catch (e){console.log(e.toString());
}
