let em=document.querySelector("#inp1");
let pw=document.querySelector("#inp2");
let btn=document.querySelector("button")

console.log(em)
console.log(pw)
console.log(btn)
em.addEventListener('click',function(event){
    console.log(event.target.value)
})
pw.addEventListener('click',function(event){
    console.log(event.target.value)
})


