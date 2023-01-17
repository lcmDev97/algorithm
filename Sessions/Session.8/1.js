//재귀함수, 스택프레임
//1)재귀함수: 자기가 자신을 호출하는 함수

//2) 스택프레임
//console.log(L);   
//DFS(L-1);
//순서로 하면 3, 2, 1찍힘
//순서를 바꿔서 아래 처럼 코드 짜면 1, 2, 3찍힘 => 스택프레임떄문에

function solution(n){
    function DFS(L){
        if(L===0) return;
        else{
            DFS(L-1);
            console.log(L);   
        }
    }
    DFS(n);
}

solution(3);