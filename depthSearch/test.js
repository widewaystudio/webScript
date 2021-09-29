function Node(value){
    this.value = value;
    this.right = null;
    this.left = null;
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node ("g");
a.left = b;
a.right = c;
b.left = d;
b.right = f;
d.left = g;
c.right = e;



function depthSearch(root,v){
    if(root == null) return false;
    if(root.value === v) return true;
    let left = depthSearch(root.left,v);
    let right = depthSearch(root.right,v);
    return left || right;
}

//非递归实现深度搜索

function newDepth(root,v){
    if(root == null) return false;
    let flg = true,
       tempA = [],
        result = false;
    while(flg){
        if(root.value === v){
            console.log(root);
           result = true;
        }
        if(root.right !== null){
            tempA.push(root);
        }

        if(tempA.length === 0 && root.right == null && root.left == null){
            flg = false;
        }
        if(root.left === null ){
            if(tempA.length !== 0){
                root = tempA.pop().right;
            }
        } else if(root.left !== null){
            root = root.left;
        }
    }
    return result;
}




console.log(newDepth(a,"g"));