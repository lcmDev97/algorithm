// const solution = function(str){
//     let candidate = []
//     let winner = ""
//     let arr = str.split("")
//     for(let x of arr){
//         if(!candidate.includes(x)) candidate.push(x)
//     }
//     let max = 0
//     for(let x of candidate){
//         let votes = str.split(x).length - 1
//         if(votes > max){
//             max = votes
//             winner = x
//         }
//     }
//     return winner
// }

// solution()

//풀이2) Hash Map
function solution(s){  
    let answer;
    let sH = new Map();
    for(let x of s){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    //console.log(sH) //Map(5) { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }
    let max=Number.MIN_SAFE_INTEGER;
    for(let [key, val] of sH){
        if(val>max){
            max=val;
            answer=key;
        }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));