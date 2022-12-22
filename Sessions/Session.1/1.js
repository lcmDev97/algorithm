const solution = function(a,b,c){
    let min = a
    if( min > b ){
        min = b
    }
    if( min > c ){
        min = c
    }

    console.log(min)
}
solution(6,5,11)

const solution2 = function(a,b,c){
    const array = [a,b,c]
    array.sort((a,b) => a-b)
    console.log(array[0])
}
solution2(6,5,11)