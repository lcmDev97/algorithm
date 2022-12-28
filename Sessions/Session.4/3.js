const isBetter = function(a,b, arr){
    if(a === b) return false
    
    let gradeOfA, gradeOfB
    for(let n = 0; n < arr.length; n++){ 
        for(let i = 0; i < arr[0].length; i++){ //응시 사람수가 많을 수록,이부분을 indexOf이용하면 반복 멈춤 or break, continue사용
            if(arr[n][i]===a) gradeOfA = i
            if(arr[n][i]===b) gradeOfB = i
        }
        if(gradeOfA > gradeOfB){
            return false
        }
        gradeOfA = -1
        gradeOfB = -1
    }
    return true
}

const solution = function(arr){
    let answer = []
    for(let a = 1; a <= arr[0].length; a++){
        for(let b = 1; b <= arr[0].length; b++){
            if(isBetter(a,b,arr)) answer.push([a,b])
        }
    }
    console.log(answer)
}
let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
solution(arr)

