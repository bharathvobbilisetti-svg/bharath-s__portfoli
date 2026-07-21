// ==========================
// Welcome Message
// ==========================

window.addEventListener("load", () => {
    console.log("Portfolio Loaded Successfully");
});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Contact Form Validation
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name=document.getElementById("name").value.trim();

    const email=document.getElementById("email").value.trim();

    const phone=document.getElementById("phone").value.trim();

    const message=document.getElementById("message").value.trim();

    if(name==="" || email==="" || phone==="" || message===""){

        alert("Please fill all fields.");

        return;

    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email.");

        return;

    }

    const phonePattern=/^[0-9]{10}$/;

    if(!phonePattern.test(phone)){

        alert("Phone number must contain exactly 10 digits.");

        return;

    }

    alert("Thank you " + name + "! Your message has been sent successfully.");

    form.reset();

});

// ==========================
// Hero Image Animation
// ==========================

const heroImage=document.querySelector(".hero-image img");

heroImage.addEventListener("mouseover",()=>{

    heroImage.style.transform="scale(1.08) rotate(5deg)";
    heroImage.style.transition=".4s";

});

heroImage.addEventListener("mouseout",()=>{

    heroImage.style.transform="scale(1) rotate(0deg)";

});

// ==========================
// Card Hover Glow
// ==========================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 20px 35px rgba(0,201,167,.5)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";

    });

});

// ==========================
// Button Click Animation
// ==========================

const buttons=document.querySelectorAll(".btn,.project-btn,button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(.95)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },150);

    });

});

// ==========================
// Fade-in Sections on Scroll
// ==========================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all .8s ease";

    observer.observe(section);

});