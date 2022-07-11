console.log("밖");
let input, result, i;
let sum = 0;
while (true) {
    console.log("안1");
    input = prompt("주민번호 입력");
    for (i = 0; i < input.length - 1; i++) {
        if (i <= 7) {
            console.log(i + " : " + input[i]);
            sum += parseInt(input[i]) * (i + 2);
        } else {
            console.log(i + " : " + input[i]);
            sum += parseInt(input[i]) * (i - 6);
        }
    }
    console.log(typeof input);
    console.log(typeof sum);
    console.log("안2");
    console.log(sum);
    result = sum % 11;
    if (result >= 10) {
        result = 11 - result;
    }
    console.log(result);
    console.log("안3");
    console.log(input[12]);
    if (input.length == 13) {
        break;
    }
    alert("13자리로 입력해주세요");
}