const encrement=document.querySelector('#encrement')
const resetbutton= document.querySelector('#reset')
const h1=document.querySelector('h1')
const decrement=document.querySelector('#decre')

let startvalue=0;
 let endvalue=0

encrement.addEventListener('click',function(){
    startvalue++;
h1.innerHTML=startvalue
if(startvalue ==10){
    h1.style.color="red"
}
else{
    h1.style.color="black"
}
})
decrement.addEventListener('click',function(){
    // startvalue--;

    // h1.innerHTML=startvalue;
    // h1.innerHTML=-0;
if(startvalue > 0){
    startvalue--;
h1.innerHTML=startvalue;

}


})

resetbutton.addEventListener('click',function(){
     startvalue--;
h1.innerHTML=startvalue
 h1.innerHTML=0
})

