//快速排序递归
let a = [7,4,8,3,13,10,8,9,16];

function compare(a,b){
    return a > b ? true : false;
}

function exchange(arr,b,e){
    let t = arr[e];
    arr[e] = arr[b];
    arr[b] = t;
}


function quickSort(arr){
    if(arr.length == 0 ) return [];
    let len = arr.length;
    let leader = arr[0],
        left = [],
        right = [];
    for(let i = 1; i < len; i++){
        compare(arr[0],arr[i]) ? left.push(arr[i]) : right.push(arr[i]);
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader);
    return left.concat(right);
}

function sort(arr,begin,end){
    if(begin >= end - 1 ) return;
    let leader = begin,
        left = begin + 1,
        right = end -1;
    let flg = true;
    while(flg){
           while(compare(arr[leader],arr[left])){
                   left++;
           }
           while(compare(arr[right],arr[leader])){
                   right --;
           }
        if(right > left ){
            exchange(arr,left,right);
        }else{
           flg = false;
        }    }

     let bPoint = compare(right,left) ? left : right;
    // console.log(bPoint,leader,arr.length,begin,end);
    if(leader !== bPoint){
        exchange(arr,leader,bPoint);
        sort(arr,0,bPoint);
    }
    sort(arr,bPoint + 1, end);


     return arr;
}

function standardSort(arr){
   return sort(arr,0,arr.length);
}

console.log(standardSort(a));