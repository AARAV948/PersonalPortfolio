document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Logic ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple icon toggle (using Font Awesome classes)
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- Typing Animation Logic ---
    const typingEffectSpan = document.querySelector('.typing-effect');
    const words = ["B.Tech Student", "Cloud Enthusiast", "DevOps Practitioner"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Deleting characters
            typingEffectSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing characters
            typingEffectSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Switch to deleting when word is fully typed
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause at end of word
        } 
        // Switch to next word when fully deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Pause before typing new word
        } 
        // Continue typing/deleting
        else {
            const typingSpeed = isDeleting ? 100 : 200;
            setTimeout(type, typingSpeed);
        }
    }

    type(); // Start the animation

    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const myEmail = 'pandeyaarav201205@gmail.com';

        // Encode the subject and body for the mailto link
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(message);

        // Create the mailto link
        const mailtoLink = `mailto:${myEmail}?subject=${encodedSubject}&body=${encodedBody}`;

        // Open the user's default email client
        window.location.href = mailtoLink;
    });
});

