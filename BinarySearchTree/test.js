function Node(value){
    this.value = value;
    this.left = null
    this.right = null;
}

let arr = [];
for(let i = 0; i < 10000; i++){
    arr[i] = Math.floor(Math.random() * 10000);
}


let count = 0;
function search(arr,v){
    for(let i = 0; i < arr.length; i ++){
        count++;
        if(arr[i] == v) return true;
    }
    return false;
}

console.log(search(arr,1000));
console.log(count);
// 递归创建二叉搜索树

function recursionAdd(root,newV){
    if(root === null || root.value === newV) return;
    if(root.value < newV) {
        if(root.left === null){
            root.left = new Node(newV);
        }else{
            recursionAdd(root.left,new Node(newV));
        }
    }
    else{
        if(root.right === null){
            root.right = new Node(newV);
        }else{
            recursionAdd(root.right,new Node(newV));
        }

    }

}



//非递归创建二叉搜索树
function addSubtree(root,newV){
    if(root == null) return;
    if(root.value === newV) return;
    let temp = new Node(newV);
    while(true){
        if(root.value > newV){
            if(root.left === null){
                root.left = temp;
                break;
            }else{
                root = root.left;
            }
        }else{
            if(root.right === null){
                root.right = temp;
                break;
            }else{
                root = root.right;            }

        }
    }
    return root;
}

function createTree(arr){
    if(arr.length === 0 || arr === null)return null;
    let root = new Node(arr[0]);
    for(let i = 1; i < arr.length; i++){
        addSubtree(root,arr[i]);
    }
    return root;
}

let T1 = createTree(arr);

let Tcount = 0;

//递归搜索二叉树的应用
let recur = 0;
function recursionTree(T1,num){
    recur++;
    if(T1 === null) return false;
    if(T1.value === num) return true;
    if(T1.value > num) return recursionTree(T1.left,num);
    else return recursionTree(T1.right,num);

}

// 非递归搜索二叉树的应用

function searchTree(T1,num){
    if(T1 === null) return false;
    while(true){
        if(num === T1.value) return true;
        if(T1.left === null && T1.right === null) return false;
        if(num > T1.value){
            if(T1.right === null){
                return false;
            }else{
                T1 = T1.right;
            }

        }
        if(num < T1.value){
            if(T1.left === null){
                return false;
            }else{
                T1 = T1.left;
            }
        }

        Tcount ++;

    }
}

console.log(recursionTree(T1,1000));
console.log(recur);
console.log(searchTree(T1,1000));
console.log(Tcount);

