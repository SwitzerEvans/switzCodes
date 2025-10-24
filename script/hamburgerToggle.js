
// hamburger menu toggle

function hamburgerMenu() {
    const hamburgerIcon = document.querySelector('.hamburg_icon');
    const closeHamburger = document.getElementById('close-hamurger');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerIcon.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('hamburger-menu-active');
        document.body.classList.add('body-pause');
    });

    closeHamburger.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('hamburger-menu-active');
        document.body.classList.remove('body-pause');
    });
}

hamburgerMenu();