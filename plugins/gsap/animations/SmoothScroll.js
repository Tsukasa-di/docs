import { gsap } from "gsap";

export function SmoothScroll(
  targetObject = {
    target: 0
  },
  setting  = {
    duration: 1,
    value: 100,
    ease: "power3.inOut"
  }) {
  gsap.to(targetObject, {
    duration: setting.duration,
    ease: setting.ease,
    target: setting.value,
    onUpdate: function() {
      scrollTo(0, targetObject.target);
    }
  });
}
