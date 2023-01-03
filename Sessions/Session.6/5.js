//! 입력에 소괄호, 중괄호, 대괄호가 들어가면 대부분(열의 여덟)스택문제인가 고민해보기
// 자료구조(스택) 
function solution(s){
    let answer=0;
    let stack=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==='(') stack.push('(');
        else{
            stack.pop(); 
            if(s[i-1]==='(') answer+=stack.length; //레이저일때
            else answer++; //막대기의 끝
            //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
        }
    }                          
    return answer;
}

let a="()(((()())(())()))(())"; //답 17
// let a ="(((()(()()))(())()))(()())" //답 24
console.log(solution(a));