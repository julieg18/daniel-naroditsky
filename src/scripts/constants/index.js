import faviconSize32IconHref from '../../images/favicon_package_v0.16/favicon-32x32.png';
import faviconSize16IconHref from '../../images/favicon_package_v0.16/favicon-16x16.png';
import safariSvgIconHref from '../../images/favicon_package_v0.16/safari-pinned-tab.svg';
import appleTouchIconHref from '../../images/favicon_package_v0.16/apple-touch-icon.png';

const appleTouchIconLink = document.querySelector(
  'link[rel="apple-touch-icon"]',
);
const faviconSize16IconLink = document.querySelector(
  'link[rel="icon"][sizes="16x16"]',
);
const faviconSize32IconLink = document.querySelector(
  'link[rel="icon"][sizes="32x32"]',
);
const safariSvgIconLink = document.querySelector('link[rel="mask-icon"]');

const pageBackground = document.querySelector('.page__background');
const navItems = document.querySelector('.nav__items:not([role="dialog"])');
const navItemsDialog = document.querySelector('.nav__items[role="dialog"]');
const navMenuButton = document.querySelector('.nav__btn_icon_menu');
const navExitButton = navItems.querySelector('.nav__btn_icon_exit');
const navItemsDialogExitBtn = navItemsDialog.querySelector(
  '.nav__btn_icon_exit',
);
const navItemsDialogLinks = Array.from(
  navItemsDialog.querySelectorAll('.nav__link'),
);

const videosNewVideos = Array.from(
  document.querySelectorAll('.videos__list_group_new .video'),
);
const videosPopularVideos = Array.from(
  document.querySelectorAll('.videos__list_group_popular .video'),
);

export {
  appleTouchIconHref,
  faviconSize16IconHref,
  faviconSize32IconHref,
  safariSvgIconHref,
  appleTouchIconLink,
  faviconSize16IconLink,
  faviconSize32IconLink,
  safariSvgIconLink,
  pageBackground,
  navMenuButton,
  navExitButton,
  navItems,
  navItemsDialogExitBtn,
  navItemsDialog,
  navItemsDialogLinks,
  videosNewVideos,
  videosPopularVideos,
};
