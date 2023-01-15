/*이진 탐색(Binary Search)
1) //!반드시 "정렬"된 자료에만 사용해야함.
2) 이진 탐색 알고리즘의 시간복잡도가 O(logN)으로, 
시간복잡도가 O(N)인 순차 탐색(=선형검색, Linear Search)보다 더 빠름
3)lt, rt필요

시간복잡도 참고 자료 https://jwoop.tistory.com/9
*/

function solution(target, arr){
    let answer;
    arr.sort((a, b)=>a-b);
    let lt=0, rt=arr.length-1;
    while(lt<=rt){
        let mid=parseInt((lt+rt)/2);
        if(arr[mid]===target){
            answer=mid+1;
            break;
        }
        else if(arr[mid]>target) rt=mid-1;
        else lt=mid+1;
    }
    return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

function test(target, arr){
    let answer
    arr.sort((a,b)=>a-b)
    let lt = 0
    let rt = arr.length - 1
    while(lt <= rt){
        let mid = parseInt(lt + rt)
        if(arr[mid] === target){
            answer = mid + 1
            break
        } 
        else if(arr[mid] > target) rt = mid - 1
        else lt = mid + 1
    }
    return answer
}
console.log(test(32,arr))