let a = ["a","c","f","g","b","d","e"];
let b = ["f","c","g","a","d","b","e"];
let c = ["f","g","c","d","e","b","a"];

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}


function process(pre,mid,start,end){
    if(end - start === 0) return null;
    let root = new Node(pre[0]);
    let index = mid.indexOf(pre[0]),
        preL = index + start + 1;
    let leftRoot = process(pre.slice(start + 1,index + start + 1),mid.slice(start,index),start,index);
    let rightRoot = process(pre.slice(index+start + 1,end),mid.slice(index+start + 1,end),start,index);
    root.left = leftRoot !== null ? leftRoot.value : leftRoot;
    root.right = rightRoot !== null ?rightRoot.value : rightRoot;
    return root;
}
function nextProcess(mid,next,start,end){
    if(end - start === 0) return null;
    let root = new Node(next[end - 1]);
    let index = mid.indexOf(next[end - 1]),
        preL = index + start + 1;
    let leftRoot = nextProcess(mid.slice(start,index),next.slice(start,preL),start,index);
    let rightRoot = nextProcess(mid.slice(preL,end),next.slice(index,end - 1),start,index);
    root.left = leftRoot !== null ? leftRoot.value : leftRoot;
    root.right = rightRoot !== null ? rightRoot.value : rightRoot;
    return root;
}


function preReduction(pre,mid){
   if(pre == null || pre.length == 0 || mid == null || mid.length == 0 || mid.length !== pre.length) return ;
   return  process(pre,mid,0,mid.length);

}

function nextReduction(mid,next){
    if(next == null || next.length == 0 || mid == null || mid.length == 0 || mid.length !== next.length) return ;
    return  nextProcess(mid,next,0,mid.length);
}

function reduction(pre,mid,next){
    if(next == null || next.length == 0){
       return preReduction(pre,mid);
    }else{
        return nextReduction(mid,next);
    }


}
console.log(reduction(null,b,c));



function onceAct(){
    let obj = {},
        count = 0;
    return function(old) {
        ++count;
        let times = "T" + count;
        obj[times] = old;
        return function(newValue){
            if(obj[times] === newValue){
                return false;
            }else{
                obj[times] = newValue;
                return true;
            }
        }

    }

}








