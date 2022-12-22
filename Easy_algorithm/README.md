복습할거
10번(행렬)
12번(놀이공원 부족한 값)

25번(정수 제곱근 판별)
Number.isInteger(숫자) 숫자값이 정수인지 아닌지 불값으로 나온다
Math.sqrt(121) 121의 제곱근인 11이 리턴된다. 

26번(제일 작은 수 제거)
전개연산자(...arr)
Math.min을 배열에 사용할떄는 Math.min(...arr)

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
공부할거
21번(이상한 문자 만들기) - map.join
join 메소드는 배열의 모든 요소를 문자열로 합치는거다.
const arr = ['바람', '비', '물'];

console.log(arr.join());
// 바람,비,물
console.log(arr.join(''));
// 바람비물
console.log(arr.join('-'));
// 바람-비-물

22번- map =>아래 참고
23번(자연수 뒤집어 배열로 만들기)- map(item => +item)
24번 join에 대해서만 공부
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
arr.map 공부 내용

*니꼴라스썜의 map

let days = ['MON','TUE','WED','THU','FRI']
//map() 안에 함수들어감
//각각 배열안 요소들이 매개변수가 되어 함수에 적용되어 return 되는데
//return 값으로 이루어진 배열을 return함
let test = days.map(potato => console.log(potato)
//출력값
//MON
//TUE
//...
//이경우에는 함수의 return값이 undefined 이기 떄문에 test 배열은 아래와 같음
console.log(test) 
결과값 : [undefined,undefined,undefined,undefined,undefined]

let days = ['MON','TUE','WED','THU','FRI']
let smilingDays = days.map(potato => `^0^ ${potato}`)
console.log(smilingDays)
결과값 ['^0^ MON', '^0^ TUE', '^0^ WED', '^0^ THU', '^0^ FRI']


제로초님꺼
*map 
const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.map((v) => {
  if (v % 2) {
    return '홀수';
  }
  return '짝수';
});
result; // ['홀수', '짝수', '홀수']

*reduce 배열을 하나의 값으로 줄이기 떄문에 reduce

const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.reduce((acc,cur,i)=>{
    console.log(acc,cur,i)
    return acc+cur
}, 0 )

// 0 1 0
// 1 2 1
// 3 3 2
result  // 6

const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.reduce((acc,cur,i)=>{
    console.log(acc,cur,i)
    return acc+cur
}) //초기값 안적으면
// 1 2 1
// 3 3 2
result //6

