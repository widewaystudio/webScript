function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

let a1 = new Node("a");
let b1 = new Node("b");
let c1 = new Node("c");
let d1 = new Node("d");
let e1 = new Node("e");
let f1 = new Node("f");
let g1 = new Node("g");
let h1 = new Node("h");
let i1 = new Node("i");


a1.left = c1;
a1.right = b1;
b1.left = e1;
b1.right = d1;
// b1.right = e1;
// c1.left = f1;
// c1.right = h1;
// h1.left = g1;
// g1.right = i1;

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");
let h = new Node("h");
let i = new Node("i");


a.left = b;
a.right = c;
b.left = d;
b.right = e;
// c.left = f1;
// c.right = h1;
// h.left = g1;
// g.right = i1;


function diffTree(origin,target){
    if(origin === target) return true;
    if(origin === null && target !== null || origin !== null && target === null) return false;
    if(origin.value !== target.value ) return false;
    let leftdiff = diffTree(origin.left,target.left);
    let rightdiff = diffTree(origin.right,target.right);
    return leftdiff && rightdiff;
}


//若左右的子树调换位置仍为同一棵树，则程序为

function compareTree(origin,target){
    if(origin === target) return true;
    if(origin === null && target !== null || origin !== null && target === null) return false;
    if(origin.value !== target.value) return false;
    return compareTree(origin.left,target.right) && compareTree(origin.right,target.left) || compareTree(origin.left,target.left) && compareTree(origin.right,target.right);

}


//非递归对比二叉树是否相同

function readOrder(root,right,left,Arr){
    if(right !== null){
        Arr.push(right);
    }
    if(left !== null){
        root = left;
    }else{
        if(Arr.length !== 0){
            root = Arr.pop();
        }
    }
    return root;
}

function ergodic(root){
    let tempA = [],
        tempV = null,
        flg  = true,
        temps = [],
        tempRight = null;
    return function(v){
        if(root.left !== null || root.right !== null || tempA.length !== 0){
            tempV = root.value;
            tempRight = root.right === null ? root.right : root.right.value;
            tempV += "#" + (root.left === null ? root.left : root.left.value) + "#" + tempRight;
            if(v !== undefined && v !== null){
                temps = v.split("#");
            }
            if(temps[1] === tempRight){
               root = readOrder(root,root.left,root.right,tempA);
            }else{
               root = readOrder(root,root.right,root.left,tempA);
            }
            return tempV;
        }else{
            if(flg){
                flg = false;
                tempV = root.value + "#" + root.left + "#" + root.right;
                return tempV;
            }
            return null;
        }
    }
}

function contrast(str1,str2,B){
    if(B !== true){
       return  str1 !== str2;
    }else{
        let temps = str1.replace(/(#\w+)(#\w+)$/g,($,$1,$2) => $2 + $1);
        return temps !== str2 && str1 !== str2;
    }
}


// 加入exchange参数，实现左右树互换为同一树时的比较方法
function noRecur(origin,target,exchange){
  if(origin === null && target !== null) return false;
   let rootA = ergodic(origin),
       rootB = ergodic(target,exchange),
       rootBValue = '',
       rootAValue = '',
       flg = true;
  while(flg){
      rootAValue = rootA();
      rootBValue = rootAValue === null ? rootB() : rootB(rootAValue);
      if(rootAValue === null){
          break;
      }else if(contrast(rootAValue,rootBValue,exchange)){
         return false;
      }
  }
 return true;

}



console.log(noRecur(a1,a,true));


console.log(compareTree(a,a1));


