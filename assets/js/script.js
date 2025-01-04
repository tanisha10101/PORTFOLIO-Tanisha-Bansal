$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

   

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Tanisha Bansal";
           
        }
        else {
            document.title = "Come Back To Portfolio";
          
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "Machine Learning", "web designing", "android development", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = skills.map(skill => {
        return `
        <div class="bar">
              <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
              </div>
        </div>`;
    }).join(''); 
    skillsContainer.innerHTML = skillHTML;
}




function showProjects(projects) {
    const projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";

    projects.forEach(project => {
        const imagePath = `/assets/images/projects/${project.image}`;
        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="box tilt" style="width: 350px; margin: 0.5rem">
                <img draggable="false" src="${imagePath}" alt="${project.name}" onerror="this.src='/assets/images/projects/default.png'">
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <div class="btns">
                            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });

    projectsContainer.innerHTML = projectsHTML;

    // Initialize Isotope after dynamically adding the items
    const $grid = $(".box-container").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        masonry: {
            columnWidth: 200
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        // Fetch projects and display them dynamically
        getProjects().then(data => {
            showProjects(data);
        });
    
        // Handle Isotope filter buttons (for projects page)
        $(".button-group").on("click", "button", function () {
            $(".button-group").find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked");
            const filterValue = $(this).attr("data-filter");
            $(".box-container").isotope({ filter: filterValue });
        });
    });
    





    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// disable developer mode
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
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '30px', // Reduced distance for quicker appearance
    duration: 400,    // Reduced duration for faster animations
    reset: false      // Disable reset for better performance
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 50 });
srtop.reveal('.home .content p', { delay: 50 });
srtop.reveal('.home .content .btn', { delay: 50 });

srtop.reveal('.home .image', { delay: 100 });
srtop.reveal('.home .linkedin', { interval: 100 });
srtop.reveal('.home .github', { interval: 100 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 50 });
srtop.reveal('.about .content .tag', { delay: 50 });
srtop.reveal('.about .content p', { delay: 50 });
srtop.reveal('.about .content .box-container', { delay: 50 });
srtop.reveal('.about .content .resumebtn', { delay: 50 });

/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 50 });
srtop.reveal('.skills .container .bar', { delay: 100 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 50 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 50 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 100 });
srtop.reveal('.experience .timeline .container', { interval: 100 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 100 });
srtop.reveal('.contact .container .form-group', { delay: 100 });

