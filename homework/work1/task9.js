
/*
#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
 */
console.log('#### Задача 9');
var arr = [1,2,3,4,5,6];
console.log('arr: ' + arr);
sortLabel: for (i=0;i<arr.length-1;++i){
    for (j=i+1;j<arr.length;++j){
        if(arr[i]<arr[j]){
            temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i=-1;
            continue sortLabel;
        }
    }
}

console.log('sort arr: ' + arr);