let maybePreventPullToRefresh = false;
let lastTouchY = 0;
const touchstartHandler = (e) => {
  if (e.touches.length !== 1) return;
  lastTouchY = e.touches[0].clientY;
  maybePreventPullToRefresh = window.pageYOffset === 0;
};

const touchmoveHandler = (e) => {
  const touchY = e.touches[0].clientY;
  const touchYDelta = touchY - lastTouchY;
  lastTouchY = touchY;

  if (maybePreventPullToRefresh) {
    maybePreventPullToRefresh = false;
    if (touchYDelta > 0) {
      e.preventDefault(); // ปิดการรีเฟรช
    }
  }
};

document.addEventListener('touchstart', touchstartHandler, { passive: false });
document.addEventListener('touchmove', touchmoveHandler, { passive: false });
