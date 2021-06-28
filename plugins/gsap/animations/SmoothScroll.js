import { gsap } from "gsap";

export function SmoothScroll(
  targetObject = {
    currentValue: 0
  },
  setting  = {
    duration: 1,
    targetValue: 100,
    ease: "power3.inOut"
  }, callback) {
  gsap.to(targetObject, {
    duration: setting.duration,
    ease: setting.ease,
    currentValue: setting.targetValue,
    onUpdate: function() {
      callback(targetObject.currentValue)
    }
  });
}
