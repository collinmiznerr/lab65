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
    easing: 'ease-in-out'
})

ScrollReveal().reveal(photos[2], {
  distance: '45px',
  origin: 'right',
  duration: 800,
  delay: 150,
  rotate: { x: 0, y: 20, z: 0 }
});

ScrollReveal().reveal(photos[3], {
    distance: '100px',
    origin: 'top',
    duration: 1200,
    delay: 230,
    scale: 0.55
});

ScrollReveal().reveal(photos[4], {
  distance: '60px',
  origin: 'bottom',
  duration: 900,
  delay: 500,
  opacity: 0
});

