function removeAllListeners(el, type) {
  const listeners = getEventListeners(el, type);
  listeners.forEach((listener) => {
    el.removeEventListener(type, listener.listener, listener.useCapture);
  });
}

function throttle(fn, delay) {
  let timeout = null;

  return function () {
    const args = arguments;

    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, args);
        timeout = null;
      }, delay);
    }
  };
}
