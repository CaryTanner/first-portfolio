let hamburgerBtn = document.querySelector('.menu-button')


hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.parentNode.classList.toggle('hide')
})
    
let buttonAnimation = document.querySelector('#nav-burger')

buttonAnimation.addEventListener('click', () => {
    buttonAnimation.classList.toggle('open')
})