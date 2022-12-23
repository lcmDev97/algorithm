//내가 푼거
function solution(arr){  
    let answer = 0
    const di = [0,1,0,-1]
    const dj = [1,0,-1,0]

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let flag = true
            for(let k = 0; k < 4; k++){
                if( i+di[k] >=0 && i+di[k] <=4 && j+dj[k] >= 0 && j+dj[k] <= 4 && arr[i][j] < arr[i+di[k]][j+dj[k]]){
                    flag = false
                }
            }
            if(flag) {
                answer++
            }
        }
    }
    console.log(answer)
}
//중복되는거 변수로 묶은 버전
// function solution(arr){  
//     let answer=0;
//     let n=arr.length;
//     let dx=[-1, 0, 1, 0];
//     let dy=[0, 1, 0, -1];
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             let flag=1;
//             for(let k=0; k<4; k++){
//                 let nx=i+dx[k];
//                 let ny=j+dy[k];
//                 if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
//                     flag=0;
//                     break;
//                 }
//             }
//             if(flag) answer++;
//         }
//     }  
      
//     return answer;
// }

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
solution(arr)

//답지
// function solution(arr){  
//     let answer=0;
//     let n=arr.length;
//     let dx=[-1, 0, 1, 0];
//     let dy=[0, 1, 0, -1];
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             let flag=1;
//             for(let k=0; k<4; k++){
//                 let nx=i+dx[k];
//                 let ny=j+dy[k];
//                 if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
//                     flag=0;
//                     break;
//                 }
//             }
//             if(flag) answer++;
//         }
//     }  
      
//     return answer;
// }

// let arr=[[5, 3, 7, 2, 3], 
//          [3, 7, 1, 6, 1],
//          [7, 2, 5, 3, 4],
//          [4, 3, 6, 4, 1],
//          [8, 7, 3, 5, 2]];
// console.log(solution(arr));