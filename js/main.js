let navbar = document.querySelector(".nav");
let navLinks = document.querySelectorAll(".nav-link");
let logo = document.querySelector(".logo img");
let originalLogoSrc = logo.src;
let landing = document.querySelector(".landing");

// make the navbar fixed at scrolling
window.onscroll = () => {
    // 600px
    if (document.documentElement.scrollTop > 200) {
        navbar.classList.add("scroll-navbar");
        // make all links white color except active link
        navLinks.forEach(navLink => { navLink.style.color = "#ccc"; });
        // fuction to update active link color at the scrolling
        updateActiveLinkColor(true);
        // update the src of the logo img on scrolling
        logo.src = "images/bakery-color.png";
        // update the position of the landing section
        landing.style.position = "relative";
    } else {
        navbar.classList.remove("scroll-navbar");
        navLinks.forEach(navLink => { navLink.style.color = ""; }); // Reset to default color
        updateActiveLinkColor(false);
        //  Restore the original logo source when not scrolling
        logo.src = originalLogoSrc;
        // Reset the position of the landing section
        landing.style.position = "";
    }
};
// Update Active Link Color At Scrolling
function updateActiveLinkColor(isScrolling) {
    navLinks.forEach(navLink => {
        if (navLink.classList.contains("active")) {
            if (isScrolling) {
                navLink.classList.remove("text-white");
                navLink.style.color = "black";
            } else {
                navLink.classList.add("text-white");
                navLink.style.color = ""; // Reset to default color
            }
        }
    });
}


