const solution = function(arr){
    let answer = []
    for(let x of arr){
        if(!answer.includes(x)){
            answer.push(x)
        }
    }
    return answer
}

console.log(solution(["good","time","good","time","student"]))

//답지 indexOf, filter사용
// function solution(s){  
//     let answer;
//     //console.log(s.indexOf("time"));
//     answer=s.filter(function(v, i){
//         return s.indexOf(v)===i;
//     });
//     return answer;
// }
// let str=["good", "time", "good", "time", "student"];
// console.log(solution(str));