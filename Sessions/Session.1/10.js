// const solution = function(str,a){
//     let count = 0
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === a){
//             count++
//         }
//     }
//     console.log(count)
// }

// solution("COMPUTERPROGRAMMING","R")

//답지1
// function solution(s, t){
//     let answer=0;
//     for(let x of s){
//         if(x===t) answer++;
//     }
//     return answer;
// }

// let str="COMPUTERPROGRAMMING";
// console.log(solution(str, 'R'));

//답지2 내장함수 split 사용
function solution(s, t){
    let answer=s.split(t)
    console.log('?',answer)
    return answer-1;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));