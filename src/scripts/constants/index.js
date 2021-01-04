const pageBackground = document.querySelector('.page__background');
const navMenuButton = document.querySelector('.nav__btn_icon_menu');
const navExitButton = document.querySelector('.nav__btn_icon_exit');
const navItems = document.querySelector('.nav__items');

const videosNewVideos = Array.from(
  document.querySelectorAll('.videos__list_group_new .video'),
);
const videosPopularVideos = Array.from(
  document.querySelectorAll('.videos__list_group_popular .video'),
);

export {
  pageBackground,
  navMenuButton,
  navExitButton,
  navItems,
  videosNewVideos,
  videosPopularVideos,
};
