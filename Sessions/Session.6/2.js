// 자료구조(스택)
function solution(s){  
    let answer;
    let stack=[];
    for(let x of s){
        if(x===')'){
            while(stack.pop()!=='('); //pop실행됨, "("을 pop하여 반환할때 까지 계속 pop
        }
        else stack.push(x);
    }
    answer=stack.join('');  
    return answer;
}

function solution(s){
    let answer = ""
    let stack = []
    for(let x of s){
        if(x==="("){
            stack.push(x)
        }else if(x===")"){
            stack.pop()
        }else{
            if(!stack.length) answer += x
        }
    }
    return answer
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));

