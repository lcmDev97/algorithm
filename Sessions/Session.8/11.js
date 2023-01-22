function solution(n){         
    let answer;
    function DFS(n){
        if(n===1) return 1;
        else return n*DFS(n-1); 
    }
    answer=DFS(n);
    return answer;
}

// console.log(solution(5));
/*
위 코드 해설
D(5) === 5*D(4)
           D(4) === 4*D(3)
                      D(3) === 3*D(2)
                                 D(2) === 2*D(1)
                                            D(1) === 1
즉, answer=DFS(5)는 5*4*3*2*1 의 값이 된다.
순서는 1부터 곱해짐
*/

//지금 나한테 이게 더 직관적이긴 함
function test(n){
    let answer = 1
    function DFS(L){
        if(L===0) return
        else{
            answer = answer * L
            DFS(L-1)
        }
    }
    DFS(n)
    return answer
}
// console.log(test(5))