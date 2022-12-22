//! 숫자문자열 문제에서 유용한 함수 isNaN() 
//isNot a Number이므로 문자면 true, 숫자면 false반환
//답지
function solution(str){
    let answer="";
    for(let x of str){
        if(!isNaN(x)) answer+=x;  //! 숫자일떄 이므로 부정
    }  
    return parseInt(answer);    //! parseInt 하면 앞에 0 없어짐 
}

let str="g0en2T0s8eSoft";
console.log(solution(str));
