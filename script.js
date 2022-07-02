const hamburgerBtn = document.querySelector('.hamburger-img');
const navbarLinks = document.querySelector('.navbar-links')

hamburgerBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
    hamburgerBtn.classList.toggle('active')
    if (hamburgerBtn.classList.contains('active')){
        hamburgerBtn.src = '/project-tracking-intro-component-master/images/icon-close.svg'
    }else{
        hamburgerBtn.src = '/project-tracking-intro-component-master/images/icon-hamburger.svg'

    }

})