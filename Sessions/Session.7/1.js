//선택정렬
function solution(arr){
    for(let i=0; i<arr.length; i++){
        let idx=i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[idx]) idx=j;
        }
        // let tmp = arr[i]
        // arr[i] = arr[idx]
        // arr[idx] = tmp
        //js 최신 문법사용하면 위처럼 변수 3개일 필요없음
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    } 
    return arr;
}  
let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));

//최신 문법
// let a = 0
// let b = 100
// [a, b] = [b, a]
// a // 100
// b // 0