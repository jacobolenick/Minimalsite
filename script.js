document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggle = document.getElementById('mode-toggle');
    const htmlElement = document.documentElement;

    modeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark-mode');
        
        // Optionally, save the user's preference
        const isDarkMode = htmlElement.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check for saved user preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        htmlElement.classList.add('dark-mode');
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more interactive features here, such as:
    // - Dark mode toggle
    // - Project filtering
    // - Loading blog posts dynamically
});
