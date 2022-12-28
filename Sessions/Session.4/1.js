const solution = function(arr){
    let max = 0
    let answer = 0
    let sum = 0

    for(let i = 0; i < arr.length; i++){
        let target = String(arr[i])
        for(let j = 0; j < target.length; j++){
            sum += Number(Number(target[j]))
        }
        if(sum >= max){
            answer = Math.max(arr[i], answer)
            max = sum
        }
        sum = 0
    }
    console.log(answer)
}
let arr = [128, 460, 603, 40, 521, 137, 123]
solution(arr)

// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER;
//     for(let x of arr){
//         let sum=0, tmp=x;
//         while(tmp){
//             sum+=(tmp%10);
//             tmp=Math.floor(tmp/10);
//         }
//         if(sum>max){
//             max=sum;
//             answer=x;
//         }
//         else if(sum===max){
//             if(x>answer) answer=x;
//         }
//     }
//     return answer;
// }

// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));



// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER;
//     for(let x of arr){
//         let sum=x.toString().split('').reduce((a, b)=>a+Number(b), 0);
//         if(sum>max){
//             max=sum;
//             answer=x;
//         }
//         else if(sum===max){
//             if(x>answer) answer=x;
//         }
//     }
//     return answer;
// }

// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));