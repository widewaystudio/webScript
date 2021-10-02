function Node(value){
    this.value = value;
    this.neighbor = [];
}

let M = 100000;
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");
let h = new Node("h");
let i = new Node("i");

let pointSet = [a,b,c,d,e,f,g,h,i];
let edgeSet = [
    [0,10,M,M,M,11,M,M,M],
    [10,0,18,M,M,M,16,M,12],
    [M,18,0,22,M,M,M,M,8],
    [M,M,22,0,20,M,24,16,21],
    [M,M,M,20,0,26,M,7,M],
    [11,M,M,M,26,0,17,M,M],
    [M,16,M,24,M,17,0,19,M],
    [M,M,M,16,7,M,19,0,M],
    [M,12,8,21,M,M,M,M,0]
];

function getMin(pointSet,edgeSet,nowPoint){
    let min = M,index,Lmin;
    let formNode = null,
        endNode = null;
    for(let i = 0; i < nowPoint.length; i++){
         index = pointSet.indexOf(nowPoint[i])
        for(let j = 0; j < edgeSet.length; j++){
         if(min > edgeSet[index][j] && nowPoint.indexOf(pointSet[j]) < 0 &&nowPoint[i].neighbor.indexOf(pointSet[j]) < 0 && edgeSet[index][j] !== 0){
             min = edgeSet[index][j];
             Lmin = j;
             formNode = pointSet[j];
             endNode = pointSet[index];
         }
        }
    }
   formNode.neighbor.push(endNode);
    endNode.neighbor.push(formNode);
    console.log(formNode.value + "---" + endNode.value);
   return formNode;

}


function Prim(pointSet,edgeSet,start){
  let nowPoint = [];
  nowPoint.push(start);
  while(true){
      let miniDisNode = getMin(pointSet,edgeSet,nowPoint);
      nowPoint.push(miniDisNode);
      if(nowPoint.length == pointSet.length){
          break;
      }
  }
 return nowPoint;
}

function canLink(tribeList,begin,end){
      let tempB = null,
          tempE = null;
      for(let i = 0; i < tribeList.length; i++){
          if(tribeList[i].indexOf(begin) >= 0){
              tempB = i;
          }
          if(tribeList[i].indexOf(end) >= 0){
              tempE = i;
          }
      }
      if(tempB !== null && tempE !== null && tempE === tempB){
          return false;
      }
      return true;
}

function remove(arr,i){
    return arr.splice(i,1);
}
function tribalList(tribeList,begin,end){
   let tempB = null,
       tempE = null,
        tempA = [];
   for(let i = 0; i < tribeList.length; i ++){
       if(tribeList[i].indexOf(begin) >= 0){
           tempB = i;
       }
       if(tribeList[i].indexOf(end) >= 0){
           tempE = i;
       }
   }
   if(tempB == null && tempE == null){
       tribeList.push([begin,end]);
   }else if(tempB == null && tempE !== null){
       tribeList[tempE].push(begin);
   }else if(tempB !== null && tempE == null){
       tribeList[tempB].push(end);
   }else{
      tempA = tribeList[tempB].concat(tribeList[tempE]);
         remove(tribeList,tempB);
         remove(tribeList,tempE);
         tribeList.push(tempA);
   }
}




function shortestLine(pointSet,edgeSet,tribeList){
  let min = M,
      leftNode = null,
      rightNode = null;
    for(let i = 1; i < pointSet.length; i++){
        for(let j = 0; j < i; j++){
          if(min > edgeSet[i][j] && canLink(tribeList,j,i)){
              min = edgeSet[i][j];
              leftNode = j;
              rightNode = i;
          }

        }

    }
    tribalList(tribeList,leftNode,rightNode);
    pointSet[leftNode].neighbor.push(pointSet[rightNode]);
    pointSet[rightNode].neighbor.push(pointSet[leftNode]);
    console.log(pointSet[leftNode].value + "----" + pointSet[rightNode].value);
 }





function kruskal(pointSet,edgeSet){

    let tribeList = [];
    for(let i = 0; i < pointSet.length - 1; i++){
        shortestLine(pointSet,edgeSet,tribeList);
    }

}


Prim(pointSet,edgeSet,c);
console.log("卡斯莫尔算法")
kruskal(pointSet,edgeSet);





