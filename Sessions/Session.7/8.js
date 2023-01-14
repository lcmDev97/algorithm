//Greedy Algorithm
function solution(meeting){
    let answer=0;
    meeting.sort((a, b)=>{
        if(a[1]===b[1]) return a[0]-b[0];
        else return a[1]-b[1];
    })
    let et=0;
    for(let x of meeting){
        if(x[0]>=et){
            answer++;
            et=x[1];
        }
    }
    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5],                                                                                                                                                                                                                                                                                                                                                                            [4, 6], [5, 7]];
// let arr=[[3, 3], [1, 3], [2, 3]]
// console.log(solution(arr));

function test(arr){
    let answer = []
    let endTime = 0
    arr.sort((a,b)=>{ //1.끝나는 시간순으로 정렬(끝나는 시간이 같을 경우 시작 시간순으로 정렬)
        if(a[1]===b[1]) return a[0]-b[0];
        else return a[1]-b[1] 
    })
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] >= endTime) {
            endTime = arr[i][1]
            answer.push(arr[i])
        } 
    }
    return answer
}
console.log(test(arr))