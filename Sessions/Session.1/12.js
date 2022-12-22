//!내 풀이1 문자열.toUpperCase()하면 전부 대문자화됨

//내 풀이2 
const solution = function(str){
    let answer = ""
    for(let x of str){
        answer += x.toUpperCase()
    }
    console.log(answer)
}

solution("ItisTimeToStudy")

//답지
// function solution(s){         
//     let answer="";
//     for(let x of s){
//         let num=x.charCodeAt();
//         if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
//         else answer+=x;

//         //if(x===x.toLowerCase()) answer+=x.toUpperCase();
//         //else answer+=x;
//     }

//     return answer;

// }

// let str="ItisTimeToStudy";
// console.log(solution(str));