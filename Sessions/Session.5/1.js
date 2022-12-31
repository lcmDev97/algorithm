//풀이1) 
// const solution = function(a, b){
//     let answer = []
//     for(let i = 0; i < a.length; i++){
//         answer.push(a[i])
//     }
//     for(let i = 0; i < b.length; i++){
//         answer.push(b[i])
//     }
//     return answer.sort((a,b)=>a-b)
// }

//풀이2) two pointers algorithm. sort사용 x
function solution(arr1, arr2){
    let answer=[];
    let n=arr1.length;
    let m=arr2.length;
    let p1=p2=0;
    while(p1<n && p2<m){
        if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]); //뒤에 후치연산이 있으면, arr1[p1]이 들어가고 p1++한다는 뜻
        else answer.push(arr2[p2++]); //마찬가지로 arr[p2]집어넣고 p2++됨
    }
    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]); 
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));

/* 메모
#sort이용한 풀이에 대한 피드백
n개를 sort로 정렬하면, nlogn의 시간복잡도를 가짐 => "별로임" O(N log N)

#for문 한번만 이용한 풀이
n=[1,3,5] m=[2,3,6,7]일때 시간복잡도는 3+4로 빠르게 풀 수 있음. O(N)



*/