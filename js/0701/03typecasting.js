let num = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
let str = num.toString();
console.log(typeof str, str); // string 10

// num 변수의 값이 변경된 것은 아니다.
console.log(typeof num, num); // number 10

let num2 = 10 + '20';
console.log(typeof num2, num2); // string 1020

console.log(`1+1=${1+1}`); // ${} -> 표현식

console.log(1+'1'); // 11
console.log(1-'1'); // 0
console.log(2*'10'); // 20
console.log(1/'one'); // NaN