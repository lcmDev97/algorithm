const solution = function(a,b){
    let sortedA = a.split("").sort().join("")
    let sortedB = b.split("").sort().join("")
    console.log(sortedA, sortedB)
    if(sortedA === sortedB){
        return "YES"
    }else{
        return "NO"
    }
}

// 풀이2) Hash Map.
// function solution(str1, str2){
//     let answer="YES"; 
//     let sH = new Map();
//     for(let x of str1){
//         if(sH.has(x)) sH.set(x, sH.get(x)+1);
//         else sH.set(x, 1);
//     }
//     for(let x of str2){
//         if(!sH.has(x) || sH.get(x)==0) return "NO";
//         sH.set(x, sH.get(x)-1);
//     }
//     return answer;
// }

// let a="abaCC";
// let b="Caaab";
// console.log(solution(a, b));

let a="AbaAeCe";
let b="baeeACA";
test(a,b)