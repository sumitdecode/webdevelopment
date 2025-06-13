alert("hello world")





let random = math.random()
console.log(random) 
let a = prompt("enter the first number")
let b = prompt("enter the second number")
let c = prompt("enter the third number")

let obj={
    "+": "-", 
    "*":"+",
    "-":"/",
    "/":"**"
}



if (random>0.1) { 
    console.log(`the result is ${a}${b}${c}`)
    alert(`the result is ${eval(`${a}${b}${c}`)}`)
}
else{
    c = obj[c] 
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}