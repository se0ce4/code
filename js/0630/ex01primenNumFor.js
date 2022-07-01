// 임의 두 수를 입력 받아
// 작은 수에서 큰 수 사이에 존재하는
// 소수를 구해서 출력하는
// 프로그램을 작성하시오

// 1. 두 수를 입력 받기
let num1 = Number(prompt("첫번째 숫자를 입력하세요."));
let num2 = Number(prompt("두번째 숫자를 입력하세요."));

// 2. 두 수 사이에 존재하는 소수 구하기
let min,max;
if (num1 > num2) {
    max = num1;
    min = num2;
} else if(num1 < num2){
    max = num2;
    min = num1;
}
let arr = [];
let cnt = 0;
for(let i=min; i<max+1; i++){
    for(let j=2; j<max; j++){
        if(i%j == 0){
            cnt++;
        }
    }
    if(cnt == 1){
        console.log(i);
        arr.push(i);
    }
    cnt = 0;
}
console.log("소수의 개수",arr.length);