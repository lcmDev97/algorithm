const solution = function(N){
    let answer = 0
    for(let i = 1; i < 84; i++){
        if(answer >= N){
            return console.log(answer/12)
        }
        answer += 12
    }
}

solution(178)

// function solution(n){
//     console.log(Math.ceil(n/12))
// }

// Math.ceil(2.xx) === 3 항상 올림
// Math.floor(2.xx) === 2 항상 내림
// Math.round(2.xx)
