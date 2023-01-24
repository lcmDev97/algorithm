//순열(10번 문제)과 콤비네이션공식(12번 문제) 응용
//문제 설명 그대로 파스칼 삼각형과정을 매번 다 해주면 너무 오래 걸림. => p배열 x b배열 이용
//풀이 방법은 b배열 미리 구하고, p배열을 순열문제처럼 계속 구해 p*b값을 sum에다 넣고 f값과 비교.

//2차원 배열 생성할 떄, let dy = Array.from(Array(n+1), () => Array(r+1).fill(0)); 이거보다는
//let dy = Array(n+1).fill(Array(n+1).fill(0)) 이게 더 나한테는 직관적
function solution(n, f){         
    let answer, flag=0;
    let dy= Array(n+1).fill(Array(n+1).fill(0))
    let ch=Array.from({length:n+1}, ()=>0);
    let p=Array.from({length:n}, ()=>0);//1~n까지의 자연수로 순열 계속 만들어서 p,b 배열 곱하기.
    let b=Array.from({length:n}, ()=>0);//n = 3일떄, [2C0, 2C1, 2C2]값이 될거.
    function combi(n, r){
        if(dy[n][r]>0) return dy[n][r];
        if(n===r || r===0) return 1;
        else return dy[n][r]=combi(n-1, r-1)+combi(n-1, r);
    }
    for(let i=0; i<n; i++){
        b[i]=combi(n-1, i);
    }
    function DFS(L, sum){
        if(flag) return;
        if(L===n && sum===f){
            answer=p.slice();
            flag=1;
        }
        else{
            for(let i=1; i<=n; i++){
                if(ch[i]===0){
                    ch[i]=1;
                    p[L]=i;
                    DFS(L+1, sum+(b[L]*p[L]));
                    ch[i]=0;
                }
            }
        }
    }
    DFS(0, 0);
    return answer;
}
console.log(solution(4, 16));

//push, pop 이용
function solution2(n, f){         
    let answer, flag=0;
    let dy= Array.from(Array(11), () => Array(11).fill(0));
    let ch=Array.from({length:n+1}, ()=>0);
    let p=[];
    let b=Array.from({length:n}, ()=>0);//n = 3일떄, [2C0, 2C1, 2C2]값이 될거.
    function combi(n, r){
        if(dy[n][r]>0) return dy[n][r];
        if(n===r || r===0) return 1;
        else return dy[n][r]=combi(n-1, r-1)+combi(n-1, r);
    }
    function DFS(L, sum){
        // if(L===n) console.log(p)
        if(flag) return;
        if(L===n && sum===f){
            answer=p.slice();
            flag=1;
        }
        else{
            for(let i=1; i<=n; i++){
                if(ch[i]===0){
                    ch[i]=1;
                    p.push(i)
                    DFS(L+1, sum+(b[L]*p[L]));
                    ch[i]=0;
                    p.pop()
                }
            }
        }
    }
    for(let i=0; i<n; i++){
        b[i]=combi(n-1, i);
    }
    DFS(0, 0);
    return answer;
}
console.log(solution2(4, 16))
