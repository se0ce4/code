function changeVal(primative, obj){
    primative += 100;
    obj.name = 'Kim';
}

var num = 100;
var person = {name:'Lee'};

console.log(num);
console.log(num, person);

changeVal(num, person);
console.log(num);
console.log(person);