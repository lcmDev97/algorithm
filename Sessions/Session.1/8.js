//내가 푼 풀이
const findIndex = function(arr){
    let sum = arr.reduce((acu,cur)=>acu+cur,0)
    let findNumber = sum - 100
    let tallerIndex = []
    
    for(let i=0; i<arr.length-1; i++){
        for(let k=i+1; k<arr.length; k++){
            if(arr[i]+arr[k] === findNumber){
                tallerIndex.push(i,k)
                console.log(tallerIndex)
                return tallerIndex  //이중for문 멈추려고 return 이용함=>자연스럽게 함수 또 만들게 됨
            }
        }
    }

}

const solution = function(arr){
    let indexArray = findIndex(arr)
    arr.splice(indexArray[0],1)
    arr.splice(indexArray[1]-1,1) //위에서 하나 제거하니까 인덱스 한개씩 줄어듬, 어니면 답지 풀이처럼 뒤에꺼 먼저 지우면 -1할 필요 없음.
    return arr
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]
console.log(solution(arr))

//답지
// function solution(arr){
//     let answer=arr;
//     let sum=answer.reduce((a, b)=>a+b, 0);
//!     for(let i=0; i<8; i++){             
//!         for(let j=i+1; j<9; j++){    조건 이렇게 두기
//             if((sum-(answer[i]+answer[j]))==100){
//!                 answer.splice(j, 1);   뒤에꺼 먼저 지우면 앞에 인덱스는 안바뀜
//                 answer.splice(i, 1);
//             }
//         }
//     }
//     return answer;
// }

// let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));