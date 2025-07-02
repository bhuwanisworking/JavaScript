function greet(){
    console.log("hello this is greet function")
}
greet();

let ans1=function(){
    console.log("the another function")
}
console.log(ans1())
let ans2=()=>{
    console.log("this is another function 3")
}
console.log(ans2())
// by default bhiuwan will be passed

function defaul(name="bhuwan"){
    console.log(`${name}`)
}
defaul()