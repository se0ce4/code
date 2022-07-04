// function add(a,b,c){
//     a = a||0;
//     b = b||0;
//     c = c||0;
//     return a+b+c;
// }

function add(a=0,b=0,c=0){ 
    // 초깃값을 먼저 선언해주면 undefined 막을 수 있음~
    return a+b+c;
}

console.log(add(1,2,3));
console.log(add(1,2));
console.log(add(1));
console.log(add());

// 형식 매개변수