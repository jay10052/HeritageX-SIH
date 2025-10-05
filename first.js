document.addEventListener('DOMContentLoaded', () => {
    
    //Mobile Navigation Toggle Logic
    const hamburger = document.getElementById('hamburger');
    const navlinks = document.getElementById('navLinks'); 

    if (hamburger && navlinks) {
        hamburger.onclick = () => {
            navlinks.classList.toggle('active');
        };
    }

    //Active Link Highlighting Logic
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        link.classList.remove('active');
        if (linkHref === 'index.html' && (currentPath === 'index.html' || currentPath === '')) {
            link.classList.add('active');
        } 
        else if (linkHref === currentPath && currentPath !== '') {
            link.classList.add('active');
        }
    });
    
    //AOS Initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true });
    }

    //'Get Started' Button Smooth Scroll 
    const getStartedBtn = document.querySelector('.hero .btn');

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', (event) => {
            event.preventDefault(); 
            const targetSection = document.querySelector('main'); 
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    }
    const discoverCards = document.querySelectorAll('.content .card');

    discoverCards.forEach(card => {
        card.addEventListener('click', () => {
            let redirectURL = '';
            switch (card.id) {
                case 'place':
                    redirectURL = 'explore.html#sites';
                    break;
                case 'culture':
                    redirectURL = 'explore.html#dances';
                    break;
                case 'event':
                    redirectURL = 'explore.html#events';
                    break;
                case 'game':
                    redirectURL = 'quiz.html';
                    break;
                default:
                    redirectURL = 'index.html'; 
            }
            
            if (redirectURL) {
                window.location.href = redirectURL;
            }
        });
    });
    const topPicksPhotos = document.querySelectorAll('.pics .photo');

    topPicksPhotos.forEach(photo => {
        photo.addEventListener('click', () => {
            let redirectURL = '';
            const classList = photo.className;
            if (classList.includes('amer')) {
                redirectURL = 'explore.html?site=amer-fort';
            } else if (classList.includes('ladakh')) {
                redirectURL = 'explore.html?site=hemis-festival';
            } else if (classList.includes('taj')) {
                redirectURL = 'explore.html?site=taj-mahal';
            } else if (classList.includes('katra')) {
                redirectURL = 'explore.html?site=vaishno-devi';
            } else if (classList.includes('sikkim')) {
                redirectURL = 'explore.html?site=sikkim';
            } else if (classList.includes('kedarnath')) {
                redirectURL = 'explore.html?site=kedarnath';
            }
            
            if (redirectURL) {
                window.location.href = redirectURL;
            }
        });
    });
});