import {
  pageBackground,
  navMenuButton,
  navExitButton,
  navItems,
} from '../constants/index';

function handlePageClick(e) {
  const el = e.target;
  const isElMenuBtn = el.classList.contains('la-bars');
  const isElNavItems = el === navItems || navItems.contains(el);
  const isElNavLink = el.classList.contains('nav__link');

  if ((!isElMenuBtn && !isElNavItems) || isElNavLink) {
    // eslint-disable-next-line no-use-before-define
    closeNavMenu();
  }
}

function openNavMenu() {
  navItems.classList.add('nav__items_show');
  pageBackground.addEventListener('click', handlePageClick);
}

function closeNavMenu() {
  navItems.classList.remove('nav__items_show');
  pageBackground.removeEventListener('click', handlePageClick);
}

navMenuButton.addEventListener('click', openNavMenu);
navExitButton.addEventListener('click', closeNavMenu);
