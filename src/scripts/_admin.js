const darkModeStatus = localStorage.getItem('darkMode');
const body = document.body;
if (darkModeStatus == 'true') {
    body.classList.add('dark');
}

const switchMode = document.querySelector('#switchMode');
switchMode.addEventListener('click', function() {
    if (body.classList.contains('dark') === false) {
        body.classList.add('dark');
        localStorage.setItem('darkMode', true);
    } else {
        body.classList.remove('dark');
        localStorage.removeItem('darkMode');
    }
})

const showPalette = document.querySelector('#showPalette');
showPalette.addEventListener('click', function() {
    const paletteBody = document.getElementsByClassName('admin__palette');
    if (paletteBody[0].style.display == 'flex') {
        paletteBody[0].style.display = 'none';
    } else {
        paletteBody[0].style.display = 'flex';
    }
})

const yellowPalette = document.querySelector('.admin__palette-yellow');
const redPalette = document.querySelector('.admin__palette-red');
const greenPalette = document.querySelector('.admin__palette-green');

yellowPalette.addEventListener('click', function() {
    body.classList.add('yellow');
    body.classList.remove('red');
    body.classList.remove('green');
})

redPalette.addEventListener('click', function() {
    body.classList.add('red');
    body.classList.remove('yellow');
    body.classList.remove('green');
})

greenPalette.addEventListener('click', function() {
    body.classList.add('green');
    body.classList.remove('red');
    body.classList.remove('yellow');
})