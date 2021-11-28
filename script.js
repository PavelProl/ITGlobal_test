const menu = document.querySelector(".menu");
const menuFooter = document.querySelector(".menu__footer");
const wrapper = document.querySelector(".wrapper");
const menuBody = document.querySelector(".menu__body");
const menuBodySub = document.querySelector(".menu__body-sub");
const menuBodySubSub = document.querySelector(".menu__body-subsub");

const menuLinks = document.querySelectorAll(".menu__link");
const menuSubLinks = document.querySelectorAll(".menu__sub-link");

const menuList = document.querySelector('.menu__list');
const langBody = document.querySelector(".lang-menu__body");
const langBodyActive = document.querySelector(".lang-menu__body._active");

// открытие/закрытие подменю первого (Sub) уровня
if (menuLinks.length > 0) {
    for (let i = 0; i < menuLinks.length; i++) {
        const menuLink = menuLinks[i];
        menuLink.addEventListener("click", function(e) {
            menuBodySub.classList.toggle("_active");
            menuFooter.classList.toggle("_none");
            langBody.classList.remove("_active");
            e.preventDefault();
        });
    }
}

// открытие/закрытие подменю второго (SubSub) уровня
if (menuSubLinks.length > 0) {
    for (let i = 0; i < menuSubLinks.length; i++) {
        const menuSubLink = menuSubLinks[i];
        menuSubLink.addEventListener("click", function(e) {
            menuBodySubSub.classList.toggle("_active");
            langBody.classList.remove("_active");
            e.preventDefault();
        });
    }
}

// Открытие/закрытие меню-бургера
const iconMenu = document.querySelector(".menu__icon");
const langSwitcher = document.querySelector(".lang-menu__header");
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        // document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        langSwitcher.classList.toggle("_visible")
        langBody.classList.remove("_active");
        wrapper.classList.toggle("_visible");
        e.preventDefault();
    });
}

const langMenuItem = document.querySelector(".lang-menu__item");
// открытие/закрытие меню языкового меню
langSwitcher.addEventListener("click", function(e) {
    langBody.classList.toggle("_active");

    if (langBody.classList.contains("_active")) {
        document.body.addEventListener("click", function(e) {
            if (((e.target === menuBody) || (e.target === menuBodySub) || (e.target === menuBodySubSub))) {
                langBody.classList.remove("_active");
            }
        });
    }
});


