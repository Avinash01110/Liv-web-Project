// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });

gsap.from("#page1 h1", {
  y: -10,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from("#members", {
  y: 15,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from("#logo", {
  transform: "translateX(120%)",
  scrollTrigger: {
    trigger: "#members",
    scroller: "body",
    start: "top 40%",
    scrub: 2,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  "use-strict";

  gsap.registerPlugin(ScrollTrigger);

  let rightPhotoItems = document.querySelectorAll("#right-photo-item");

  rightPhotoItems.forEach(function (item, index) {
    item.style.zIndex = rightPhotoItems.length - index;
  });

  gsap.set("#right-photo-item", {
    clipPath: function () {
      return "inset(0px 0px 0px 0px)";
    },
  });

  const animation = gsap.to("#right-photo-item:not(:last-child)", {
    clipPath: function () {
      return "inset(0px 0px 100% 0px)";
    },
    stagger: 0.5,
    ease: 'none',
  });

  ScrollTrigger.create({
    trigger: "#projects",
    scroller: "body",
    start: "top top",
    end: "bottom bottom",
    animation: animation,
    scrub: 1
  });
});
