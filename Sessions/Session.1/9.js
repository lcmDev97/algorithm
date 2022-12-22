const solution = function(str){
    let arr = str.split('')
    for(let i = 0; i < str.length; i++){
        if(arr[i] === "A"){
            arr.splice(i,1,"#")
        }
    }
    console.log(arr.join(""))
}

let str = "BANANA"
solution(str)

// 답지 1
// function solution(s){
//     let answer="";
//     for(let x of s){
//         if(x=='A') answer+='#';
//         else answer+=x;
//     }
//     return answer;
// }

// let str="BANANA";
// console.log(solution(str));

// 답지2 replace이용
// function solution(s){
//     let answer=s;
//     answer=answer.replace(/A/g, "#");
//     return answer;
// }

// let str="BANANA";
// console.log(solution(str));

// 스트링타입은 값변경이 불가능합니다. 
// 스트링을 문자배열로 변환한 다음 변경해야 합니다.

// let test = "abcdefg"
// console.log(test[1])    // "b"
// test[1] = "3"
// console.log(test[1])    // "b"