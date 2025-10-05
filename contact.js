document.addEventListener('DOMContentLoaded', () => {
    // Navbar & AOS Initialization Logic
    const hamburger = document.getElementById('hamburger');
    const navlinks = document.getElementById('navLinks');

    if (hamburger && navlinks) {
        hamburger.onclick = () => {
            navlinks.classList.toggle('active');
        };
    }

    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true });
    }

    //Contact Form Validation Logic
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;

            // Simple validation check function
            const validateField = (field, errorMessage) => {
                if (field.value.trim() === '') {
                    alert(`${field.name} field is empty. ${errorMessage}`);
                    field.focus();
                    isValid = false;
                    return false;
                }
                return true;
            };

            // Email validation check
            const validateEmail = (field) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value.trim())) {
                    alert('Please enter a valid email address.');
                    field.focus();
                    isValid = false;
                    return false;
                }
                return true;
            };

            // Validation sequence
            if (!validateField(name, 'Please enter your full name.')) return;
            if (!validateField(email, 'Please enter your email address.')) return;
            if (!validateEmail(email)) return;
            if (!validateField(subject, 'Please specify the subject.')) return;
            if (!validateField(message, 'Please write your message.')) return;
            
            //SUCCESS
            if (isValid) {
                
                // Demo success message
                alert('Thank you for your message! We will get back to you shortly.');
                contactForm.reset(); 
            }
        });
    }
});