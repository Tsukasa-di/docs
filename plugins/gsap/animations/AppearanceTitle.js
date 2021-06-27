import { gsap } from "gsap";
import "../effects";

export function AppearanceTitle(duration=1, y=50) {
  const AppearanceTitle = gsap.timeline()
    .fadeIn("body", {duration: 1})
    .fadeUp(".docs", {duration: duration, y: y}, "-=.5")
    .fadeUp(".green-sock", {duration: duration, y: y}, "-=.1")
    .fadeUp(".animation-platform", {duration: duration, y: y}, "-=.1")
    .fadeIn(".G", {duration: .4,})
    .fadeIn(".S", {duration: .4,}, "-=.1")
    .fadeIn(".A", {duration: .4,}, "-=.1")
    .fadeIn(".P", {duration: .4,}, "-=.1")
}
