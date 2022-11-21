const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const landingPage = {
    menuStart: function () {
        let menuBtns = $$(".header__dropdown");
        let menuDropdown = $$(".dropdown__menu");

        let activeMenus = [];
        let onMenu = false;
        let onBtn = false;

        menuBtns.forEach((menuBtn) => {
            menuBtn.addEventListener("mouseenter", (btn) => {
                onBtn = true;
                let activeMenuID = btn.target.dataset.headerid;
                menuDropdown[activeMenuID].classList.add("dropdown--active");

                if (activeMenus.unshift(menuDropdown[activeMenuID]) > 1) {
                    activeMenus[0].dataset.headerid != activeMenus[1].dataset.headerid
                        ? activeMenus.pop().classList.remove("dropdown--active")
                        : activeMenus.pop();
                }
            });

            menuBtn.addEventListener("mouseleave", () => {
                onBtn = false;
                checkBrowsing();
            });
        });

        menuDropdown.forEach((dropDown) => {
            dropDown.addEventListener("mouseenter", () => {
                onMenu = true;
            });

            dropDown.addEventListener("mouseleave", () => {
                onMenu = false;
                checkBrowsing();
            });
        });

        function checkBrowsing() {
            setTimeout(() => {
                if (!onMenu & !onBtn) {
                    if (activeMenus.length > 0) {
                        activeMenus.pop().classList.remove("dropdown--active");
                    }
                }
            }, 100);
        }
    },

    coverSliderStart: function () {
        let slidersCount = 4;
        let sliders = Array.from(Array(slidersCount).keys());

        let container = $(".slider__transition-container");
        let leftBtn = $(".slider__nav--left");
        let rightBtn = $(".slider__nav--right");
        let slidersPage = $$(".slider__page");

        let nextSlideTimer = setInterval(() => {
            toNextSlide();
        }, 8000);

        leftBtn.addEventListener("click", () => {
            clearInterval(nextSlideTimer);
            toPrevSlide();
            nextSlideTimer = setInterval(() => {
                toNextSlide();
            }, 8000);
        });
        rightBtn.addEventListener("click", () => {
            clearInterval(nextSlideTimer);
            toNextSlide();
            nextSlideTimer = setInterval(() => {
                toNextSlide();
            }, 8000);
        });

        function playTransition() {
            container.innerHTML = "";
            container.innerHTML = `<div class=" slider__transition"></div>`;
        }

        function toNextSlide() {
            playTransition();
            sliders.push(sliders.shift());
            slidersPage[sliders[sliders.length - 1]].classList.remove("slider__page--active");
            slidersPage[sliders[0]].classList.add("slider__page--active");
        }

        function toPrevSlide() {
            playTransition();
            sliders.unshift(sliders.pop());
            slidersPage[sliders[0]].classList.add("slider__page--active");
            slidersPage[sliders[1]].classList.remove("slider__page--active");
        }
    },

    itemsSliderStart: function () {
        let slidersList = $$(".item-slider__wrapper");
        for (let i = 0; i < slidersList.length; i++) {
            let leftNav = slidersList[i].children[1];
            let rightNav = slidersList[i].children[3];
            let slider = slidersList[i].children[2];
            let offSetWidth = slidersList[i].clientWidth - slider.clientWidth;

            console.log(offSetWidth);

            leftNav.addEventListener("click", () => {
                navFade(rightNav, leftNav);
                slider.style.transform = "translateX(0px)";
            });

            rightNav.addEventListener("click", () => {
                navFade(rightNav, leftNav);
                slider.style.transform = "translateX(" + offSetWidth + "px)";
            });
        }

        function navFade(nav1, nav2) {
            nav1.classList.toggle("slider-nav--inactive");
            nav1.classList.toggle("slider-nav--active");
            nav2.classList.toggle("slider-nav--inactive");
            nav2.classList.toggle("slider-nav--active");
        }
    },

    start: function () {
        this.menuStart();
        this.coverSliderStart();
        this.itemsSliderStart();
    },
};

landingPage.start();
