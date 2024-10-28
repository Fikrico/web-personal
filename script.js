document.getElementById('toggle').addEventListener('change', function() {
    var socialButtons = document.getElementById('social-buttons');
    if (this.checked) {
        socialButtons.classList.add('show');
    } else {
        socialButtons.classList.remove('show');
    }
});
const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
