function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;

}


let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node ("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");
let h = new Node("h");
let i = new Node("i");
let j = new Node("j");

a.left = b;
a.right = c;
b.left = d;
d.left = g;
d.right = h;
h.left = j;
j.right = i;
c.left = e;
c.right = f;


//非递归广度搜索
function Breadth(root,v){
    if (root == null) return false;
    let tempA = [],
        flg = true;
    while(flg){
        if(root.value === v){
            return true;
        }
        if(root.left !== null){
            tempA.push(root.left);
        }
        if(root.right !== null){
            tempA.push(root.right);
        }
        if(tempA.length === 0 && root.left === null && root.right === null){
            flg = false;
        }

        if(tempA.length !== 0){
            root = tempA.shift();
        }

        console.log(root.value);
    }

return false;
}

// 递归广度优先搜索

function newBreadth(rootList,v){
   if(rootList == null || rootList.length == 0) return;
   let childList = [];
   for(let i = 0; i < rootList.length; i++){
       console.log(rootList[i].value);
       if(rootList[i].value === v){
           return true;
       }
       rootList[i].left !== null && childList.push(rootList[i].left);
       rootList[i].right !== null && childList.push(rootList[i].right);
   }

   return childList.length > 0 && newBreadth(childList,v);
}

console.log(newBreadth([a],"i"));
