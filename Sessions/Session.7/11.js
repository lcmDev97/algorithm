//이진 탐색(Binary Search)
function count(songs, capacity){
    let cnt=1, sum=0;
    for(let x of songs){
        if(sum+x > capacity){
            cnt++;
            sum=x;
        }
        else sum+=x;
    }
    return cnt;
}

function solution(m, songs){
    let answer;
    let lt=Math.max(...songs); //용량 범위: 9 <= answer <= 45
    let rt=songs.reduce((a, b)=>a+b, 0);
    while(lt<=rt){
        let mid=parseInt((lt+rt)/2);
        if(count(songs, mid)<=m){
            answer=mid;
            rt=mid-1;
        }
        else{
            lt=mid+1;
        }
    } 
    return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));


// function test(m, songs){
//     let answer;
//     let lt = Math.max(...songs)
//     let rt = songs.reduce((a,b)=>a+b,0)
    
//     while(lt<=rt){
//         let mid = parseInt(lt+rt)
//         if
//     }
// }
// console.log(test(3,arr))