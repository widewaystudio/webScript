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


a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.left = f1;
c1.right = h1;
h1.left = g1;
g1.right = i1;

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
c.left = f;
c.right = g;
g.left = h;
g.right = i;


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

function noRecur(origin,target){
  if(origin == target) return true;
  let flg = true,
      tempA = [],
      tempB = [],
      count = 0;
  while(flg){
      if(origin == null && target != null || origin !== null && target === null) return false;
      if(origin.value !== target.value) return false;

      if(origin.left == null && origin.right == null && target.left = null && target.right == null && tempA.length = 0 && tempB.length == 0){
         return true;
      }

      if(origin.left == null && target.left != null || origin.left != null && target.left == null)
      {  return false;}
      else{
          origin = origin.left;
          target = target.left;
      }

      if(origin.right == null && target.right != null || origin.right != null && target.left == null){
          return false;
      }else{
          tempA.push(origin.right);
          tempB.push(target.right);
      }

      if(origin.left == null && target.left == null){
          origin = tempA.pop();
          target = tempB.pop();
      }

      count ++;
      if(count > 30){
          flg = false;
      }



  }


}






console.log(compareTree(a,a1));



