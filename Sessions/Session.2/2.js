const solution = function(arr){
    let count = 0
    let max = 0
    for(let x of arr){
        if(x > max){
            count++
            max = x
        }
    }
    console.log(count)
}

solution([130, 135, 148, 140, 145, 150, 150, 153])

//답지
// function solution(arr){         
//     let answer=1, max=arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>max){
//             answer++;
//             max=arr[i];
//         }
//     }
//     return answer;
// }

// let arr=[130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(arr));