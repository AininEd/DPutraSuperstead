const links = document.querySelectorAll('.linknavbar');
const box2 = document.querySelector('.box2');

links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'clicked' class from all links
        links.forEach(l => l.classList.remove('clicked'));
        // Add the 'clicked' class to the clicked link
        link.classList.add('clicked');
        
        // Change the background color of box2 to match the clicked link
        box2.style.backgroundColor = 'darkpink';
    });
});
