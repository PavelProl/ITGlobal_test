const wrapper = document.querySelector(".wrapper");
const menuFooter = document.querySelector(".menu__footer");
const menuBody = document.querySelector(".menu__body");
const menuBodySub = document.querySelector(".menu__body-sub");
const menuBodySubSub = document.querySelector(".menu__body-subsub");
const menuList = document.querySelector('.menu__list');
const langBody = document.querySelector(".lang-menu__body");
const langBodyActive = document.querySelector(".lang-menu__body._active");

// открытие/закрытие подменю первого (Sub) уровня
const menuLinks = document.querySelectorAll(".menu__link");
if (menuLinks.length > 0) {
    for (let i = 0; i < menuLinks.length; i++) {
        const menuLink = menuLinks[i];
        menuLink.addEventListener("click", function(e) {
            menuBodySub.classList.toggle("_active");
            langBody.classList.remove("_active");
            if (menuBodySub.classList.contains("_active")) {
                menuFooter.classList.add("_none");
            } else {
                menuFooter.classList.remove("_none");
            }
            e.preventDefault();
        });
    }
}

// открытие/закрытие подменю второго (SubSub) уровня
const menuSubLinks = document.querySelectorAll(".menu__sub-link");
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
        menuBodySubSub.classList.remove("_active");
        menuBodySub.classList.remove("_active");
        iconMenu.classList.toggle("_active");
        langSwitcher.classList.toggle("_visible")
        langBody.classList.remove("_active");
        wrapper.classList.toggle("_visible");
        if (wrapper.classList.contains("_visible")) {
            menuFooter.classList.remove("_none");
        } else {
            menuFooter.classList.add("_none");
        }
        e.preventDefault();
    });
}

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

// выбор языка в языковом меню
const langMenuLinks = document.querySelectorAll(".lang-menu__link");

for (let elem of langMenuLinks) {
    elem.addEventListener("click", function(e) {
        const itemChild = elem.querySelector(".item__content-right");
        let current = document.querySelector(".lang-menu__link._current");
        const currentChild = current.querySelector("._active");
        current.classList.remove("_current");
        currentChild.classList.remove("_active");
        currentChild.classList.add("_none");
        elem.classList.add("_current");
        itemChild.classList.add("_active");
        itemChild.classList.remove("_none");
        e.preventDefault();
    });
}
