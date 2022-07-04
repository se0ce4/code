// function add(x,y){
//     return x+y;
// }

// console.log(add(2,5)); // 함수호출문

// var res = add(3,5);
// console.log(res);

var f = function (x,y){
    return x+y;
}; 
// 익명함수
// 함수 리터럴로 사용할 때 세미콜론 붙여주는 것이 원칙
// 함수 리터럴은 함수 이름 생략 가능~ 붙여도 됨~ㄴ

console.log(f(2,5)); // 함수호출문

var res = f(3,5);
console.log(res);