let inputNum = () => {
    let num1,num2;
    num1 = Number(prompt("첫번째 숫자를 입력하세요."));
    num2 = Number(prompt("두번째 숫자를 입력하세요."));
    return {num1Key:num1,num2Key:num2};
};

let compareNum = (num1,num2) => {
    let min,max;
    if (num1 > num2) {
        max = num1;
        min = num2;
    } else if(num1 < num2){
        max = num2;
        min = num1;
    }
    return {minKey:min,maxKey:max};
};
let totalCnt = (min,max) => {
    let arr = [];
    let cnt = 0;
    let i,j;
    for(i=min; i<max+1; i++){
        for(j=2; j<=max; j++){
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
    let cntNum = arr.length;
    return {cntKey:cntNum};
};
let printCnt = (cntNum)=> console.log("소수의 개수", cntNum);
let primeNum = () => {
    let num = inputNum();
    let minmax = compareNum(num.num1Key,num.num2Key);
    let printCntNum = totalCnt(minmax.minKey,minmax.maxKey);

    printCnt(printCntNum.cntKey);
};
primeNum();