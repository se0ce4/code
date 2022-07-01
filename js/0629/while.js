// var k = 0;
// for (var i=1; i<3; i++){
//     for(var j=1; j<4; j++){
//         console.log("i=",i,"j=",j,"k=",++k);
//     }
// }

var k = 0;
var i = 1;
var j = 1;

while(true){
    while(true){
        console.log("i=",i,"j=",j,"k=",++k);
        j++;
        if(j>4) break;
    }
    i++;
    if(i>3) break;
}
