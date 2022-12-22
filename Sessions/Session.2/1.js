const solution = function(arr){

    let answer = [arr[0]]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > arr[i-1]){
            answer.push(arr[i])
        }
    }
    console.log(answer)
}
solution([7,3,9,5,6,12])

//답지랑 똑같