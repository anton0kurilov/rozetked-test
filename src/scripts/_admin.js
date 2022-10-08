const darkModeStatus = localStorage.getItem('darkMode');
const paletteStatus = localStorage.getItem('palette');
const body = document.body;
if (darkModeStatus == 'true') {
    body.classList.add('dark');
}
if (paletteStatus) {
    body.classList.add(paletteStatus);
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
    localStorage.setItem('palette', 'yellow');
})

redPalette.addEventListener('click', function() {
    body.classList.add('red');
    body.classList.remove('yellow');
    body.classList.remove('green');
    localStorage.setItem('palette', 'red');
})

greenPalette.addEventListener('click', function() {
    body.classList.add('green');
    body.classList.remove('red');
    body.classList.remove('yellow');
    localStorage.setItem('palette', 'green');
})