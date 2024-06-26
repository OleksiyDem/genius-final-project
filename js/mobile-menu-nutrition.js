const mobileMenuNutrition = document.querySelector('.mobile-menu-nutrition');
const menuBtnOpenNutrition = document.querySelector('.menu-btn-open-nutrition');
const menuBtnCloseNutrition = document.querySelector(
  '.menu-btn-close-nutrition',
);
const menuBtnClose1Nutrition = document.querySelector(
  '.menu-btn-close1-nutrition',
);
const menuBtnClose2Nutrition = document.querySelector(
  '.menu-btn-close2-nutrition',
);
const menuBtnClose3Nutrition = document.querySelector(
  '.menu-btn-close3-nutrition',
);
const menuBtnClose4Nutrition = document.querySelector(
  '.menu-btn-close4-nutrition',
);

const toggleMenuNutrition = () =>
  mobileMenuNutrition.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpenNutrition.addEventListener('click', toggleMenuNutrition);
menuBtnCloseNutrition.addEventListener('click', toggleMenuNutrition);
menuBtnClose1Nutrition.addEventListener('click', toggleMenuNutrition);
menuBtnClose2Nutrition.addEventListener('click', toggleMenuNutrition);
menuBtnClose3Nutrition.addEventListener('click', toggleMenuNutrition);
menuBtnClose4Nutrition.addEventListener('click', toggleMenuNutrition);

menuBtnOpenNutrition.addEventListener('click', disableScroll);
menuBtnCloseNutrition.addEventListener('click', disableScroll);
menuBtnClose1Nutrition.addEventListener('click', disableScroll);
menuBtnClose2Nutrition.addEventListener('click', disableScroll);
menuBtnClose3Nutrition.addEventListener('click', disableScroll);
menuBtnClose4Nutrition.addEventListener('click', disableScroll);
