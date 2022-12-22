//풀이1 내장함수사용
// Math.min(33,4,1) 이런식으로 인자 넘겨줘야함, Math.min(arr)처럼 배열 넘겨주면 NaN 리턴함
// 배열 넣으려면 전개연산자로 배열 펼치기

const solution = function(arr){
    let a = Math.min(...arr)
    console.log(a)
}
const arr = [55,2,3,4,5,6,7]
solution(arr)

//풀이2 sort이용
// const solution = function(a,b,c,d,e,f,g){
//     return [a,b,c,d,e,f,g,].sort((a,b)=>a-b)[0]
// }

// console.log(solution(55,2,3,4,5,6,7))

//풀이3 정렬안쓴 풀이 , for문이 sort 보다 더 빠르긴 함

// const solution = function(arr){
//     let min = arr[0]
//     for(let i=0; i<arr.length; i++){
//         if(min>arr[i]) min=arr[i]
//     }
//     console.log(min)
// }
// let arr = [55,2,3,4,5,6,7]
// solution(arr)