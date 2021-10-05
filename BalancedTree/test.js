//1. 跟节点的左子树和右子树的高度不能超过1
//2. 每个子树的都符合第一条
 function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
 }

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
 c.right = e;
 i.left = f;
 e.right = g;
 d.left = h;
 h.right = i;

//非递归测算树的高度
 function testDeep(root){
  let tempA = [],
      Depth = 0,
      deepL = 0;
  while(true){
      deepL ++;
      if(root.left === null){
       Depth = Depth > deepL ? Depth : deepL;
      }
      if(root.right !== null){
       tempA.push([root.right,deepL]);
      }
      if(root.right === null && root.left === null && tempA.length === 0){
       break;
      }
      if(root.left !== null){
       root = root.left;
      }else{
         if(tempA.length !== 0){
          let temps = tempA.pop();
          deepL = temps[1];
          root = temps[0];
         }
      }
  }
  return Depth;
 }

 // 递归测算树的高度

function DepthTree(root){
  if(root === null) return 0;
  let dl = DepthTree(root.left);
  let dr = DepthTree(root.right);
  return  dr > dl ? dr + 1 : dl + 1 ;
}



// 检测是不是平衡二叉树-递归算法

function gauging(root){
  if(root === null) return true;
  let l = DepthTree(root.left);
  let r = DepthTree(root.right);
  return Math.abs(l-r) <= 1;
}

//检测是不是平衡二叉树-非递归算法

function recursionG(root){
  if(root === null ) return true;
  let tempA = [],
      leftTree = 0,
      rightTree = 0;
  while(true){
       leftTree = testDeep(root.left);
       rightTree = testDeep(root.right);
       if(Math.abs(leftTree - rightTree) > 1) return false;
       if(root.right !== null){
         tempA.push(root.right);
       }
       if(root.left === null && root.right === null && tempA.length === 0){
        return true;
       }
       if(root.left !== null){
         root = root.left;
       }else{
        if(tempA.length === 0){
         root = tempA.pop();
        }
       }

  }
}

 console.log(DepthTree(a));
 console.log(testDeep(a));
// 判断是否是平衡二叉树
 console.log(gauging(a));
 console.log(recursionG(a));



