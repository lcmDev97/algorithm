// forEach, map, filter, reduce 전부 고차함수(=자신의 매개변수에 함수를 전달받는함수)
// a = [10, 11, 12, 13, 14 ,15]

function forEach(predicate, thisArg){ //predicate는 함수 의미

}

//forEach for대신 사용함정도만

//map 원본배열의 값이용해 return값 배열에 push하는 방식으로 새로운 배열만듬,
//원본 배열이랑 길이 같음(이유: return값 push하므로 조건에 맞지 않을떄는 undefined라도 푸쉬함)

//filter map처럼 원본배열 값이용해서 배열새로운 배열만드는데,차이는 꼭 원본배열이랑 길이
//같을 필요 없고, 원하는 원소만 return해서 생성해줌
//내장함수에는 true값만 새로운 배열에 push되게 
//새로운값 만들지 않고 조건에 일치하는 요소값만 배열에 push함

//reduce
