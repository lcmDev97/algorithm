function solution(arr){
    let answer = 0
    let n = arr.length
    let dx = [0,1,0,-1]
    let dy = [-1,0,1,0]
    
    for(let y = 0; y < n; y++){
        for(let x = 0; x < n; x++){
            let flag = true
            for(let k = 0; k < 4; k++){
                let nx = x + dx[k]
                let ny = y + dy[k]
                if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[ny][nx] >= arr[y][x]){
                    flag = false
                    break
                }
            }
            if(flag) answer++
        }
    }
    console.log(answer)
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
solution(arr)