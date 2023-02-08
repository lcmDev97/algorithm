//동전 교환문제(냅색 알고리즘)
//Session8 재귀함수와 완전탐색에서 DFS이용해서도 풀어봤음.
//그러나 동전의 종류가 많아지고, 거슬러줄 돈의 크기가 많아질수록 DFS알고리즘 문제생김.
// =>재귀쓰면 느려지겠구나 => 냅색 알고리즘 생각해내기
//동적 계획법은 dy[i]가 의미하는 바를 파악하기
//i의 의미: 동전 금액
//dy[i]의 의미: i원 동전을 거슬러주는데 사용된 최소 동전 개수  
function solution(m, coin){  
    let answer=0;
    let dy=Array.from({length:m+1}, ()=>1000);
    dy[0]=0;
    for(let i=0; i<coin.length; i++){
        for(let j=coin[i]; j<=m; j++){
            dy[j]=Math.min(dy[j], dy[j-coin[i]]+1);
        }
    }
    answer=dy[m];
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr))