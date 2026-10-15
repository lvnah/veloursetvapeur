const header = document.getElementById('main-header');
const logo = document.getElementById('header-logo'); // On cible le logo

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
    } else {
        header.classList.add('shadow-sm');
        header.classList.remove('shadow-md');
    }
});