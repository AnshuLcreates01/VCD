const glow = document.querySelector(".cursor-glow");

if (glow) {

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("show");

}

});

});// Lightbox

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close-btn");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});// Active Navbar

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

document.querySelectorAll("section").forEach(section => {

const sectionTop = section.offsetTop;

if (scrollY >= sectionTop - 200) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});// Scroll Progress Bar

window.addEventListener("scroll", ()=>{

let scrollTop =
document.documentElement.scrollTop;

let scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let progress =
(scrollTop / scrollHeight) * 100;

document.querySelector(".progress-bar").style.width =
progress + "%";

});
// Advanced Parallax

window.addEventListener("scroll", () => {

let scroll = window.scrollY;

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

if(card1){
card1.style.transform =
`translateY(${scroll * 0.05}px)`;
}

if(card2){
card2.style.transform =
`translateY(${scroll * -0.08}px)`;
}

if(card3){
card3.style.transform =
`translateY(${scroll * 0.06}px)`;
}

if(card4){
card4.style.transform =
`translateY(${scroll * -0.04}px)`;
}

});// Blur Parallax

const blur1 = document.querySelector(".blur1");
const blur2 = document.querySelector(".blur2");
const blur3 = document.querySelector(".blur3");

window.addEventListener("scroll",()=>{

let scroll = window.scrollY;

if(blur1){

blur1.style.transform =
`translateY(${scroll * 0.03}px)`;

}

if(blur2){

blur2.style.transform =
`translateY(${scroll * -0.02}px)`;

}

if(blur3){

blur3.style.transform =
`translateY(${scroll * 0.04}px)`;

}

});