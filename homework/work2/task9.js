/*
####Задача 9

function solution(a, b) {
    //....
    return [];
}



console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 */

console.log('####Задача 9. Реалізовано 2 варіанти.');


console.log('============  decision 1 ===============');

function solution1(a, b) {
    if(!Array.isArray(a)||!Array.isArray(b)){
        throw new Error('parameters type should be an array')
    }

    if(a.length==0 && b.length==0){
        return [];
    }
    valA = arrToNumber(a);
    valB = arrToNumber(b);
    return numberToArr(valA+valB);
}

function  arrToNumber(arr){
    var res = 0n;
    var k=arr.length-1;
    var ch=0;
    while (k>=0){
        res+=(BigInt(arr[k])*bigIntPow(BigInt(10),ch));
        k--;
        ch++;
    }
    return res;
}

function numberToArr(ab){
    var temp = ab;
    var res = [];
    var k = getOrderNumber(temp)-1;
    while (k>=0){
        trunc = temp/bigIntPow(BigInt(10),k);
        res.push(Number(trunc));
        temp = temp-trunc*bigIntPow(BigInt(10),k);
        k--;
    }
    return res;
}

function bigIntPow(a,n){
    var res = 1n;
    for(i=0;i<n;++i){
        res = res*a;
    }
    return res;
}

function getOrderNumber(a) {
    var res = 1;
    while (a / bigIntPow(BigInt(10),res-1) >= 10) {
        res++;
    }
    return res;
}

console.log(solution1([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution1([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution1([1, 1, 1], [])); // [1, 1, 1]
console.log(solution1([], [9, 9, 9])); // [9, 9, 9]
console.log(solution1([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution1([], [])); // []
console.log(solution1([], [0])); // [0]
console.log(solution1([0], [0])); // [0]
console.log(solution1([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution1([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));

console.log('============  decision 2 ===============');

function solution2(a, b) {
    if(!Array.isArray(a)||!Array.isArray(b)){
        throw new Error('parameters type should be an array')
    }

    if(a.length==0 && b.length==0){
        return [];
    }
    var res =[];
    var bigArr = a.length>=b.length?a:b;
    var smallArr = a.length<b.length?a:b;

    bigArr=reversArr(bigArr);
    smallArr=reversArr(smallArr);
    var temp=0;
    for(i=0;i<bigArr.length||temp>0;++i){
       var sum = temp + (i<bigArr.length ? bigArr[i] : 0)+(i<smallArr.length ? smallArr[i] : 0);
        temp = Math.trunc(sum/10);
        sum = sum%10;
        res.push(sum);
    }
    return reversArr(res);
}

function reversArr(a){
    var res=[];
    for(i=a.length-1;i>=0;i--){
        res.push(a[i]);
    }
    return res;
}

console.log(solution2([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution2([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution2([1, 1, 1], [])); // [1, 1, 1]
console.log(solution2([], [9, 9, 9])); // [9, 9, 9]
console.log(solution2([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution2([], [])); // []
console.log(solution2([], [0])); // [0]
console.log(solution2([0], [0])); // [0]
console.log(solution2([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution2([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
