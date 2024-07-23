var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Toggle icon navbar
var newMenu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

newMenu.onclick = () => {
    newMenu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
var sections = document.querySelectorAll('section');
var navlinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon & navbar
    newMenu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Typed JS
const typed = new Typed('.multiple-text', {
    strings: [' Python Developer ', ' Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// Remove Message

const messageElement = document.getElementById('message');
if (messageElement) {
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 5000);
}
