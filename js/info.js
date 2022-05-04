let cursor = $('.cursor');
let cursorFollow = $('.cursorFollow');
let mdDetect = new MobileDetect(window.navigator.userAgent);

let mail =$('.contact')
let slogan2 =$('.dev')
let slogan1=$('.slogan-one')
let logo= $('.logo');
let link= $('.index-link');
let splash=document.querySelector('.intro');

let dev = document.querySelectorAll('.dev path');

let img = document.querySelector('.background');








window.addEventListener('DOMContentLoaded',()=>{

    $(window).on('mousemove',function(e){
        console.log('mousemove');
        gsap.to(cursor, {
            x: e.clientX - (cursor.width() /2),
            y: e.clientY - (cursor.height() /2),
            duration: 0.2
        });
    
        gsap.to(cursorFollow, {
            x: e.clientX - (cursorFollow.width() /2),
            y: e.clientY - (cursorFollow.height() /2),
            duration: 0.4
        });
    
    
    
    })

    if (mdDetect.phone() == null && mdDetect.tablet() == null) {
        cursorFollow.addClass('cursorFollow')
        cursor.addClass('cursor')

    }
    else{
        cursorFollow.removeClass('cursorFollow')
        cursor.removeClass('cursor')
    }


    link.on('mouseenter',function(){
        cursorFollow.addClass('active')
    })
    
    
    link.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })
    
    logo.on('mouseenter',function(){
        cursorFollow.addClass('active')
    })
    
    
    logo.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })

    logo.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })
    mail.on('mouseenter',function(){
        cursorFollow.addClass('active')
    })
    mail.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })
    slogan1.on('mouseenter',function(){
        cursorFollow.addClass('active')
    })
    slogan1.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })
    slogan2.on('mouseenter',function(){
        cursorFollow.addClass('active')
    })
    slogan2.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })

    setTimeout(()=>{
    gsap.from('.background',{duration: 1,y:90,opacity:0});
    })

    setTimeout(()=>{
        gsap.from('.info',{duration: 1,y:90,opacity:0,delay:0.5});
    })

    setTimeout(()=>{
        gsap.from('.slogan-one',{duration: 1,y:90,opacity:0,delay:1});
    })
    gsap.from('.contact',{duration: 1,y:90,opacity:0,delay:0.5});

    
})