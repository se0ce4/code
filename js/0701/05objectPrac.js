var person = {
    hakbun:'',
    irum:'',
    kor:0,
    eng:0,
    math:0,
    tot:0,
    avg:0.0,
    grade:'',
    getTotal:function(){
        this.tot = this.kor+this.eng+this.math;
    },
    getAvg:function(){
        this.avg = (this.tot/3).toFixed(2);
    },
    getGrade:function(){
        switch (parseInt(this.avg/10)) {
            case 10:
            case 9:
                this.grade='수';
                break;
            case 8:
                this.grade='우';
                break;
            case 7:
                this.grade='미'; 
                break;
            case 6:
                this.grade='양';
                break;
            default:
                this.grade='가';
                break;
        }
    },
    printData:function(){
        str = `<table border="1" align="center">`;
        str += `<tr><th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>총점</th><th>평균</th><th>등급</th></tr>`
        str += `<tr><td>${this.hakbun}</td><td>${this.irum}</td><td>${this.kor}</td><td>${this.eng}</td><td>${this.math}</td><td>${this.tot}</td><td>${this.avg}</td><td>${this.grade}</td></tr>`
        str += `</table>`
        return document.write(str);
    }
}

person.hakbun = prompt("학번 입력");
person.irum = prompt("이름 입력");
person.kor = Number(prompt("국어 입력"));
person.eng = Number(prompt("영어 입력"));
person.math = Number(prompt("수학 입력"));
person.getTotal();
person.getAvg();
person.getGrade();
person.printData();
