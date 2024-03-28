const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

let sections = document.querySelectorAll('section');
let popup = document.getElementById("popup");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}


function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}


function close() {
    mainMenu.style.top = '-100%';
}


function showPopUp() {
    popup.classList.add("open-popup");
}
function closePopUp() {
    popup.classList.remove("open-popup");
}