document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX - 16 + 'px';
            follower.style.top = e.clientY - 16 + 'px';
        }, 50);
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(1.5)';
        follower.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        follower.style.transform = 'scale(1)';
    });

    // Handle hover states for links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            follower.style.width = '60px';
            follower.style.height = '60px';
            follower.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
            follower.style.borderColor = 'transparent';
        });
        link.addEventListener('mouseleave', () => {
            follower.style.width = '40px';
            follower.style.height = '40px';
            follower.style.backgroundColor = 'transparent';
            follower.style.borderColor = 'var(--accent)';
        });
    });

    // Surprise Button
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseContent = document.getElementById('surprise-content');

    surpriseBtn.addEventListener('click', () => {
        surpriseContent.classList.toggle('hidden');
        if (!surpriseContent.classList.contains('hidden')) {
            surpriseContent.style.opacity = '0';
            setTimeout(() => {
                surpriseContent.style.opacity = '1';
            }, 10);
            surpriseBtn.textContent = 'Close';
        } else {
            surpriseBtn.textContent = 'Click for a small thing';
        }
    });

    // Scroll Reveal (Simple Implementation)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.memory-card, .vibe-text, .glass-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // Add reveal-active class logic in JS for simplicity
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal-active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
