//Dynamic Programming(동적계획법)
//복잡한 문제를 간단한 여러 개의 문제로 나누어 푸는 방법을 말한다.
//점화식의 관계를 가지고 있는 문제에 사용 가능. 따라서 점화식 구하는 것이 중요
function solution(n){
    let answer=0;
    let dy=Array.from({length:n+1}, ()=>0);
    dy[1]=1;
    dy[2]=2;
    for(let i=3; i<=n; i++){
        dy[i]=dy[i-2]+dy[i-1];
    }
    answer=dy[n];
    return answer;
}

console.log(solution(7));

//DFS이용한 풀이(함수 동작 시간 비교해보니 효율 너무 안좋음)
// function test(n){
//     let answer = 0
//     function DFS(sum){
//         if(sum > n) return
//         if(sum === n){
//             answer++
//         }
//         else{
//             let arr = [1,2]
//             for(let i = 0; i < arr.length; i++){
//                 DFS(sum + arr[i])
//             }
//         }
//     }
//     DFS(0,0)
//     return answer
// }
// console.log(test(7))