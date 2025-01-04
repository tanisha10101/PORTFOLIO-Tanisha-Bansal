$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 20) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '20px',  // Further reduced distance for even faster appearance
    duration: 300,     // Shortened duration for quicker animations
    reset: false       // No reset for better performance
});

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 50 });  // Minimal delay for instant reveal
srtop.reveal('.experience .timeline .container', { interval: 50 });  // Reduced interval for smoother appearance

// Fallback for white boxes (add this CSS to ensure visibility before animation)
document.querySelectorAll('.experience .timeline .container').forEach((container) => {
    container.style.opacity = '1';  // Ensure containers are visible before ScrollReveal kicks in
    container.style.transition = 'opacity 0.2s ease-in';  // Smooth visibility transition
});

// Disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Experience | Portfolio Tanisha Bansal";
    } else {
        document.title = "Come Back To Portfolio";
    }
});
