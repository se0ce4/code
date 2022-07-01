var res, score;
score = 100;
res = score;
console.log(score);
console.log(res);
// var 아래에서 선언하고 위에서 사용 가능 -> 호이스팅
// var 재선언 O 재할당 O
// let 재선언 X 재할당 O
// const 재선언 X 재할당 X

var obj = {name:'lee', address:"서울"};
console.log(obj);
console.log(obj.name);
console.log(obj.address);
// 객체 형태
// 키 : 값

console.log(1===1.0);
console.log('1'===1.0);
console.log('1'==1.0);
// -- : 값만 비교
// === : 값, 타입 비교

var str2 = `aaa
aaaa`;
console.log(str2);
// ',"(quotation)이 아닌 `(backtick)로 문자열을 묶어주면
// 줄바꿈이 반영되어서 출력됨 ES2에서 등장

var str3 = "aaa\nbbb\nccc";
console.log(str3);
var str4 = "aaa\"bbb\"ccc";
console.log(str4);

var code = `<h2>Hello</h2>
<h3>World</he>`
document.write(code);
// backtick 사용하면 br 안써두 돼~

var first = "Ung-no";
var last = "lee";
// ES5 : 문자열 연결
console.log("My name is " + first + last + "."); // quotation
console.log(`My name is ${first} ${last}.`); // backtick

var key = Symbol('key');
console.log(typeof key);
console.log(key);

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log('mbc' + 'kbs');

var num2 = 10;
// num2 = num2 + 1
console.log(num2++); 
console.log(++num2); 
// num2 = 1 + num2
// num2 = num2 -1
console.log(num2--); 
console.log(--num2); 
// num2 = -1 + num2

console.log("dog"&&"cat");
console.log("dog");