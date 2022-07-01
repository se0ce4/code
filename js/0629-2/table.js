// 학번, 이름, 국어점수, 영어점수, 수학점수를 입력받아
// 총점 및 평균, 등급을 구해서 표로 출력하기

let stNum = prompt("학번을 입력하세요.");
let stName = prompt("이름을 입력하세요.");

let kor = Number(prompt("국어점수를 입력하세요."));
let eng = Number(prompt("영어점수를 입력하세요."));
let math = Number(prompt("수학점수를 입력하세요."));

let tot = kor+eng+math;
let avg = (tot/3).toFixed(2);
let lev = 0;

if(avg>=90){
    lev = 'A';
} else if (avg>=80){
    lev = 'B';
} else if (avg>=70){
    lev = 'C';
} else if (avg>=60){
    lev = 'D';
} else {
    lev = 'F';
}

document.write(`
<table border='1'>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
    </tr>
        <td>${stNum}</td>
        <td>${stName}</td>
        <td>${kor}</td>
        <td>${eng}</td>
        <td>${math}</td>
        <td>${tot}</td>
        <td>${avg}</td>
        <td>${lev}</td>
    <tr>
    </tr>
</table>
`);
