// console.log("Hello World");

// // 제어문
// var x = 1;
// if (x <10) {
//     x++;
//     console.log(x);
// }

// // 함수 선언문
// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(7,2));

// // 95page ex01
// var num = 2;
// var kind;
// if(num>0){
//     kind='양수';
// } else{
//     kind = '음수';
// }
// console.log(kind);

// var num = 85;
// var kind;
// if(num>=90){
//     kind = '수';
// } else if(num>=80){
//     kind = '우';
// } else if(num>=70){
//     kind = '미';
// } else if(num>=60){
//     kind = '양';
// } else {
//     kind = '가';
// }
// console.log(kind);

// 학번, 이름, 국어점수, 영어점수, 수학점수를 입력받아
// 총점 및 평균을 

let stuNum = prompt('학번을 입력하세요');
let stuName = prompt('이름을 입력하세요');

let korScore = Number(prompt('국어 점수를 입력하세요'));
let engScore = Number(prompt('영어 점수를 입력하세요'));
let mathScore = Number(prompt('수학 점수를 입력하세요'));

let sum = korScore + engScore + mathScore;
let avg = (sum/3).toFixed(2);
let level = "";

if(avg>=90){
    level="A";
} else if(avg>=80){
    level="B";
} else if(avg>=70){
    level="C";
} else if(avg>=60){
    level="D";
} else {
    level="F";
}

console.log(sum);
console.log(avg);

let table = '<table border="1"><tr><td>학번'+'</td><td>이름'+
            '</td><td>국어'+'</td><td>영어'+'</td><td>수학'+
            '</td><td>총점'+'</td><td>평균'+'</td><td>등급'+
            '</td></tr><tr><td>'+stuNum+'</td><td>'+stuName+
            '</td><td>'+korScore+'</td><td>'+engScore+'</td><td>'+mathScore+
            '</td><td>'+sum+'</td><td>'+avg+'</td><td>'+level+'</td></tr></table>'
document.write(table);