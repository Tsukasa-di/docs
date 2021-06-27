import { gsap } from "gsap";
import "../effects";

export function AppearanceCards(duration=1) {
  gsap.timeline({ defaults: {duration: duration} })
    .to(".cards-wrap", {
      stagger: .5,
      opacity: 1,
      rotationY: 0,
      rotationX: 0,
      ease: "power3.inOut"
    })
}
