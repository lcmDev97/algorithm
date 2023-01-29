//2번문제 인접행렬이 아닌, 인접리스트 이용한 풀이.
//정점 갯수가 많을 떄 적용

function test(n, arr){
    let answer = 0
    let ch = Array.from({length: n+1}, ()=>0)
    let path = []
    let graph = Array.from({length: n+1}, ()=>Array())
    for(let [a, b] of arr){
        graph[a].push(b)
    }
    function DFS(v){
        if(v === n){
            answer++
            console.log(path)
        }else{
            for(let i = 0; i < graph[v].length; i++){
                if(ch[graph[v][i]] === 0){
                    ch[graph[v][i]] = 1
                    path.push(graph[v][i])
                    DFS(graph[v][i])
                    ch[graph[v][i]] = 0
                    path.pop()
                }
            }
        }
    }
    ch[1] = 1
    path.push(1)
    DFS(1)
    return answer
}



function solution(n, arr){  
    let answer=0;
    let ch=Array.from({length:n+1}, ()=>0);
    let path=[]
    let graph=Array.from(Array(n+1), ()=>Array()); //인접 리스트 만드는 방법
    for(let [a, b] of arr){ //인접 리스트 만드는 방법
        graph[a].push(b);
    }
    function DFS(v){
        if(v===n){
            answer++;
            console.log(path);
        }
        else{
            for(let i = 0; i < graph[v].length; i++){
                if(ch[graph[v][i]] === 0){ // graph[v][i]는 v를 의미함.
                    ch[graph[v][i]] = 1
                    path.push(graph[v][i])
                    DFS(graph[v][i])
                    ch[graph[v][i]] = 0
                    path.pop()
                }
            }
        }
    }
    ch[1]=1;
    path.push(1);
    DFS(1);
    return answer;
}

//코드 아래와 같이 정리할 수 있음.
// function solution(n, arr){  
//     let answer=0;
//     let graph=Array.from(Array(n+1), ()=>Array());
//     let ch=Array.from({length:n+1}, ()=>0);
//     let path=[]
//     for(let [a, b] of arr){ //인접 리스트 만드는 방법
//         graph[a].push(b);
//     }
//     function DFS(v){
//         if(v===n){
//             answer++;
//             console.log(path);
//         }
//         else{
//             for(let nv of graph[v]){
//                 if(ch[nv]===0){
//                     path.push(nv);
//                     ch[nv]=1;
//                     DFS(nv);
//                     ch[nv]=0;
//                     path.pop();
//                 }
//             }
//         }
//     }
//     ch[1]=1;
//     path.push(1);
//     DFS(1);
//     return answer;
// }

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
// console.log(solution(5, arr));
console.log(test(5, arr))