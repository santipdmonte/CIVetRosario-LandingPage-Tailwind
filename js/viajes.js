document.addEventListener('DOMContentLoaded', function() {

    // ==================== Mobile Nav ====================
    const mobileNav = document.querySelector('.mnav');
    const closeBtn = document.querySelector('.mnav__close-btn');
    const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

    const navOpenedClass = 'left-0';
    const navClosedClass = '-left-[300px]';
    const arrowLeftClass = 'ri-arrow-left-s-line';
    const arrowRightClass = 'ri-arrow-right-s-line';

    function toggleNav() {
        mobileNav.classList.toggle(navOpenedClass);
        mobileNav.classList.toggle(navClosedClass);
        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }

    closeBtn.addEventListener('click', function() {
        if (mobileNav.classList.contains(navClosedClass)) {
            mobileNav.classList.toggle(navClosedClass);
            mobileNav.classList.toggle(navOpenedClass);
        } else {
            toggleNav();
        }
    });

    // ==================== FAQ Accordion ====================
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(function(item) {
        var question = item.querySelector('.faq__question');
        var icon = question.querySelector('i');

        question.addEventListener('click', function() {
            var isOpen = item.classList.contains('open');

            // Close all other items
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                    var otherIcon = otherItem.querySelector('.faq__question i');
                    otherIcon.classList.remove('ri-subtract-line');
                    otherIcon.classList.add('ri-add-line');
                    otherIcon.style.transform = '';
                    otherItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            if (isOpen) {
                item.classList.remove('open');
                icon.classList.remove('ri-subtract-line');
                icon.classList.add('ri-add-line');
                icon.style.transform = '';
                question.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('open');
                icon.classList.remove('ri-add-line');
                icon.classList.add('ri-subtract-line');
                icon.style.transform = 'rotate(180deg)';
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ==================== ScrollReveal ====================
    var sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 3000,
        delay: 600
    });

    // Hero
    sr.reveal('.hero__text', { origin: 'top' });
    sr.reveal('.hero__img');

    // Pain Points
    sr.reveal('.pain-points', { delay: 0, duration: 2000 });

    // Service Cards
    sr.reveal('.svc-card', {
        delay: 0,
        distance: '100px',
        interval: 100,
        origin: 'bottom'
    });

    // Timeline Steps
    sr.reveal('.timeline-step', {
        delay: 0,
        distance: '60px',
        interval: 150,
        origin: 'left'
    });

    // Destinations
    sr.reveal('.destinos', { delay: 0, duration: 2000 });

    // Testimonials
    sr.reveal('.testimonial-card', {
        delay: 0,
        distance: '100px',
        interval: 100,
        origin: 'bottom'
    });

    // Differentiators
    sr.reveal('.diff-card', {
        delay: 0,
        distance: '80px',
        interval: 80,
        origin: 'bottom'
    });

    // Timeline Info
    sr.reveal('.timeline-info', { delay: 0, duration: 2000 });

    // FAQ
    sr.reveal('.faq-section', { delay: 0, duration: 2000 });

    // Newsletter
    sr.reveal('.newsletter', { delay: 0, duration: 2000 });
});
