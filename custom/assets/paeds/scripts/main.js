var swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  autoHeight: true,
});

var swiper = new Swiper(".boySwiper", {
  loop: true,
  // grabCursor: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Enables clicking on the pagination bullets
  },
});

// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll(".menu-link");
//   const navMenu = document.getElementById("navbar");
//   const navbarHeight = navMenu.offsetHeight;
//   var navbarOffset = navMenu.offsetTop;
//   // sections selections
//   const aboutUsSection = document.getElementById("about-us");
//   const emergencySection = document.getElementById("emergency");
//   const serviceSection = document.getElementById("services");
//   const whyChooseSection = document.getElementById("why-choose");
//   const articlesSection = document.getElementById("articles");
//   const contactSection = document.getElementById("contact");

//   document.addEventListener("scroll", () => {
//     //
//     if (window.scrollY > navbarOffset) {
//       navbar.classList.add("sticky-nav");
//     } else {
//       navbar.classList.remove("sticky-nav");
//     }
//     //
//     const aboutViewPort = aboutUsSection.getBoundingClientRect();
//     const emergencyViewPort = emergencySection.getBoundingClientRect();
//     const serviceViewPort = serviceSection.getBoundingClientRect();
//     const whyChooseViewPort = whyChooseSection.getBoundingClientRect();
//     const articlesViewPort = articlesSection.getBoundingClientRect();
//     const contactViewPort = contactSection.getBoundingClientRect();

//     const aboutInView = aboutViewPort.top <= navbarHeight + 30;
//     const emergencyInView = emergencyViewPort.top <= navbarHeight + 30;
//     const serviceInView = serviceViewPort.top <= navbarHeight + 30;
//     const whyChooseInView = whyChooseViewPort.top <= navbarHeight + 30;
//     const articlesInView = articlesViewPort.top <= navbarHeight + 30;
//     const contactInView = contactViewPort.bottom <= 1140;
//     if (aboutInView) {
//       navLinks.forEach((link) => link.classList.remove("active"));
//       navLinks[1].classList.add("active");
//     } else {
//       navLinks.forEach((link) => link.classList.remove("active"));
//     }
//     if (emergencyInView) {
//       navLinks.forEach((link) => link.classList.remove("active"));
//       navLinks[2].classList.add("active");
//     }
//     if (serviceInView) {
//       navLinks.forEach((link) => link.classList.remove("active"));
//       navLinks[3].classList.add("active");
//     }
//     if (whyChooseInView) {
//       navLinks.forEach((link) => link.classList.remove("active"));
//       navLinks[4].classList.add("active");
//     }
//     if (articlesInView) {
//       navLinks.forEach((link) => link.classList.remove("active"));
//       navLinks[5].classList.add("active");
//     }
//     if (contactInView) {
//       navLinks.forEach((link) => link.classList.remove("active"));
//       navLinks[6].classList.add("active");
//     }

//     // Get the position of the element relative to the viewport
//     // Check if the top of the element is at or above the top of the viewport
//     // var isAtTop = rect.top <= navbarHeight;
//   });

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function () {
//       // Remove 'active' class from all links
//       navLinks.forEach((link) => link.classList.remove("active"));
//       if (!link.classList.contains("logo")) {
//         // Add 'active' class to the clicked link
//         this.classList.add("active");
//       }
//     });
//   });
// });

// scroll to top
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scroll-to-top");

  // Show the button when the user scrolls down
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollToTopBtn.style.opacity = 1;
    } else {
      scrollToTopBtn.style.opacity = 0;
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});

// jquery codes
// $(function () {
//   const navMenu = document.getElementById("navbar");
//   const navbarHeight = navMenu.offsetHeight;
//   $("a[href*=\\#]:not([href=\\#])").on("click", function () {
//     var target = $(this.hash);
//     target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
//     if (target.length) {
//       $("html,body").animate(
//         {
//           scrollTop: target.offset().top - navbarHeight,
//         },
//         0
//       );
//       return false;
//     }
//   });
// });

// auto year update
const yearPlaceholderNode = document.querySelectorAll(".c-year");
const date = new Date();
yearPlaceholderNode.forEach(
  (placeholder) => (placeholder.innerHTML = date.getFullYear())
);
