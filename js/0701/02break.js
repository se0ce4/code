foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출
    console.log(2);
}
console.log('Done!');

outer : 
for (let i=0; i<3; i++){
    for (let j=0; j<3; j++) {
        // i+j ==3이면 outer라는 식별자가 붙은 레이블 for문을 탈출
        if (j === 1) 
        // break outer; // [1,1]까지 출력
        // break; // [1,1], [2,0]까지 출력
        continue; // [1,1], [2,0], [2,2]까지 출력
        // break - 블록문을 완전히 탈출
        // continue - 조건 건너띄고 진행
        // console.log("inner ["+i+", "+j+"]");
        console.log(`inner [${i}, ${j}]`);
    }
}
console.log('Done!');

