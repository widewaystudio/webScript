let data = [
    [7,0,0,0,0],
    [3,8,0,0,0],
    [8,1,0,0,0],
    [2,7,4,4,0],
    [4,5,2,6,5]
]

let zcount = 0;
function Maxs(Arr){
    if(Arr === undefined || Arr.length === 0) return;
    let tempA = [Arr[0][0]],
        result = 0,
        temp1 = null,
        temp2 = 0,
        temp3 = 0,
        y = 0;
    zcount++;
    for(let i = 1; i < Arr.length; i++){
        if(Object.prototype.toString.call(Arr[i]) !== "[object Array]"){
            return ;
        }else{
            temp1 = [];
            for (y = 0; y < i + 1; y++){
                zcount++;
                if(y === 0){
                    temp1[y] = tempA[y] + Arr[i][y];
                }
                if(y > 0 && y < i){
                    temp2 = tempA[y - 1] + Arr[i][y];
                    temp3 = tempA[y] + Arr[i][y];
                    temp1[y] = temp2 > temp3 ? temp2 : temp3;
                }
                if(y === i){
                    temp1[y] = tempA[y - 1] + Arr[i][y];
                }
               if(result < temp1[y]){
                   result = temp1[y];
               }
            }
            tempA = temp1;
        }
    }


    return result;
}

console.log(Maxs(data));
console.log(zcount);
//逆向循环求解，比较常用的方法，因为这样会少用一个数组

let count  = 0;
function maxRecursion(Arr,row,column){
    if(Arr === undefined || Arr.length === 0) return 0;
     count++;
    if(row < Arr.length - 1 && column < Arr[row].length - 1){
       return Math.max(Arr[row][column] + maxRecursion(Arr,row+1,column),Arr[row][column] + maxRecursion(Arr,row+1,column+1));
    }else{
        return Arr[row][column];
    }

}

console.log(maxRecursion(data,0,0));
console.log(count);


// 倒序法非递归，计算最大值

let noCount = 0;
function noRecursion(Arr){
    let result = 0;
    let tempA = [];
    let i = 0,
        j = 0;
    for(i = Arr.length - 2; i >= 0; i --){
        for(j = 0; j < i + 1; j ++){
            noCount ++;
            if(j <= i){
                Arr[i][j] = Math.max(Arr[i][j] + Arr[i + 1][j], Arr[i][j] + Arr[i+1][j+1]);
                if(result < Arr[i][j]){
                    result = Arr[i][j];
                }
            }
        }

    }
    return result;
}

console.log(noRecursion(data));
console.log(noCount);