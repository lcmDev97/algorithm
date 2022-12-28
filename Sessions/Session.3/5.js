function solution(s){
    let answer="";
    let cnt=1;
    s=s+" "; //마지막 문자를 비교하기 위해 빈 문자열 넣어준거
    for(let i=0; i<s.length-1; i++){
        if(s[i]===s[i+1]) cnt++;
        else{
            answer+=s[i];
            if(cnt>1) answer+=String(cnt);
            cnt=1;
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));