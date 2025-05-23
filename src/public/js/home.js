console.log("Home frontend javascript file");

document.addEventListener("DOMContentLoaded", () => {
  // Sphere animation
  const sphereAnimation = anime({
    targets: ".sphere path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2500,
    delay: function (el, i) {
      return i * 100;
    },
    direction: "alternate",
    loop: true,
  });

  // Fade in content
  anime({
    targets: ".content-wrapper",
    opacity: [0, 1],
    translateY: [20, 0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 300,
  });

  // Stagger feature cards
  anime({
    targets: ".feature-card",
    opacity: [0, 1],
    translateY: [40, 0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(150, { start: 600 }),
  });

  // Pulse animation for CTA buttons
  anime({
    targets: ".primary-button",
    scale: [1, 1.05],
    easing: "easeInOutQuad",
    duration: 1500,
    direction: "alternate",
    loop: true,
  });
});

function fitElementToParent(el, padding) {
  let timeout = null;

  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, { scale: 1 });
    let pad = padding || 0;
    let parentEl = el.parentNode;
    let elOffsetWidth = el.offsetWidth - pad;
    let parentOffsetWidth = parentEl.offsetWidth;
    let ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
  }

  resize();
  window.addEventListener("resize", resize);
}

(function () {
  const sphereEl = document.querySelector(".sphere-animation");
  const spherePathEls = sphereEl.querySelectorAll(".sphere path");
  const pathLength = spherePathEls.length;
  const animations = [];

  fitElementToParent(sphereEl);

  const breathAnimation = anime({
    begin: function () {
      for (let i = 0; i < pathLength; i++) {
        animations.push(
          anime({
            targets: spherePathEls[i],
            stroke: {
              value: ["rgba(255,75,75,1)", "rgba(80,80,80,.35)"],
              duration: 500,
            },
            translateX: [2, -4],
            translateY: [2, -4],
            easing: "easeOutQuad",
            autoplay: false,
          })
        );
      }
    },
    update: function (ins) {
      animations.forEach(function (animation, i) {
        let percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false,
  });

  const introAnimation = anime
    .timeline({
      autoplay: false,
    })
    .add(
      {
        targets: spherePathEls,
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: 3900,
          easing: "easeInOutCirc",
          delay: anime.stagger(190, { direction: "reverse" }),
        },
        duration: 2000,
        delay: anime.stagger(60, { direction: "reverse" }),
        easing: "linear",
      },
      0
    );

  const shadowAnimation = anime(
    {
      targets: "#sphereGradient",
      x1: "25%",
      x2: "25%",
      y1: "0%",
      y2: "75%",
      duration: 30000,
      easing: "easeOutQuint",
      autoplay: false,
    },
    0
  );

  function init() {
    introAnimation.play();
    breathAnimation.play();
    shadowAnimation.play();
  }

  init();
})();
