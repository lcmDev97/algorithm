// 풀이1)
const solution = function(m, a){
    let answer = []
    for(let i = 0; i < a.length; i++){
        let tmp = []
        let count = m - a[i]
        tmp.push(a[i])
        for(let j = i + 1; j < a.length; j++){
            let target = a[j] 
            count = count - target
            tmp.push(target)
            if(count === 0) {
               answer.push(tmp)
               break
            }
            if(count < 0) {
                break
            }
        }
    }
    return answer
}

//풀이2) two pointers algorithms
function solution(m, arr){
    let answer=0, lt=0, sum=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        if(sum===m) answer++;
        while(sum>=m){
            sum-=arr[lt++];
            if(sum===m) answer++;       
        }
    }
    return answer;
}
            
let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));