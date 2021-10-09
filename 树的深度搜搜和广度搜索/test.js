function Node(value){
    this.value = value;
    this.childs = [];
}

let r = new Node("R");
let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
let e = new Node("E");
let f = new Node("F");
let g = new Node("G");
let h = new Node("H");
let k = new Node("K");

r.childs.push(a);
r.childs.push(b);
r.childs.push(c);
a.childs.push(d);
a.childs.push(e);
c.childs.push(f);
f.childs.push(g);
f.childs.push(h);
f.childs.push(k);

//深度搜索  递归算法/非递归算法

function noRecursion(root,target){
    if(root === null) return false;
    let tempA = [],
        count = 0,
        result = false;
    while(true){
        if(root.value === target) return true;
        console.log(root.value);
        if(root.childs.length > 0){
            tempA = tempA.concat(root.childs);
        }
        if(tempA.length == 0){
            break;
        }
        if(tempA.length > 0){
            //深度优先搜索算法
            root = tempA.pop();
            //广度优先算法需将pop 修改为shift
        }

         count++;
        if(count > 10){
            break;
        }

    }

    return result;

}

// 树的深度搜索 递归
function recursion(root,target){
    if(root === null) return false;
    console.log(root.value);
    if(root.value === target ) return true;
    let result = false;

    for(let i = 0; i < root.childs.length; i++){
        result |= recursion(root.childs[i],target);
    }
    return result ? true : false;
}

// 树的广度优先算法 递归
function recursionSpan(root,target){
   if(root.length === 0 ) return false;
   let tempA = [],
       result = false;
   for(let i = 0; i < root.length; i++){
       console.log(root[i].value);
       if(root[i].value === target) return true;
       tempA = tempA.concat(root[i].childs);
   }
    result |= recursionSpan(tempA,target);
    return result ? true : false;
}

console.log(recursionSpan([r],"e"));

// console.log(recursion(r,"e"));