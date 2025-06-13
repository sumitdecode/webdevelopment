// console.log("Hello I am a conditional statement") 
// alert("Hello World")

// // var a = 5;
// var b = 6;  
// console.log(a+b);
// console.log(typeof a, typeof b);


// let age = 15;
// if(age>18){
//     console.log("You can drive");
// }
// else if(age==18){
//     console.log("You can drive");
// }
// else{
//     console.log("You can't drive");
// }
let a = 5;
let b = 6;  

let c=a+b?(a-b):(a+b);  
console.log(typeof c);

for(let i=0;i<5;i++){
    console.log(i);
}



i=8;
while(i<10){
    console.log(i);
    i++;
}

function add(a,b){
    return a+b;
}   
console.log(add(5,6));
function mul(a,b){
    return a*b;
}   
console.log(mul(5,6));      