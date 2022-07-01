// 객체 리터럴
var person = {
    name : 'Lee',
    age : 30,
    sayHello : function() {
        console.log(`Hello My name is ${this.name}`);
        console.log(`Hello My name is ${this.age}`);
        console.log(`Hello My tel is ${this.tel}`);
        str = `<table border="1" align="center">`;
        str += `<tr><th>name</th><th>age</th><th>tel</th></tr>`
        str += `<tr><td>${this.name}</td><td>${this.age}</td><td>${this.tel}</td></tr>`
        str += `</table>`
        return document.write(str);
    }
    // sayHello() {
    //     var name = 'aaaa';
    //     console.log(`Hello My name is ${this.name}`);
    //     console.log(`Hello My age is ${this.age}`);
    //     // console.log(`Hello My name is ${name}`);
    // }
};

person.tel = "010-1234-5678";
console.log(person.tel);
console.log(person);
console.log(person.sayHello());

// console.log(typeof person);
// console.log(person);
// console.log(person.name);
// console.log(person['name']);
// console.log(person["name"]);
// console.log(person[`name`]);

var a = 10;
