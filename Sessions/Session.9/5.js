//BFS(넓이우선탐색)
//Queue 사용하여 표현
//상태트리를 레벨탐색한다.
//최단거리를 구하는 방법론이다.
//          1
//      2       3
//    4   5   6   7

//1,2,3,4,5,6,7

function solution(){  
    let answer="";
    let queue=[];
    queue.push(1);
    while(queue.length){
        console.log(queue);
        let v=queue.shift();
        answer+=v+" ";
        for(let nv of [v*2, v*2+1]){ 
            if(nv>7) continue;
            queue.push(nv);
        }
    }
    return answer;
}

console.log(solution());