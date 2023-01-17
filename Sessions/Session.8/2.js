//재귀함수
function solution(n){
    let answer = ""
    function DFS(L){
        if(L===0) return
        else{
            answer += String(L%2)
            DFS(parseInt(L/2))
        }
    }
    DFS(n)
    return answer
}

console.log(solution(11))