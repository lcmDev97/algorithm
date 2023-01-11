//버블정렬
//특징: 앞에있는 큰수가 계속 뒤로 가니까, 마지막 인덱스의 요소가 정해짐 (뒤에서 부터 정해짐)
// function solution(arr){
//     let answer=arr;
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=0; j<arr.length-i-1; j++){
//             console.log(i,j)
//             // if(arr[j]>arr[j+1]){
//             //     [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
//             // }
//         }   
//     } 
//     return answer;
// }

let arr=[13, 5, 11, 7, 23, 15];
// console.log(solution(arr));

function test(arr){
    for(let i = 0; i < arr.length; i++){
        let j = 0
        for(j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
console.log(test(arr))