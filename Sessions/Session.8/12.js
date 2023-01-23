//메모이제이션(시간 복잡도 확 줄어듬)
function solution(n, r){         
    let answer;
    let dy= Array.from(Array(6), () => Array(4).fill(0));
    function DFS(n, r){
        if(dy[n][r]>0) return dy[n][r];
        if(n===r || r===0) return 1;
        else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
    }
    answer=DFS(n, r);
    return answer;
}

console.log(solution(5, 3));

//코드 너무 오래 걸림.
// function solution2(n, r){
//     let answer;
//     function DFS(n, r){
//         if(n === r || r === 0) return 1
//         else return DFS(n-1, r-1) + DFS(n-1, r)
//     }
//     answer = DFS(n, r)
//     return answer
// }
// console.log(solution2(33, 19))
