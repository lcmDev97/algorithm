// 자료구조(스택)
function solution(s){  
    let answer;
    let stack=[];
    for(let x of s){
        if(!isNaN(x)) stack.push(Number(x)); //숫자를 만났을 때
        else{                                //기호를 만났을 떄는 계산해서 다시 스택에 넣기
            let rt=stack.pop();
            let lt=stack.pop();
            if(x==='+') stack.push(lt+rt);
            else if(x==='-') stack.push(lt-rt);
            else if(x==='*') stack.push(lt*rt);
            else if(x==='/') stack.push(lt/rt);
        }
    }
    answer=stack[0];
    return answer;
}



let str="352+*9-";
console.log(solution(str));
