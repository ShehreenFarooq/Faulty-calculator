// faulty calculator
let random=Math.random()
console.log(random)
let a =prompt("enter 1st number")
let b=prompt("enter 2nd number")
let c=prompt("enter operation")
let obj ={
    "+":"-",
    "*":"+",
    "/":"*",
    "-":"",
}
if(random>0.1)
    {
      alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
      console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
    }
else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
 