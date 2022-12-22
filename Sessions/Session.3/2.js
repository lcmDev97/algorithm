const solution = function(str){

    
}

let str = "found7, time: study; Yduts; emit, 7Dnuof"
console.log(solution(str))

//답지1 replace, 정규식 이용
// function solution(s){
//     let answer="YES";
//!     s=s.toLowerCase().replace(/[^a-z]/g, ''); ^는 부정의미,g는 전체. 즉,소문자가 아닌것들은 다 찾아서 빈문자열로 바꿔라
//     if(s.split('').reverse().join('')!==s) return "NO";
//     return answer;
// }

// let str="found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str));

//답지2 섹션1의 "대소문자 통일"문제에서 배운 아스키코드이용해 소문자만 골라내기
// function solution(s){
//     let answer="YES"
//     let res="";
//     s=s.toLowerCase();
//     for(let x of s){
//         let num=x.charCodeAt();
//         if(num>=97 && num<=122) res+=x;
//     }
//     if(res.split('').reverse().join('')!==res) return "NO";
//     return answer;
// }