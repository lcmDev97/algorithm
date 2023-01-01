const solution = function(k, arr){
    let max = 0
    for(let i = 0; i < arr.length - (k-1); i++){
        let sum = arr[i] + arr[i+1] + arr[i+2]
        max = Math.max(max, sum)
    }
    return max
}

// let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));

//풀이2) Sliding Window algorithm
function solution(k, arr){
    let answer, sum=0;
    for(let i=0; i<k; i++) sum+=arr[i];
    answer=sum;
    for(let i=k; i<arr.length; i++){
        sum+=(arr[i]-arr[i-k]);
        answer=Math.max(answer, sum);
    }
    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));