import {
  pageBackground,
  navMenuButton,
  navExitButton,
  navItems,
  navLinks,
} from '../constants/index';

function changeNavItemsTabIndex(index) {
  if (navExitButton.tabIndex.toString() !== index.toString()) {
    navLinks.forEach((link) => {
      link.tabIndex = index;
    });
    navExitButton.tabIndex = index;
  }
}

function handlePageClick(e) {
  const el = e.target;
  const isElMenuBtn =
    el.classList.contains('la-bars') ||
    el.classList.contains('nav__btn_icon_menu');
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
  changeNavItemsTabIndex(0);
}

function closeNavMenu() {
  navItems.classList.remove('nav__items_show');
  pageBackground.removeEventListener('click', handlePageClick);
  changeNavItemsTabIndex(-1);
}

function handleScreenChange() {
  if (!navItems.classList.contains('nav__items_show')) {
    changeNavItemsTabIndex(document.body.offsetWidth < 1024 ? -1 : 0);
  }
}

handleScreenChange();
navMenuButton.addEventListener('click', openNavMenu);
navExitButton.addEventListener('click', closeNavMenu);
window.addEventListener('resize', handleScreenChange);
