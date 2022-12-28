const solution = function(n, k, card){
    const arr = []
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                if(i!==j && j!==k && k!==i){
                    let sum = card[i] + card[j] + card[k]
                    if(!arr.includes(sum)) arr.push(sum)
                }
            }
        }
    }
    arr.sort((a,b)=>b-a)
    return arr[k-1]
}
let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

//Set객체 이용한 풀이
// function solution(n, k, card){
//     let answer;
//     let tmp = new Set();
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             for(let k=j+1; k<n; k++){
//                 tmp.add(card[i]+card[j]+card[k]);
//             }
//         }
//     }
//     let a=Array.from(tmp).sort((a, b)=>b-a); //Array.from(tmp)는 배열로 만드는거.
//     answer=a[k-1];
//     return answer;
// }
// let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10, 3, arr));

/*
중복을 제거하는 자료구조 Set 객체.(25를 10번 넣어도 한번밖에 안들어감)
Set객체 es6 최신 문법의 중복을 제거한 값들의 집합입니다. 
특정 요소 추가: add 
특정 요소가 있는지 확인: has (boolean 값으로 반환) 
특정 요소 제거: delete
모든 요소 제거: clear
요소의 개수 반환: size (배열의 length) 
set 객체 선언 let mySet = new Set(); 
*/