let num1 = Number(prompt("첫번째 숫자를 입력하세요."));
let num2 = Number(prompt("두번째 숫자를 입력하세요."));

let min,max;

if(num1<num2){
    min=num1;
    max=num2;
} else {
    min=num2;
    max=num1;
}
document.write(`<table border='1'>`);
document.write(`<tr>`)
for(i=min;i<max+1;i++){
    document.write(`<td>${i}단</td>`)
}
document.write(`</tr>`)

for(j=1; j<10; j++){
    document.write(`<tr>`)
    for(k=min; k<max+1; k++){
        document.write(`<td>${k}*${j}=${k*j}</td>`)
    }
    document.write(`</tr>`)
}
document.write(`</table>`)
