const solution = function(a,b,c,d,e,f,g){
    let array = [a,b,c,d,e,f,g]
    let oddArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 === 1){
            oddArray.push(array[i])
        }
    }
    console.log(oddArray.reduce((a,b)=>a+b,0))
    console.log(oddArray.sort((a,b)=>a-b)[0]) //5번에서 배운 Math.min응용하면 console.log(Math.min(...oddArray))
}

solution(12,77,38,41,53,92,85)

//답지 for of 구문 이용
// function solution(arr){
//     let answer=[];
//     let sum=0, min=1000;
//     for(let x of arr){
//         if(x%2===1){
//             sum+=x;
//             if(x<min) min=x;
//         }
//     }
//     answer.push(sum);
//     answer.push(min);     
//     return answer;
// }

// arr=[12, 77, 38, 41, 53, 92, 85];
// console.log(solution(arr));

oddArray.reduce((a,b)=> a+b, 0)
oddArray.sort((a,b)=>a-b)[0]