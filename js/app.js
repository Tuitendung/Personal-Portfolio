let mdDetect = new MobileDetect(window.navigator.userAgent);

let splash=document.querySelector('.intro');
let hello=document.querySelector('.hello');
let dung=document.querySelector('.name')
let cursor = $('.cursor');
let cursorFollow = $('.cursorFollow');
let title= $('.banner-text-one');
let title1= $('.banner-text-two');
let body=$('body');

let logo= $('.logo');
let info= $('.info');




window.addEventListener('DOMContentLoaded',()=>{
    
    cursorFollow.removeClass('cursorFollow')

    setTimeout(()=>{
        hello.classList.add('active')
    },1000);

    setTimeout(()=>{
        hello.classList.remove('active')
        hello.classList.add('fade')
    },2000);
    
    setTimeout(()=>{
        dung.classList.add('active')
    },3000);

    setTimeout(()=>{
        dung.classList.remove('active')
        dung.classList.add('fade')
    },4000);

    setTimeout(()=>{
        splash.classList.add('display-none')
        if (mdDetect.phone() == null && mdDetect.tablet() == null) {
            cursorFollow.addClass('cursorFollow')
            cursor.addClass('cursor')

        }
        else{
            cursorFollow.removeClass('cursorFollow')
            cursor.removeClass('cursor')
        }

        



    },5000);


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
    
    title.on('mouseenter',function(){
        cursorFollow.addClass('active')
    })
    
    
    title.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })
    title1.on('mouseenter',function(){
        cursorFollow.addClass('active')
    })
    
    
    title1.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })
    
    logo.on('mouseenter',function(){
        cursorFollow.addClass('active')
    })
    
    
    logo.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })
    
    info.on('mouseenter',function(){
        cursorFollow.addClass('active')
    })
    
    
    info.on('mouseleave',function(){
        cursorFollow.removeClass('active')
    })
})


