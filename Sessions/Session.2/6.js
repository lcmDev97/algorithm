// const solution = function(arr){
//     let max = 0
//     let diagonal1 = 0
//     let diagonal2 = 0
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(i===j){
//                 diagonal1 += arr[i][j]
//             }else if(i+j === arr.length){

//             }
//         }
//     }
//     console.log(diagonal1)



// }
// let arr=[[10, 13, 10, 12, 15], 
//          [12, 39, 30, 23, 11],
//          [11, 25, 50, 53, 15],
//          [19, 27, 29, 37, 27],
//          [19, 13, 30, 13, 19]]
// solution(arr)


//답지
// function solution(arr){  
//
//     #1 행과열에 대해 구하기
//     let answer=0;
//     let n=arr.length;
//     let sum1=sum2=0;
//     for(let i=0; i<n; i++){
//!         sum1=sum2=0;
//         for(let j=0; j<n; j++){
//             sum1+=arr[i][j]; //행
//             sum2+=arr[j][i]; //열
//         }
//!         answer=Math.max(answer, sum1, sum2);
//     }
//     #2 대각선방향에 대해 구하기
//     sum1=sum2=0;         초기화
//     for(let i=0; i<n; i++){
//!         sum1+=arr[i][i];
//!         sum2+=arr[i][n-i-1];
//     }  
//     answer=Math.max(answer, sum1, sum2); 
//     return answer;
// }

// let arr=[[10, 13, 10, 12, 15], 
//          [12, 39, 30, 23, 11],
//          [11, 25, 50, 53, 15],
//          [19, 27, 29, 37, 27],
//          [19, 13, 30, 13, 19]]
// console.log(solution(arr));

//이해 안되서 해본거
// for(let i = 0 ; i< 5; i++){
//     for(let j = 0 ; j < 5; j++){
//         console.log(j,i)
//     }
// }
