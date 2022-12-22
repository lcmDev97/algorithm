const solution = function(str){
    let answer = ""
    let array = str.split("")
    for(let x of array){
        if(x === x.toUpperCase()){
            answer += x.toLowerCase()
        }else{
            answer += x.toUpperCase()
        }
    }
    console.log(answer)
}

solution("StuDY")