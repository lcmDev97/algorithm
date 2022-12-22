const solution = function(str){
    let upperCase = str.toUpperCase()
    
    if(upperCase === upperCase.split("").reverse().join("")){
        return "YES"
    }else{
        return "NO"
    }

}
console.log(solution("gooG"))


//답지1 reverse안쓰고 for문 이용
// function solution(s){
//     let answer="YES";
//     s=s.toLowerCase();
//     let len=s.length;
//!     for(let i=0; i<Math.floor(len/2); i++){ //goog일떄도 0,1만 확인 , gooog일떄도 0,1만 확인하면됨
//!         if(s[i]!=s[len-i-1]) return "NO";
//     }
//     return answer;
// }

// let str="goooG";
// console.log(solution(str));

// 답지2 reverse이용
// function solution(s){
//     let answer="YES";
//     s=s.toLowerCase();
//     if(s.split('').reverse().join('')!=s) return "NO";    
//     return answer;
// }

// let str="gooG";
// console.log(solution(str));