//최대부분증가수열(LIS. Longest Increasing Subsequence)
function solution(arr){  
    let answer=0;
    let dy=Array.from({length:arr.length}, ()=>0);
    dy[0]=1;
    for(let i=1; i<arr.length; i++){
        let max=0;
        for(let j=i-1; j>=0; j--){
            if(arr[j]<arr[i] && dy[j]>max){
                max=dy[j];
            }
        }
        dy[i]=max+1;
        answer=Math.max(answer, dy[i]);
    }
    return answer;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
// console.log(solution(arr));


//동적 계획법을 사용하려면 작은부분부터 나눠야함.
// dy[i]의 값의 의미: arr의 i번쨰 숫자가 마지막 숫자일떄의 부분증가수열의 길이

// 주어진 수열들이 [5, 3, 7, 8, 6, 2, 9, 4] 이고,
// dy가           [1, 1, 2, 3,    ] 인 상황에서,
// 8의 값은 8보다 작은 값들중에서 최대인 2 + 1해서 3
// [5, 3, 7, 8, 6, 2, 9, 4]
// [1, 1, 2, 3,           ]