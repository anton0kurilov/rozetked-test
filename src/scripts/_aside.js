const asideElement = document.getElementsByClassName('aside');
const overlayElement = document.getElementById('overlay');

function showAside() {
    asideElement[0].style.right = '0px';
    overlayElement.style.display = 'block';
}

function hideAside() {
    asideElement[0].style.right = '-320px';
    overlayElement.style.display = 'none';
}