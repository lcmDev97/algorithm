/* 자료구조(스택), 프링글스통, LIFO,   
js에서는 배열[], push(), pop()으로 구현 가능

반대되는 개념: 큐 FIFO, 뜻 그대로 (버스)줄 서는 것
*/

//!어떤 자료구조, 알고리즘을 써야하는지 원인을 항상 생각하자.

function solution(s){
    let answer="YES";
    stack=[];
    for(let x of s){
        if(x==='(') stack.push(x);
        else{
            if(!stack.length) return "NO";
            stack.pop(); //pop()은 return값으로 자른 요소 반환함
        }
    }
    if(stack.length) return "NO";  
    return answer;
}

let a="(()(()))(()";
console.log(solution(a));
