function inputNum() { // 4. 인풋넘 함수 호출
    var num1,num2;
    num1 = parseInt(prompt("첫번째 숫자 입력"));
    num2 = parseInt(prompt("두번째 숫자 입력"));
    return {num1Key:num1,num2Key:num2};
}

function compareNum(num1,num2) { // 6. 컴페어넘 함수 호출
    var min,max;
    if(num1<num2){
        min=num1;
        max=num2;
    } else{
        min=num2;
        max=num1;
    }
    return {minKey:min,maxKey:max};
}

function guguProc(min,max) { // 7. 구구프록 함수 호출
    var i,j;
    document.write("<table border='1' align='center'>");
    document.write("<tr align='center'>");
    for (i=min; i<=max; i++)
    {
        document.write("<th>" + i + "단" + "</th>");
    }
    document.write("</tr>");
    for (j=1; j<=9; j++)
    {
        document.write("<tr align='center'>");
        for (i=min; i<=max; i++)
        {
            document.write("<td>" + i + "*" + j + "=" + (i*j) + "</td>");	
        }
        document.write("</tr>")	;
    }  
    document.write("</table>");
}

function gugudan() { // 2. 구구단 함수 실행
    // var num1, num2, min, max;

    var num = inputNum(); // 3. 인풋넘으로 감

    // num1 = num.num1Key;
    // num2 = num.num2Key;

    // var minmax = compareNum(num1,num2);
    var minmax = compareNum(num.num1Key,num.num2Key); // 5. 컴페어넘으로 감

    // min = minmax.minKey;
    // max = minmax.maxKey;

    // guguProc(min,max);
    guguProc(minmax.minKey,minmax.maxKey); // 6. 구구프록으로 감

}

gugudan(); // 1. 구구단을 호출