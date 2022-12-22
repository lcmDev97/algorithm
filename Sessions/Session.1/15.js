const solution = function(str){
    let halfIndex = str.length/2
    if(str.length%2 === 0){//짝수
        return str[halfIndex-1] + str[halfIndex]
    }else{  //홀수
        return str[Math.floor(halfIndex)]
    }
}

console.log(solution("study"))