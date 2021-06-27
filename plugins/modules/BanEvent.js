const banEvent = {};
let animating = false;

banEvent.animationInterval = function(callback, target, event, interval) {
  target.addEventListener(event, banEvent, { passive: false });

  function banEvent(event) {
    event.preventDefault();
    if (!animating) {
      animationInterval();
      callback.start();
    }
    animating = true;
  };

  function animationInterval() {
    setTimeout(() => {
      target.removeEventListener(event, banEvent, { passive: false });
    }, interval);
    setInterval(() => {
      callback.finish();
    }, interval-500);
  }
};

export default banEvent;
