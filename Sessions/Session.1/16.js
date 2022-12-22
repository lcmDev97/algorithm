const solution = function(str){
    let answer = ""
    for(let x of str){
        if( !answer.includes(x) ){
            answer += x
        }
    }
    console.log(answer)
}

solution("ksekkset")

// 답지 indexOf사용
// function solution(s){  
//     let answer="";
//     //console.log(s.indexOf("K"));
//     for(let i=0; i<s.length; i++){ 
//         //console.log(s[i], i, s.indexOf(s[i]));
//         if(s.indexOf(s[i])===i) answer+=s[i];
//     }
//     return answer;
// }
// console.log(solution("ksekkset"));