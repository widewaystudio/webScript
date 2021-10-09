//递归实现 斐波那契数列
let count =  0;
function fib(n){
    count++;
    if(n < 0) return -1;
    if(n === 0 || n === 1) return 1;
    return fib(n - 1) + fib(n - 2)
}

// 记忆函数优化方法
let  m = 0;
function memoizer(memo,F){
    m++;
    let recur = function(n){
        m++
        let result = memo[n];
        if(typeof result !== "number"){
            return F(recur,n);
            memo[n] = result;
        }
        return result;
    }
    return recur;
}

// 尾递归的方法
let z = 0;
function f(n){
    if(n < 0 ) return -1;
    z++;
   return n < 2 ? 1 : e(n,1);
}
function e(n, a){
    z++;
    return n < 2 ? a : e(n - 1, a) + e( n - 2, a) ;
}


// 非递归算法
let cur = 0;
function noRecur(n){
    if(n < 0) return -1;
    if(n < 2) return 1;
    let t0 = 1,
        t1 = 1,
        result = 0;
    cur++;
    for(let i = 2; i <= n; i++){
        result = t0 + t1;
        t0 = t1;
        t1 = result;
        cur++;

    }
    return result;
}



// console.log(fib(11));
// console.log(count);
let y = 0;
for(y = 0; y < 10; y++){
    console.log(noRecur(y));
}
console.log("非递归算法" + cur);
// console.log(noRecur(11));
// console.log(cur);

let fibonacci = memoizer([1,1],function (recur,n){return recur( n - 1) + recur(n - 2);});

// console.log(fibonacci(11));
// console.log(m);

for(y = 0; y < 10; y++){
    console.log(f(y));
}

console.log("带存储的递归算法" + z);