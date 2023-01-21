//!다중for문이랑 다른점.
//순열이기에 [1,2]와 [2,1]은 다름
// 재귀는 다중for문과 같지만, 
//인자 값에 따라 for문을 추가해 줘야하는 다중 for문과는 다르게
//인자에 대해서 재귀가 더 융통성있고, 코드 수정할 일 적음

function solution(n, m){
    let answer=[];
    let tmp=Array.from({length:m}, ()=>0);
    function DFS(L){
        if(L===m){
            answer.push(tmp.slice()); //깊은 복시해야함. tmp로만 하면 얕은 복사가 되어 
            }//마지막 tmp 값으로 기존에 answer에 넣었던 값들이 다 변하게 됨.
        else{
            for(let i=1; i<=n; i++){
                tmp[L]=i;
                DFS(L+1);
            }
        }   
    }
    
    DFS(0);
    return answer;
}
console.log(solution(3, 2));