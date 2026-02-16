const photos = document.querySelectorAll('.photo');

ScrollReveal().reveal(photos[0], {
    distance: '50px',
    origin: 'bottom',
    duratiom: 800,
    delay: 100,
    easing: 'ease-out',
    rotate: {
        x: 20,
        z: 20
    }
});

