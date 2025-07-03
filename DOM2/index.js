let a=document.querySelector('p');
function changeColor(event){
    event.target.style.backgroundColor="red"
}
a.addEventListener('click',changeColor)
//a.removeEventListener('click',changeColor)  to Remove the Event Listener`