//이진트리순회(DFS: 깊이우선탐색)
//! 스택프레임 직접 그리는거 연습해보기

                        //       1
                        //    2      3
                        //  4   5  6   7

// 1)전위순회              2)중위순회             3)후위순회
// console.log(v)          DFS(v*2);              DFS(v*2);
// DFS(v*2);               console.log(v)         DFS(v*2+1);         
// DFS(v*2+1);             DFS(v*2+1);            console.log(v) 
// 1245367                  4251637                 4526731


function solution(n){
    let answer="";
    function DFS(v){
        if(v>7) return;
        else{
            answer+=(v+' ');
            DFS(v*2);
            DFS(v*2+1);
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));

function test(n){
    function DFS(v){
        if(v>7) return;
        else{
            DFS(v*2);
            DFS(v*2+1);
            console.log(v)
        }
    }
    DFS(n);
    return;
}

console.log(test(1));