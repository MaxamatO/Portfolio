let faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: .4,
    rootMargin: "0px 0px -10px 0px"
};

const appearOnScroll = new IntersectionObserver(function
    (entries, appearOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

const mobileNav = document.querySelector(".menu-list");
const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle("active");
})