const bton2 = document.getElementById('bton2');
const bton1 = bton2.previousElementSibling;
var darkBlue = 'hsl(229, 31%, 21%)';
var whiteocean = 'hsl(231, 69%, 60%)';

bton2.addEventListener('mouseenter',()=>{
    bton2.style.backgroundColor = whiteocean;
    bton2.style.color = '#f0f0f0';
    bton1.style.backgroundColor = '#f0f0f0'
    bton1.style.color = darkBlue;
})
bton2.addEventListener('mouseleave',()=>{
    bton2.style.backgroundColor = '';
    bton2.style.color = '';
    bton1.style.backgroundColor = ''
    bton1.style.color = ''
 })


const EventWindow = ()=>{
    var  width = window.innerWidth;
 if(width >=1024){
    
 
 
 }
    


}