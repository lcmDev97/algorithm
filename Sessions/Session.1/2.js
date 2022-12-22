const solution = function(a,b,c){
    let array = [a,b,c].sort((a,b)=>a-b)
    const A = array[0]
    const B = array[1]
    const C = array[2]

    if(A+B > C){
        console.log('YES')
    }else{
        console.log('NO')
    }
    
}

solution(11,3,5)
// 삼각형 조건
// 세 변의 길이를 줬을 때 길이가 가장 긴 변의 길이는 
// 다른 두 변 길이의 합보다 작아야 삼각형을 그릴 수 있어요.
