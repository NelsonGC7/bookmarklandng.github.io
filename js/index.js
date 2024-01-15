const landing = {
    burger: document.getElementById('burger'),
    nav :document.getElementById('navID'),
    logo:document.querySelector('.logo_nav'),
    
    
}
console.log(landing.logo)


landing.burger.addEventListener('click',()=>{
    landing.nav.classList.toggle('deactive')
    if(landing.burger.getAttribute('src') == './images/icon-hamburger.svg'){
        landing.burger.src =  './images/icon-close.svg'
        console.log('SI ')
        console.log(landing.burger.src)
        document.querySelector('body').style.overflow = 'hidden';
        landing.logo.id = "logo";
    }
    else{
        landing.burger.src = './images/icon-hamburger.svg'
        document.querySelector('body').style.overflow = 'scroll'; 
        console.log('no')
        console.log(landing.burger.src)
        landing.logo.id = ' '
    }
    
    
    
    
    
   
    
    
    
})