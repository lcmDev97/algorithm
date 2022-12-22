const solution = function(str){
    let count = 0
    for(let x of str){
        if(x === x.toUpperCase()){
            count++
        }
    }
    return count
}

console.log(solution("KoreaTimeGood"))
