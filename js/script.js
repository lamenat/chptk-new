document.addEventListener('DOMContentLoaded', function() {
    // Schedule tabs functionality
    const scheduleTabs = document.querySelectorAll('.schedule-nav-btn');
    if (scheduleTabs.length > 0) {
        scheduleTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                scheduleTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Here you would load the corresponding schedule data
                // For now we just show an alert
                alert('Загрузка расписания для ' + this.textContent);
            });
        });
    }
    
    // Mobile menu toggle (for small screens)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    mobileMenuToggle.style.display = 'none';
    
    const navMenu = document.querySelector('.nav-menu');
    const headerTop = document.querySelector('.header-top');
    
    if (navMenu && headerTop) {
        headerTop.appendChild(mobileMenuToggle);
        
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
        
        function checkScreenSize() {
            if (window.innerWidth <= 576px) {
                mobileMenuToggle.style.display = 'block';
                navMenu.style.display = 'none';
            } else {
                mobileMenuToggle.style.display = 'none';
                navMenu.style.display = 'flex';
            }
        }
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});