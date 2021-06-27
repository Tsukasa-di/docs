import { gsap } from "gsap";

gsap.registerEffect({
  name: "fadeUp",
  effect: (targets, config) => {
    return gsap.from(targets, {
      duration: config.duration,
      opacity: 0,
      y: config.y
    });
  },
  defaults: {
    duration: 1,
    y: 50
  },
  extendTimeline: true
});

gsap.registerEffect({
  name: "fadeIn",
  effect: (targets, config) => {
    return gsap.from(targets, {
      duration: config.duration,
      opacity: 0
    });
  },
  defaults: {
    duration: 1
  },
  extendTimeline: true
})
