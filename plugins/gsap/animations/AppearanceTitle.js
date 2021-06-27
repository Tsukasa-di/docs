import { gsap } from "gsap";
import "../effects";

export function AppearanceTitle(duration=1, y=50) {
  document.querySelector("body").style.opacity = "0";
  gsap.timeline({ defaults: {duration: duration} })
    .to("body", {opacity: 1, ease: "power4.in"})
    .fadeUp(".docs", {y: y}, "-=.5")
    .fadeUp(".green-sock", {y: y}, "-=.4")
    .fadeUp(".animation-platform", {y: y}, "-=.4")
    .fadeIn(".document", {duration: .4,}, "-=.6")
    .fadeIn(".G", {duration: .4,}, "-=.1")
    .fadeIn(".S", {duration: .4,}, "-=.1")
    .fadeIn(".A", {duration: .4,}, "-=.1")
    .fadeIn(".P", {duration: .4,}, "-=.1")
    // .fadeIn("#scroll", {duration: .4,}, "-=.1")
}
