import { MDCRipple } from '@material/ripple';
import { MDCTabBar } from '@material/tab-bar';

// for (var button of document.querySelectorAll('.mdc-button')) {
//   new MDCRipple(button);
// }

// for (var button of document.querySelectorAll('.mdc-icon-button')) {
//   const iconButtonRipple = new MDCRipple(button);
//   iconButtonRipple.unbounded = true;
// }

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

// tab switching
var tab = document.querySelector('.mdc-tab-bar');
tab.addEventListener('MDCTabBar:activated', function (e) {
  document.querySelector('.tab-content-container').scrollTop = 0;
  document.querySelectorAll('.mdc-tab-content').forEach(c => {
    if (c.classList.contains(`mdc-tab-content-${e.detail.index}`)) {
      c.classList.add('active');
      c.classList.remove('inactive');
    } else {
      c.classList.remove('active');
      c.classList.add('inactive');
    }
  });
  // document.querySelector(`.mdc-tab-content-${e.detail.index}`).classList.add('active');
});

window.onload = function () {
  document.body.classList.remove('preload');
}