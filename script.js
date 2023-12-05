document.addEventListener("DOMContentLoaded", function() {
    // Highlight the current section in navbar
    const navbar = document.getElementById('navbar');
    navbar.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            const current = navbar.getElementsByClassName('active');
            if (current.length > 0) { 
                current[0].className = current[0].className.replace(" active", "");
            }
            e.target.className += " active";
        }
    });
});
