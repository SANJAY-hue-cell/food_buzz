document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const icon = document.getElementById("icon");
    let isMenuOpen = false;

    toggleButton.addEventListener("click", function() {
        if (isMenuOpen) {
            icon.src = "./assets/menu-icon.jpeg"; // Path to the menu icon
            icon.alt = "Menu";
        } else {
            icon.src = "./assets/close-icon.jpeg"; // Path to the close icon
            icon.alt = "Close";
        }
        isMenuOpen = !isMenuOpen;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const menuContainer = document.getElementById("menuContainer");

    toggleButton.addEventListener("click", function() {
        if (menuContainer.style.display === "none" || menuContainer.style.display === "") {
            menuContainer.style.display = "block";
        } else {
            menuContainer.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const menuContainer = document.getElementById('menuContainer');

    toggleButton.addEventListener('click', function () {
        // Toggle the 'show' class to open/close the menu
        menuContainer.classList.toggle('show');
        
        // Ensure the menu is within the screen boundaries
        const menuRect = menuContainer.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        if (menuRect.right > viewportWidth) {
            menuContainer.style.left = `${viewportWidth - menuRect.width}px`;
        } else if (menuRect.left < 0) {
            menuContainer.style.left = '0';
        }
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!menuContainer.contains(event.target) && !toggleButton.contains(event.target)) {
            menuContainer.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            // Toggle the active state
            this.classList.toggle("active");

            // Get the associated content panel
            const content = this.nextElementSibling;

            if (this.classList.contains("active")) {
                // Expand content
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.paddingTop = "10px";
                content.style.paddingBottom = "10px";
            } else {
                // Collapse content
                content.style.maxHeight = null;
                content.style.paddingTop = "0";
                content.style.paddingBottom = "0";
            }
        });
    });
});




let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Explore Menu Button Functionality
document.getElementById('exploreBtn').addEventListener('click', function() {
    // Scroll to the product section smoothly
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// products view more button
document.getElementById('viewMoreProduct').addEventListener('click', function() {
    // Scroll to the chiefs section smoothly
    document.getElementById('chiefs').scrollIntoView({ behavior: 'smooth' });
});

//get started with us 
document.getElementById('getStartedWithUs').addEventListener('click', function() {
    // Scroll to the footer section smoothly
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});

//chiefs view more button 

document.getElementById('viewMoreChief').addEventListener('click', function() {
    // Scroll to the footer section smoothly
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});

//submit review 

document.getElementById('submitReview').addEventListener('click', function() {
    // Scroll to the footer section smoothly
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

//find us 

document.getElementById('findUs').addEventListener('click', function() {
    // Scroll to the home section smoothly
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

//subscribe button 

document.getElementById('subscribe').addEventListener('click', function() {
    // Scroll to the home section smoothly
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.questionCard');
    let currentIndex = 0;

    function updateCardVisibility() {
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
    }

    function updateButtonState() {
        document.getElementById('prevBtn').disabled = currentIndex === 0;
        document.getElementById('nextBtn').disabled = currentIndex === cards.length - 1;
    }

    document.getElementById('prevBtn').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCardVisibility();
            updateButtonState();
        }
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCardVisibility();
            updateButtonState();
        }
    });

    // Initialize the visibility and button state on load
    updateCardVisibility();
    updateButtonState();
});
