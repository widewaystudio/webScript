function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

let a = new Node(2);
let b = new Node(5);
let c = new Node(3);
let d = new Node(6);
a.right = b;
b.left = c;
b.right = d;

let a1 = new Node(2);
let b1 = new Node(5);
let c1 = new Node(3);
let d1 = new Node(6);

d1.left = c1;
c1.left = a1;
c1.right = b1;




//左单旋
// 某一节点不平衡，左浅右深，将左单旋，
// 不平衡节点为旋转节点（当前不平衡的根节点），  新根为右子树根，新根的左子树变为旧根的右孩子，旧根变为新根的左孩子
//右单旋
//

function leftSpin(root){
    if(root === null ) return null;
     let newRoot = root.right,
         branch = newRoot.left;
         root.right = branch;
         newRoot.left = root;
         root = newRoot;
    return root;
}


function rightSpin(root){
    if(root === null) return null;
     let newRoot = root.left,
         branch = newRoot.right;
          root.left = branch;
          newRoot.right = root;
          root = newRoot;
    return root;

}




// console.log(leftSpin(a));
// // 右单旋
// console.log(rightSpin(d1))

function depth(root){
    if(root === null) return 0;
    let tempA = [];
    let max = 0,
        plies = 0;
    while(true){
         plies ++;
         if(root.right !== null){
             tempA.push([root.right,plies]);
         }
         if(root.left === null && root.right === null && tempA.length === 0){
             return max = Math.max(max,plies);
         }
         if(root.left !== null){
             root = root.left;
         }else{
             max = Math.max(max,plies);
             if(tempA.length !== 0){
                 let temp = tempA.pop();
                 plies = temp[1];
                 root = temp[0];
             }
         }
    }
}


//单旋代码实现平衡二叉树

function recursion(root){
    if(root === null) return null;
    let depthL = depth(root.left),
        depthR = depth(root.right);
    if(Math.abs(depthL - depthR ) <= 1){
        return root;
    }else if(depthL > depthR){
       return rightSpin(root);
    }else{
       return leftSpin(root);
    }
    recursion(root.left);
    recursion(root.right);

}


// 非递归实现单旋平衡二叉树

function noRecursion(root){
    if(root === null) return null;
    let tempA = [],
        depthL = 0,
        depthR = 0,
        flag = true,
        temps = null,
        newRoot = null,
        count = 0,
        rootNode = root.value,
        flagR = true;
    while(true){

        if(root.left === null && root.right === null || flag === false){

                  depthL = depth(root.left);
                  depthR = depth(root.right);
                  if(depthL > depthR + 1){
                      newRoot = root.value;
                    root = rightSpin(root);
                  }
                  if(depthR > depthL + 1){
                      newRoot = root.value;
                      console.log(root.value);
                    root = leftSpin(root);
                  }
        }
        if((newRoot === rootNode || root.value === rootNode) && flag === false ){
            return root;
        }
        if(flag !== false && (root.left !== null || root.right !== null)){

            tempA.push([root,false])
        }
        if(root.right !== null && flag !== false ){
            if(root.right.left !== null || root.right.right !== null){
                tempA.push([root.right,flagR]);
            }else{
                tempA.push([root.right,false])
            }
        }
        // console.log(tempA);
        if(root.left !== null && flag === true){
            root = root.left;
        }else {
            if(tempA.length !== 0){
                temps = tempA.pop();
                // console.log(temps)
                flag = temps[1];
                root = temps[0];
            }
        }
      count++;
        if(count > 20){
            break;
        }
    }
    return root;
}



console.log(noRecursion(d1));

