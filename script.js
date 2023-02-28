const openNav = document.querySelector('.open-nav')
const nav = document.querySelector('.nav')

document.querySelector('.open-nav').addEventListener('click', () => {
    if (nav.style.width < 200 + 'px') {
        nav.style.width = 200 + 'px'
        openNav.style.left = 200 + 'px'
    } else {
        nav.style.width = 0 + 'px'
        openNav.style.left = 0 + 'px'
    }
    }
)

const sliderLine = document.querySelector('.slider-line')
let offset = 0;

document.querySelector('.but1').addEventListener('click', () => {
    if (offset = !0) {
        offset = 0
    }
    sliderLine.style.left = 0 + 'px'
})

document.querySelector('.but2').addEventListener('click', () => {
    if (offset == 0) {
        offset = -1000;
    }
    sliderLine.style.left = offset + 'px'
    if (offset == -2000) {
        offset = -1000;
    }
    sliderLine.style.left = offset + 'px'
    if (offset == -3000) {
        offset = -1000;
    }
    sliderLine.style.left = offset + 'px'
})

document.querySelector('.but3').addEventListener('click', () => {
    if (offset == -1000) {
        offset = -2000;
    }
    sliderLine.style.left = offset + 'px'
    if (offset == -3000) {
        offset = -2000;
    }
    sliderLine.style.left = offset + 'px'
    if (offset == -0) {
        offset = -2000;
    }
    sliderLine.style.left = offset + 'px'
    
})

document.querySelector('.but4').addEventListener('click', () => {
    if (offset == 0) {
        offset = -3000;
    }
    sliderLine.style.left = offset + 'px'
    if (offset == -1000) {
        offset = -3000;
    }
    sliderLine.style.left = offset + 'px'
    if (offset == -2000) {
        offset = -3000;
    }
    sliderLine.style.left = offset + 'px'
})
