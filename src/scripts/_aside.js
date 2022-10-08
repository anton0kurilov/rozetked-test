const asideElement = document.querySelector('.aside');
const overlayElement = document.querySelector('.overlay');
const showAside = document.querySelector('#showAside');
const hideAside = document.querySelector('#hideAside');

showAside.addEventListener('click', function(){
    asideElement.style.right = '0px';
    overlayElement.style.display = 'block';
})

hideAside.addEventListener('click', function() {
    asideElement.style.right = '-320px';
    overlayElement.style.display = 'none';
})