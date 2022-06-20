const menu = document.querySelector('#mobile_menu');
const menulink = document.querySelector('.navbar_Menu');
const navlogo = document.querySelector('#logo');

// Mobile menu
menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active');
});

// Scroll

const highlight  = () =>{
    const element = document.querySelector('.highlight');
    const homemenu = document.querySelector('#home_page');
    const About = document.querySelector('#about_page');
    const service = document.querySelector('#service_page');
    
    let scrollposi = window.scrollY;
    console.log(scrollposi);

    if(window.innerWidth > 960 && scrollposi < 600){
        homemenu.classList.add('highlight');
        About.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollposi < 1400){
        About.classList.add('highlight');
        homemenu.classList.remove('highlight');
        service.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollposi < 2345){
        service.classList.add('highlight');
        About.classList.remove('highlight');
        homemenu.classList.remove('highlight');
        return;
    }
    if(element && window.innerWidth > 960 && scrollposi < 600 || element){
        element.classList.remove('highlight')
    }
}

window.addEventListener('scroll',highlight);
window.addEventListener('click',highlight);

const mobmenu = () =>{
    const menuactive = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuactive){
        menu.classList.toggle('is-active');
        menulink.classList.remove('active');
    }
}

menulink.addEventListener('click',mobmenu);
navlogo.addEventListener('click',mobmenu);