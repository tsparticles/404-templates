        // Get the toggle button
        const toggleButton = document.querySelector('.toggle-button');

        // Add an event listener to the button
        toggleButton.addEventListener('click', function() {
        // Get the current mode
        const currentMode = document.body.classList.contains('dark-mode');

        // Toggle the mode
        if (currentMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
        });
        
        const toggleButtonElement = document.querySelector('.toggle-button');

        toggleButtonElement.addEventListener('click', function() {
  const particles = document.querySelectorAll('.particles');

  for (const particle of particles) {
    particle.style.color = particle.classList.contains('dark-mode') ? '#ffffff' : '#000000';
  }
});


particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 400, // Increase the number of particles
                    "density": {
                        "enable": true,
                        "value_area": 1000 // Increase the value to make particles denser
                    }
                },
                "color": {
                    "value": "#333" // Dark particle color
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.9, // Increase particle opacity
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5, // Increase particle size to make them bold
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#333", // Dark particle color
                    "opacity": 0.7, // Increase link opacity
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2, // Slower particle movement
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 150,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 150,
                        "size": 20, // Larger bubble size
                        "duration": 2,
                        "opacity": 0.7, // Increase bubble opacity
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
