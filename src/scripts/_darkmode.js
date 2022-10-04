const darkModeStatus = localStorage.getItem('darkMode');
const body = document.body;
if (darkModeStatus == 'true') {
    body.classList.add('dark');
}

function darkMode() {
    if (body.className != 'dark') {
        body.classList.add('dark');
        localStorage.setItem('darkMode', true);
    } else {
        body.classList.remove('dark');
        localStorage.removeItem('darkMode');
    }
}