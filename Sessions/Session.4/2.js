//소수 구하는 방법
// num = 16이라 할때, let i = 2; 2 <= num; i++   num까지 나누는게 기본

// 반복횟수 줄이고 싶다면 다음과 같은 2가지 방법 존재.
// 1) N/2까지만 나누어서 계산.     2 <= parseInt(num/2)
// 2) N의 제곱근(√) 까지만 나누어서 계산
// 함수명은 보통 isPrime

const isPrime = function(num) {
    if(num === 1) return false
    for(let i = 2; i <= parseInt(num/2); i++){
        if(num%i === 0) return false
    }
    return true
}

const solution = function(arr) {
    let answer = [] 
    let value = 0

    for(let x of arr){  
        let target = Number(String(x).split("").reverse().join(""))
        if(isPrime(target)) answer.push(target)
    }
    console.log(answer)
}
let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(arr)


// 숫자 그대로 뒤집는 방법
// function isPrime(num){
//     if(num===1) return false;
//     for(let i=2; i<=parseInt(num/2); i++){
//         if(num%i===0) return false;
//     }
//     return true;
// }
// function solution(arr){
//     let answer=[];
//     for(let x of arr){
        // let res=0;     
//         while(x){        // 이 부분 이해 안가면, x를 307로 두고 해보기
//             let t=x%10;
//             res=res*10+t;
//             x=parseInt(x/10);
//         }
//         if(isPrime(res)) answer.push(res);
//     }
//     return answer;
// }

// let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));

// 문자열로 바꾼후 뒤집는 방법
// function isPrime(num){
//     if(num===1) return false;
//     for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
//         if(num%i===0) return false;
//     }
//     return true;
// }
// function solution(arr){
//     let answer=[];
//     for(let x of arr){
//         let res=Number(x.toString().split('').reverse().join(''));
//         if(isPrime(res)) answer.push(res);
//     }
//     return answer;
// }

// let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));