//최대점수 구하기(냅색 알고리즘)
//4번문제와 차이점은 4번 문제에서 동전의 개수는 무한개였음, 5번 문제는 한 유형당 한개만 풀 수 있음.
//4번 문제처럼 왼쪽부터 dy시작하면 중복값이 저장됨.
// 그러므로, 오른쪽에서부터 왼쪽방향으로 시작(j--)
function solution(m, arr){  
    let answer=0;
    let dy=Array.from({length:m+1}, ()=>0);
    for(let i=0; i<arr.length; i++){
        let ps=arr[i][0];
        let pt=arr[i][1];
        for(let j=m; j>=pt; j--){
            dy[j]=Math.max(dy[j], dy[j-pt]+ps);
        }
    }
    answer=dy[m];
    return answer;
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr));
//문제 풀이 큰틀은 문제가
// [10, 5] 문제를 풀었을 때
// [25, 12] 문제도 플었을 때
// [15, 8] 문제도 플었을 때, 더 높은 점수로 갱신

//dy배열은 다음과 같이 비교하며 순서대로 채워질거임
//[0,1,2,3,4,5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20] 인덱스번호
//[0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10] // [10, 5] 문제만 있을 떄,
//[0,0,0,0,0,10,10,10,10,10,10,10,25,25,25,25,35,35,35,35,35] // [10, 5] [25, 12] 문제가 있을 떄

function test(m, arr){
    let answer = 0
    let dy = Array.from({length: m+1},()=>0)
    for(let i = 0; i < arr.length; i++){
        problemScore = arr[i][0]
        problemTime = arr[i][1]
        for(let j = m; j >= problemTime; j--){
            dy[j] = Math.max(dy[j], dy[j-problemTime] + problemScore)
        }
    }
    answer = dy[m]
    return answer
}
console.log(test(20,arr))
