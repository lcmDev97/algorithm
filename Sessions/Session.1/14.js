const solution = function(arr){
    let long = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > long.length){
            long = arr[i]
        }
    }
    console.log(long)
}

solution(["teacher","time","student","beautiful","good"])