//삽입정렬 응용
function solution(size, arr){
    let answer=Array.from({length:size}, ()=>0);
    arr.forEach(x => {
        let pos=-1;
        for(let i=0; i<size; i++) if(x===answer[i]) pos=i;
        if(pos===-1){ //case.1) Cache Miss
            for(let i=size-1; i>=1; i--){
                answer[i]=answer[i-1];
            }
        }
        else{ //case.2) Cache Hit
            for(let i=pos; i>=1; i--){
                answer[i]=answer[i-1];
            }
        } 
        answer[0]=x;  
    });
    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));

//삽입정렬+내장함수(shift, unshift, pop) 사용
function test(size, arr){
    let cache = Array.from({length: size}, ()=>0)
    for(let i = 0; i < arr.length; i++){
        if(!cache.includes(arr[i])){
            cache.pop()
            cache.unshift(arr[i])
        }else{
            let index = cache.indexOf(arr[i])
            for(let j = index; j > 0; j--){
                cache[j] = cache[j-1]
            }
            cache.shift()
            cache.unshift(arr[i])
        }
    }
    return cache
}

console.log(test(5,arr))