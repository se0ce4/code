const tel = '010-1234-567팔';
const regExp = /^\d{3}-\d{4}-\d{4}$/;
console.log(regExp.test(tel));

const tel2 = '010-1234-5678';
const regExp2 = /^\d{3}-\d{4}-\d{4}$/;
console.log(regExp2.test(tel2));

const target = 'Is this all there is?';
const regExp3 = /is/i;
console.log(regExp3.test(target));
console.log(target.match(regExp3));