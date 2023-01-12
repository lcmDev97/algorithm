//! slice() 깊은복사에 관하여
// arr배열에 기본형 데이터만 있으면 깊은 복사가 되는데,
// 다른경우에는(ex. arr배열안에 또 다른 배열이 있거나) 얕은 복사됨

//! js sort()는 문자 정렬이 기본임.
//따라서 숫자 정렬하려면 함수식 넣어주기

function solution(arr){
    let answer = []
    let sortedArr = arr.slice().sort((a,b)=>a-b) 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== sortedArr[i]) answer.push(i+1)
    }
    return answer
}

console.log(solution(arr));
let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];