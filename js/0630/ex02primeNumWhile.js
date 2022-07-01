let num1 = Number(prompt("첫번째 숫자를 입력하세요."));
let num2 = Number(prompt("두번째 숫자를 입력하세요."));

let min,max;
if (num1 > num2) {
    max = num1;
    min = num2;
} else if(num1 < num2){
    max = num2;
    min = num1;
}

let arr = [];
let i,j,cnt = 0;

i = min;
j = 2;

while(i<=max){
    while(j<=max){
        if(i%j == 0){
            cnt++;
        }
        j++;
        console.log(`i:${i},j:${j},cnt:${cnt}`);
        // if(cnt==1){
        //     console.log(i);
        //     arr.push(i);
        // }
        // cnt=0;
    }
    i++;
}

// for(let i=min; i<max+1; i++){
//     for(let j=2; j<max; j++){
//         if(i%j == 0){
//             cnt++;
//         }
//     }
//     if(cnt == 1){
//         console.log(i);
//         arr.push(i);
//     }
//     cnt = 0;
// }
console.log("소수의 개수",arr.length);