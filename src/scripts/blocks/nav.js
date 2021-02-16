import focusLock from 'dom-focus-lock';
import {
  pageBackground,
  navMenuButton,
  navExitButton,
  navItemsDialogExitBtn,
  navItemsDialog,
  navItemsDialogLinks,
  navItems,
} from '../constants/index';

function handlePageClick(e) {
  const el = e.target;
  const isElMenuBtn =
    el.classList.contains('la-bars') ||
    el.classList.contains('nav__btn_icon_menu');
  if (!el.closest('.nav__items') && !isElMenuBtn) {
    // eslint-disable-next-line no-use-before-define
    closeNavMenu();
  }
}

function handlePageKeyup() {
  const el = document.activeElement;
  const isElMenuBtn =
    el.classList.contains('la-bars') ||
    el.classList.contains('nav__btn_icon_menu');
  if (!el.closest('.nav__items') && !isElMenuBtn) {
    // eslint-disable-next-line no-use-before-define
    closeNavMenu();
  }
}

function openNavMenu() {
  if (document.body.clientWidth < 768) {
    navItemsDialog.classList.add('nav__items_show');
    focusLock.on(navItemsDialog);
  } else {
    navItems.classList.add('nav__items_show');
    pageBackground.addEventListener('keyup', handlePageKeyup);
    pageBackground.addEventListener('click', handlePageClick);
  }
}

function closeNavMenu() {
  if (document.body.clientWidth < 768) {
    navItemsDialog.classList.remove('nav__items_show');
    focusLock.off(navItemsDialog);
  } else {
    navItems.classList.remove('nav__items_show');
    pageBackground.removeEventListener('keyup', handlePageKeyup);
    pageBackground.removeEventListener('click', handlePageClick);
  }
}

navMenuButton.addEventListener('click', openNavMenu);
navExitButton.addEventListener('click', closeNavMenu);
navItemsDialogExitBtn.addEventListener('click', closeNavMenu);
navItemsDialogLinks.forEach((link) => {
  link.addEventListener('click', closeNavMenu);
});
