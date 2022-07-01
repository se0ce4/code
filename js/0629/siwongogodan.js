let num1 = parseInt(prompt("첫 번째 숫자를 입력하세요"));
let num2 = parseInt(prompt("두 번째 숫자를 입력하세요"));
let min, max;
if (num1 > num2) {
  min = num2;
  max = num1;
} else {
  min = num1;
  max = num2;
}

document.write("<table border ='1'>");
document.write("<tr>");
for (let i = min; i <= max; i++) {
  document.write(`<th>${i}단</th>`);
}
document.write("</tr>");

for (let k = 1; k <= 9; k++) {
  document.write("<tr>");
  for (let j = min; j <= max; j++) {
    document.write(`<td>${j}*${k}=${j * k}</td>`);
  }
  document.write("</tr>");
}
document.write("</table'>");