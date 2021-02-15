import {
  pageBackground,
  navMenuButton,
  navExitButton,
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
  navItems.classList.add('nav__items_show');
  pageBackground.addEventListener('click', handlePageClick);
  pageBackground.addEventListener('keyup', handlePageKeyup);
}

function closeNavMenu() {
  navItems.classList.remove('nav__items_show');
  pageBackground.removeEventListener('click', handlePageClick);
  pageBackground.removeEventListener('keyup', handlePageKeyup);
}

navMenuButton.addEventListener('click', openNavMenu);
navExitButton.addEventListener('click', closeNavMenu);
