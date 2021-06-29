import { gsap } from "gsap";
import "../effects";
import anime from 'animejs/lib/anime.es.js';

export function AppearanceTitle(duration=1, y=50) {
  document.querySelector("body").style.opacity = "0";
  gsap.timeline({ defaults: {duration: duration} })
    .to("body", {opacity: 1, ease: "power4.in"})
    .fadeUp(".docs", {y: y}, "-=.5")
    .fadeUp(".green-sock", {y: y}, "-=.4")
    .fadeUp(".animation-platform", {y: y}, "-=.4")
    .from(".document", {duration: .1, opacity: 0}, "-=.6")
    .to(".documentation", {
      opacity: 1,
      onStart: function() {
        anime({
          targets: ".documentation path",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 3000
        });
      }
    }, "-=.8")
    .fadeIn(".document p")
    .fadeIn(".G", {duration: .4,}, "-=1")
    .fadeIn(".S", {duration: .4,}, "-=.1")
    .fadeIn(".A", {duration: .4,}, "-=.1")
    .fadeIn(".P", {duration: .4,}, "-=.1")
    // .fadeIn("#scroll", {duration: .4,}, "-=.1")
}
