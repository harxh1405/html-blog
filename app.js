// showing navbar when click menu on mobile view
// const mobile = document.querySelector('.menu-toggle');
// const mobileLink = document.querySelector('.sidebar');

// mobile.addEventListener("cilck",function(){
//     mobile.classList.toggle("is-active");
//     mobileLink.classList.toggle("active");
// });
document.addEventListener("DOMContentLoaded", function() {
    const mobile = document.querySelector('.menu-toggle');
    const mobileLink = document.querySelector('.sidebar');

    mobile.addEventListener("click", function() {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    });
});


// close menu when click
mobileLink.addEventListener("click", function() {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
        mobile.classList.remove("is-active");
        mobileLink.classList.remove("active");
    }
});