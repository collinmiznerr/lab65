const photos = document.querySelectorAll('.photo');

ScrollReveal().reveal(photos[0], {
    distance: '50px',
    origin: 'bottom',
    duratiom: 800,
    delay: 100,
    easing: 'ease-out',
    rotate: {
        x: 30,
        z: 30
    }
});

ScrollReveal().reveal(photos[1], {
    distance: '85px',
    origin: 'left',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
})

ScrollReveal().reveal(photos[2], {
  distance: '40px',
  origin: 'right',
  duration: 700,
  delay: 150,
  rotate: { x: 0, y: 20, z: 0 }
});


