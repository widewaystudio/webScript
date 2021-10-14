let str = "level";

function palindrome(str){
    let maxL = 0,
        start = 0,
        strT = str;
        temp = '',
        i = 0,
        j = 0,
       tempA = [],
       temps = '';
        let count = 0,
            reg = null,
            reg1 = null;
      while(true){
          if(i > str.length -1) break;
           reg =new RegExp("\(" + str[i] + "\)\\w+\\1","gi");
           strT = reg.exec(str);
           if(strT === null || strT.length < maxL){
               i++;
               continue;
           }
          temps = '';
          while(true){
              if(strT === null) break;
              if(checkString(strT[0]) && maxL < strT[0].length){
                    tempA.push([strT[0]]);
                    maxL = strT[0].length;
                    tempA.push(maxL);
                   break;
              }else{
                      temps += strT[1];
                      temp = strT[0].slice(1,-1);
                       reg1 = /([a-z])\w*\1/gi;
                      strT = reg1.exec(temp);
                      if(strT === null){
                          let a = [],
                              s = '';
                          for(j = 0; j < temp.length; j++){
                              s = temps + temp[j] + reverse(temps);
                              a.push(s);
                          }
                          strT = [];
                          if(maxL < s.length){
                              tempA[0] = a;
                              tempA[1] = s.length;
                              maxL = s.length;
                          }else if(maxL === s.length){
                              tempA[0].push(a);
                          }
                          break;
                  }
              }

              start ++;
              if(start > 5){
                  break;
              }

          }

          i++;

        count ++;
        if(count > 6){
            break;
        }
      }
      return tempA;
}

console.log(palindrome(str));



function reverse(str){
    let temps = '';
    for(let i = str.length-1; i >= 0; i--){
        temps += str[i];
    }
    return temps;
}
function checkString(str){
    let num = Math.floor(str.length / 2);
    return str.slice(0,num) === reverse(str.slice(num)) || str.slice(0,num) === reverse(str.slice(num + 1));

}


// console.log(reverse(str));
// console.log(palindrome(str));

// console.log(checkString("goog"));

function changeStr(str){
    let reg = /_(\w)/g;
    if(str.indexOf("_") >= 0){
        str = str.replace(/([A-Z])/g,($,$1) => $1.toLowerCase());
        str = str.replace(reg,($,$1) => $1.toUpperCase());
    }else{
        str = str.replace(/^([A-Z])/g,($,$1) => $1.toLowerCase());
    }
    return str;
}

// console.log(changeStr("Test_VARIABLE"));


function MaxLeng(str){
    let reg = /(\w)\1*/g;
    let temp = str.match(reg);
    let M = temp[0],
        l = temp[0].length;
    for(let i = 1; i < temp.length; i++){
        if(l < temp[i].length ){
            l = temp[i].length;
            M = temp[i];
        }
    }
    return M
}

// console.log(MaxLeng("aaaaaaaaaaAAAAAAAAbbbbbbcccdddddddEEEEeffffffddddddddLLLLLLLLLLLLL"));

function endCharCode(str){
    let l = str.length,
        s = "",
        reg = null;
 [].forEach.call(str,e => {
       reg = new RegExp(e,"g");
      if(str.replace(reg,"").length === l - 1){
          s = e;
      }
  });
  return s;
}

// console.log(endCharCode("aaaadbbbddcdefffdedsdff"))









