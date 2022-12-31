// const solution = function(m, a){
//     let answer = []

//     for(let i = 0; i < a.length; i++){
//         let tmp = []
//         let count = m - a[i] //5-1
//         if(a[i] > m) break

//         tmp.push(a[i])
//         answer.push(tmp)
//         for(let j = i + 1; j < a.length; j++){
//             let target = a[j] 
//             count = count - target
//             tmp.push(target)
//             if(count === 0) {
//                answer.push(tmp)
//                break
//             }
//             if(count < 0) {
//                 break
//             }
//         }
//     }
//     return answer
// }

// let a=[1, 3, 1, 2, 3];
// console.log(solution(5, a));

//풀이2) two pointers algorithm.
function solution(m, arr){
    let answer=0, sum=0, lt=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        while(sum>m){ //sum이 초과하는 동안에는 초과하지 않을때 까지 빼기. 
            sum-=arr[lt++];
        }
        answer+=(rt-lt+1);
        console.log(rt-lt+1)
    }               
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));
