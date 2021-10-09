function Node(value){
    this.value = value;
    this.neighbor = [];
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(c);
d.neighbor.push(b);
d.neighbor.push(e);
e.neighbor.push(d);


//图的遍历 深度优先搜索
function traversal(node,path){
    if(node === null || node.length === 0) return null;
    path = path ? path : [];
    for(let i = 0; i < node.length; i++){
        if(path.indexOf(node[i].value) > -1) continue;
        console.log(node[i].value);
        path.push(node[i].value);
        traversal(node[i].neighbor,path);
    }

}

function scope(node,path){
    if(node === null || node.length === 0) return null;
    path = path ? path : [];

    let neighbors = [];
    for(let i = 0; i < node.length; i++){
        if(path.indexOf(node[i].value) > -1) continue;
        else{
            path.push(node[i].value);
            console.log(node[i].value);
        }
        neighbors = neighbors.concat(node[i].neighbor);
    }
    return scope(neighbors,path);
}

//图的遍历非递归算法 广度搜索遍历

function recursion(node){
    if(node === null) return null;
    let path = [],
        neighbors = [],
        i = 0;
    while(true){
        if(path.indexOf(node.value) === -1) {
            console.log(node.value);
            path.push(node.value);
           for(i = 0 ; i < node.neighbor.length; i++){
               if(path.indexOf(node.neighbor[i].value) === -1 && neighbors.indexOf(node.neighbor[i]) === -1){
                   neighbors.push(node.neighbor[i]);
               }
           }
        }
        if(neighbors.length === 0){
             break;
         }
        if(neighbors.length > 0){
            //深度优先搜索
            node = neighbors.shift();
            // 广度优先搜索
            // node = neighbors.pop();
        }


    }

}


scope([c]);
// recursion(c);
// console.log("递归遍历图")
// traversal([c],[]);


