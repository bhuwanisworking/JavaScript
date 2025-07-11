let btn=document.querySelector("button")
let div=document.querySelector("#div1")
let count=Math.random();
btn.addEventListener("click",function(){
    let p=document.createElement("p")
    p.innerText=`lorem ${count}`;
    div.appendChild(p);
    
})
let speed=0;
let intervalid=setInterval(function(){
    speed++;
    console.log(speed)
    if(speed==30){
        clearInterval(intervalid)
    }

},1000)