document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    
    dropdowns.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const menu = item.querySelector('.dropdown-menu');
            if (menu) menu.classList.add('show');
        });
        
        item.addEventListener('mouseleave', () => {
            const menu = item.querySelector('.dropdown-menu');
            if (menu) menu.classList.remove('show');
        });
    });
});
