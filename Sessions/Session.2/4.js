function solution(arr){
    let answer = 0
    let acc = 0
    for(let x of arr){
        if(x === 1){
            acc += 1
            answer += acc
        }else{
            acc = 0
        }
    }
    console.log(answer)
}
let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
solution(arr)

//답지랑 똑같