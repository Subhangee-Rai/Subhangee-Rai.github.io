// Function to toggle visibility of mobile navigation menu
function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
}

// Add event listener to toggle menu when clicking the menu icon
var menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', toggleMenu);
