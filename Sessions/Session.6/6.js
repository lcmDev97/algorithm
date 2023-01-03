// 자료구조(큐)
/*
큐에는 Array.shift()함수가 주로 사용됨
Array.shift()하면 0번쨰 인덱스를 제거하고 값을 반환함.
*/
function solution(n, k){
    let answer;
    // let queue = Array.from({length:4}) //[undefined, undefined, undefined, undefined, ]
    // v는 배열의 값, i는 인덱스
    // 따라서  아래 queue는[1,2,3,4,5,6,7,8] 배열을 만듦
    let queue=Array.from({length:n}, (v, i)=>i+1);
    while(queue.length){
        for(let i=1; i<k; i++) queue.push(queue.shift());
        queue.shift();
        if(queue.length===1) answer=queue.shift();
    }  
    return answer;
}
console.log(solution(8, 3)); //답 7