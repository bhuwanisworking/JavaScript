let a=document.getElementById('p1')
console.log(a)
let b=document.createElement('p')
b.textContent="hello im new tag"
a.appendChild(b);
b.style.backgroundColor="red"
b.setAttribute('class',"para")