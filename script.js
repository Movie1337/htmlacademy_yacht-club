let themeButtonDark = document.querySelector(".theme-button-dark");
let themeButtonLight = document.querySelector(".theme-button-light");
let fontButtonSansSerif = document.querySelector(".font-button-sans-serif");
let fontButtonSerif = document.querySelector(".font-button-serif");
let blogArticles = document.querySelectorAll(".blog-article");
let cardViewButtonGrid = document.querySelector(".card-view-button-grid");
let cardViewButtonList = document.querySelector(".card-view-button-list");
let cardList = document.querySelector(".cards");
let activePhoto = document.querySelector(".active-photo");
let previewList = document.querySelectorAll(".preview-list a");

themeButtonDark.onclick = function () {
  document.body.classList.add("dark");
  themeButtonLight.classList.remove("active");
  themeButtonDark.classList.add("active");
};

themeButtonLight.onclick = function () {
  document.body.classList.remove("dark");
  themeButtonDark.classList.remove("active");
  themeButtonLight.classList.add("active");
};

fontButtonSerif.onclick = function () {
  document.body.classList.add("serif");
  fontButtonSansSerif.classList.remove("active");
  fontButtonSerif.classList.add("active");
};

fontButtonSansSerif.onclick = function () {
  document.body.classList.remove("serif");
  fontButtonSerif.classList.remove("active");
  fontButtonSansSerif.classList.add("active");
};

for (let blogArticle of blogArticles) {
  let moreButton = blogArticle.querySelector(".more");
  moreButton.onclick = function () {
    blogArticle.classList.remove("short");
  };
}

cardViewButtonList.onclick = function () {
  cardList.classList.add("list");
  cardViewButtonGrid.classList.remove("active");
  cardViewButtonList.classList.add("active");
};

cardViewButtonGrid.onclick = function () {
  cardList.classList.remove("list");
  cardViewButtonList.classList.remove("active");
  cardViewButtonGrid.classList.add("active");
};

for (let activeImage of previewList) {
  activeImage.onclick = function (evt) {
    evt.preventDefault();
    activePhoto.src = activeImage.href;
    let currentActive = document.querySelector(".preview-list .active-item");
    currentActive.classList.remove("active-item");
    activeImage.classList.add("active-item");
  };
}
