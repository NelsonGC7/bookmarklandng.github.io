const landing = {
    burger: document.getElementById('burger'),
    nav :document.getElementById('navID'),
    logo:document.querySelector('.logo_nav'),
    slide:document.querySelectorAll('.Tremnu__contain--nav p'),
    containSlide: document.querySelectorAll('.Tremnu__contain--slides div'),
    social: document.querySelector('.foter div'),
    questions: document.querySelectorAll('.questions figure'),
    
}


console.log(landing.questions)
landing.questions.forEach(preg =>{

    preg.addEventListener('click',(e)=>{
        if(e.target.localName == 'h4' || e.target.localName == 'img' ){
            if(preg.children[1].getAttribute('src') === './images/icon-arrow.svg'){
                preg.children[1].src = './images/icon-arrowClose.svg';
                preg.nextElementSibling.classList.remove('deactive')
                
                
                
            }else{
                preg.children[1].src = './images/icon-arrow.svg';
                preg.nextElementSibling.classList.add('deactive')
            };
    
            
        };
    });
});

    

const [con1 ,con2,con3] = landing.containSlide;
const [uno ,dos ,tres] = landing.slide;

const clickSlide = ()=>{

    landing.slide.forEach(txt=>{
    
        txt.addEventListener('click',(e)=>{
        
            landing.slide.forEach(txt =>{
                if(txt.className !== ''){
                    txt.className = '';
                };  
                
            });
            
            txt.className = 'act';
                let click = `${e.originalTarget.innerHTML}`;
                console.log(click)
           
           
                switch (click){
                    case uno.innerHTML:
                        con2.classList.add('deactive')
                        con3.classList.add('deactive')
                        con1.classList.remove('deactive')
                        break;
                    case dos.innerHTML:
                        con1.classList.add('deactive')
                        con3.classList.add('deactive')
                        con2.classList.toggle('deactive')
                        break;
                    case tres.innerHTML:
                        con1.classList.add('deactive')
                        con2.classList.add('deactive')
                        con3.classList.toggle('deactive')
                        break;
                }
        });
    });


}

const clickMenu = ()=>{
    landing.burger.addEventListener('click',()=>{
        landing.nav.classList.toggle('deactive')
        if(landing.burger.getAttribute('src') == './images/icon-hamburger.svg'){
            landing.burger.src =  './images/icon-close.svg';
            document.querySelector('body').style.overflow = 'hidden';
            landing.logo.id = "logo";
            landing.social.style.position = 'fixed';
            landing.social.style.bottom = '100px' ;   
        }
        else{
            landing.burger.src = './images/icon-hamburger.svg'
            document.querySelector('body').style.overflow = 'scroll'; 
            landing.logo.id = ' '
            landing.social.style.position = 'static';
            
            
        }   
        
    })
    

}
clickMenu()
clickSlide()

