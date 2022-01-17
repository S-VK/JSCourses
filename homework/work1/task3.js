/*
####Задача 3

Перепишите код, заменив оператор `switch` на оператор `if..else`:

```js
switch (val) {
case 'a':
console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;

default:
console.log( 'unknown' );
}
```
 */

console.log('####Задача 3');
console.log('switch...');
val = 'd';
switch (val) {
    case 'a':
        console.log( 'a' );
        break;

    case 'b':
    case 'c':
    case 'd':
    case 'e':
        console.log( 'others' );
        break;

    default:
        console.log( 'unknown' );
}
//===================================
console.log('if..else...');
if(val=='a'){
    console.log( 'a' );
}
else if(val=='b' || val=='c' || val=='d' || val=='e'){
    console.log( 'others' );
}
else{
    console.log( 'unknown' );
}