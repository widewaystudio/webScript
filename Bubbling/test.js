let a = [7,4,2,3,10,2,3,4,5,6];


function compare(a,b){
    return a > b ? true : false;
}

function exchange(arr,b,e){
    let t = arr[b];
    arr[b] = arr[e];
    arr[e] = t;
}


function Bubbling(arr){
    for(let j = arr.length; j > 0;j--){
        for(let i = 0; i < j - 1; i++){
            if(compare(arr[i],arr[i+1])){
                exchange(arr,i,i+1);
            }
        }
    }
    return arr;
}

console.log(Bubbling(a));